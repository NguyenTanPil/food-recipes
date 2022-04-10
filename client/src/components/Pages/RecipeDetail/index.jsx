import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { BsCheck2Square } from 'react-icons/bs';
import { FaRegCalendarAlt, FaStar, FaStarHalf } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import loadingImg from '../../../assets/gif-loading-icon-16.jpg';
import { selectUser, setLoginDetail } from '../../../features/userSlice';
import db from '../../../firebase';
import { setCookie } from '../../../Utils/cookie';
import { getDayMonthYear } from '../../../Utils/getDayMonthYear';
import LatestRecipes from '../../LatestRecipes';
import RecipeCategories from '../../RecipeCategories';
import RecipeReview from '../../RecipeReview';
import {
  HalfStar,
  StarItem,
  Stars,
} from '../../RecipeReview/RecipeReviewStyles';
import TitleBar from '../../TitleBar';
import {
  Header,
  ShortLine,
  Title,
} from '../../TrendingRecipes/TrendingRecipesStyles';
import { RightSide } from '../Category/CategoryStyles';
import {
  AboutDetaill,
  Content,
  DescContent,
  Description,
  Directions,
  Image,
  IngreAndNutri,
  Ingredients,
  ListStep,
  LoadingShape,
  NumberStep,
  Nutrition,
  RecipeContainer,
  RecipeTitle,
  SaveButton,
  StepContent,
  StepItem,
  StepTitle,
} from './RecipeDetailStyles';

const RecipeDetail = () => {
  const params = useParams();
  const user = useSelector(selectUser);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [fullDesc, setFullDesc] = useState(false);
  const [recipe, setRecipe] = useState({});
  const [remdRecipes, setRemdRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSave, setIsSave] = useState(() => {
    const recipeListSaved = user.savedList.map((recipe) => recipe.recipeId);
    return recipeListSaved.includes(params.recipeId);
  });

  const handleSaveClick = async () => {
    // if saved => unsave
    let newUser;
    if (isSave) {
      newUser = {
        ...user,
        savedList: user.savedList.filter(
          (recipe) => recipe.recipeId !== params.recipeId,
        ),
      };

      setCookie({ data: newUser, cookieName: 'user' });

      await updateDoc(doc(db, 'users', user.id), {
        savedList: newUser.savedList,
      });
    } else {
      // if unsaved => save
      newUser = {
        ...user,
        savedList: [
          { recipeId: params.recipeId, savedAt: new Date().getTime() },
          ...user.savedList,
        ],
      };

      setCookie({ data: newUser, cookieName: 'user' });

      await updateDoc(doc(db, 'users', user.id), {
        savedList: newUser.savedList,
      });
    }
    dispatch(setLoginDetail(newUser));
    setIsSave(!isSave);
  };

  const redirectToLogin = () => {
    navigate('/login', { state: { prev: location.pathname } });
  };

  useEffect(() => {
    let isSubscribed = true;

    if (isSubscribed) {
      setLoading(true);
    }

    const recommendedRecipes = async (recipe, responseRecipes) => {
      try {
        const response = await fetch('/predict', {
          method: 'POST',
          body: JSON.stringify({
            recipes: responseRecipes,
            curr: {
              total_fat: recipe.nutrition[1]['quantity'],
              sugars: recipe.nutrition[2]['quantity'],
              sodium: recipe.nutrition[3]['quantity'],
              protein: recipe.nutrition[4]['quantity'],
              saturated_fat: recipe.nutrition[5]['quantity'],
            },
          }),
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
        });

        const output = await response.json();
        return output;
      } catch (error) {
        return responseRecipes
          .filter((r) => r.category === recipe.category)
          .slice(0, 4);
      }
    };

    const getRecipes = async () => {
      // get all review to recommend to user
      let responseRecipes = [];
      const queryRecipes = await getDocs(collection(db, 'recipes'));
      queryRecipes.forEach((doc) => {
        const recipe = doc.data();
        responseRecipes.push({
          recipeId: recipe.id,
          total_fat: recipe.nutrition[1]['quantity'],
          sugars: recipe.nutrition[2]['quantity'],
          sodium: recipe.nutrition[3]['quantity'],
          protein: recipe.nutrition[4]['quantity'],
          saturated_fat: recipe.nutrition[5]['quantity'],
        });
      });

      return responseRecipes;
    };

    const fetchRecipe = async () => {
      let response = {};

      try {
        const recipeRef = doc(db, 'recipes', params.recipeId);
        const recipeSnap = await getDoc(recipeRef);

        const authRef = doc(db, 'users', recipeSnap.data().authorId);
        const authSnap = await getDoc(authRef);

        const starRef = query(
          collection(db, 'reviews'),
          where('recipeId', '==', recipeSnap.data().id),
        );
        const starSnap = await getDocs(starRef);

        let averageStar = recipeSnap.data().stars;
        const starList = [];
        starSnap.forEach((doc) => starList.push(doc.data().stars));
        averageStar =
          starList.reduce((total, curr) => total + curr, 0) / starList.length ||
          0;
        averageStar = Math.round(averageStar * 10) / 10;

        await updateDoc(doc(db, 'recipes', params.recipeId), {
          stars: averageStar,
        });

        response = {
          authName: authSnap.data().name,
          averageStar: averageStar,
          ...recipeSnap.data(),
        };
      } catch (error) {
        console.log('Error', error.message);
      }

      if (isSubscribed) {
        const recipeList = await getRecipes();
        const listRecommended = await recommendedRecipes(response, recipeList);
        setRecipe(response);
        setRemdRecipes(listRecommended['remdRecipes']);
        setLoading(false);
      }
    };

    fetchRecipe();

    return () => {
      isSubscribed = false;
    };
  }, [params.recipeId]);

  return (
    <>
      <TitleBar
        mainTitle="Detail Recipe"
        pageList={
          loading ? [params.category, '...'] : [params.category, recipe.name]
        }
      />
      {!loading && recipe.id ? (
        <>
          <Content>
            <RecipeContainer>
              <RecipeTitle>
                <h2>{recipe.name}</h2>
              </RecipeTitle>
              <AboutDetaill>
                <li>
                  <FaRegCalendarAlt />
                  {recipe.createdAt
                    ? getDayMonthYear(recipe.createdAt)
                    : 'Feb 22, 2022'}
                </li>
                <li>
                  Recipe by{' '}
                  <span>
                    <Link
                      to={
                        user.id === recipe.authorId
                          ? '/profile'
                          : `/profile/${recipe.authorId}`
                      }
                    >
                      {recipe.authName}
                    </Link>
                  </span>
                </li>
                <li>
                  <Stars>
                    {Array.from({ length: 5 }, (_, i) => i + 1).map((star) => (
                      <StarItem
                        key={star}
                        active={star <= recipe.averageStar && 1}
                      >
                        {recipe.averageStar > star - 1 &&
                        recipe.averageStar < star ? (
                          <HalfStar>
                            <FaStarHalf />
                            <FaStar />
                          </HalfStar>
                        ) : (
                          <FaStar />
                        )}
                      </StarItem>
                    ))}
                  </Stars>
                  <span>{recipe.averageStar}/5</span>
                </li>
              </AboutDetaill>
              <Image>
                <img src={recipe.thumbnail} alt="" />
              </Image>
              {!user.id ? (
                <SaveButton onClick={redirectToLogin}>Login to save</SaveButton>
              ) : user.id === recipe.authorId ? null : (
                <SaveButton onClick={handleSaveClick}>
                  {isSave ? 'Unsave recipe' : 'Save Recipe'}
                </SaveButton>
              )}

              <Description>
                <Header>
                  <Title>Recipe Description</Title>
                  <ShortLine />
                </Header>
                <DescContent full={fullDesc ? 1 : 0}>
                  <p>{recipe.desc}</p>
                  <span onClick={() => setFullDesc(!fullDesc)}>
                    Read {fullDesc ? 'Less' : 'More'}{' '}
                  </span>
                </DescContent>
              </Description>
              <IngreAndNutri>
                <Ingredients>
                  <Header>
                    <Title>Recipe Ingredients</Title>
                    <ShortLine />
                  </Header>
                  <ul>
                    {recipe.ingredients.map((ingredient, index) => {
                      return (
                        <li key={index}>
                          <div>
                            <BsCheck2Square />
                          </div>
                          <span>{ingredient}</span>
                        </li>
                      );
                    })}
                  </ul>
                </Ingredients>
                <Nutrition>
                  <Header>
                    <Title>Recipe Nutrition</Title>
                    <ShortLine />
                  </Header>
                  <ul>
                    <li>Percents</li>
                    {recipe.nutrition.map((nutrition, index) => {
                      return (
                        <li key={index}>
                          <span>
                            {nutrition.name}:{' '}
                            {nutrition.name === 'Calories'
                              ? nutrition.quantity
                              : `${nutrition.quantity}g`}
                          </span>
                          <span>{nutrition.percents}%</span>
                        </li>
                      );
                    })}
                  </ul>
                </Nutrition>
              </IngreAndNutri>
              <Directions>
                <Header>
                  <Title>Recipe Directions</Title>
                  <ShortLine />
                </Header>
                <ListStep>
                  {recipe.steps.map((step, index) => {
                    return (
                      <StepItem key={index}>
                        <NumberStep>
                          <div>
                            <p>Step {index + 1}</p>
                          </div>
                        </NumberStep>
                        <StepContent>
                          {step.image && <img src={step.image} alt="" />}
                          <StepTitle>
                            <h3>{step.title}</h3>
                          </StepTitle>
                          <p>{step.desc}</p>
                        </StepContent>
                      </StepItem>
                    );
                  })}
                </ListStep>
              </Directions>
              <RecipeReview user={user} recipeId={recipe.id} />
            </RecipeContainer>
            <RightSide>
              <LatestRecipes
                title={'Recommends For You'}
                remdRecipes={remdRecipes}
              />
              <RecipeCategories />
            </RightSide>
          </Content>
        </>
      ) : (
        <LoadingShape>
          <img src={loadingImg} alt="" />
        </LoadingShape>
      )}
    </>
  );
};

export default RecipeDetail;
