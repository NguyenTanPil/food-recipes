import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsCheck2Square } from 'react-icons/bs';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import loadingImg from '../../../assets/gif-loading-icon-16.jpg';
import { selectUser } from '../../../features/userSlice';
import db from '../../../firebase';
import { getDayMonthYear } from '../../../Utils/getDayMonthYear';
import LatestRecipes from '../../LatestRecipes';
import RecipeCategories from '../../RecipeCategories';
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
  StepContent,
  StepItem,
  StepTitle,
} from './RecipeDetailStyles';

const RecipeDetail = () => {
  const params = useParams();
  const [fullDesc, setFullDesc] = useState(false);
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);
  const user = useSelector(selectUser);

  useEffect(() => {
    let isSubscribed = true;

    const fetchRecipes = async () => {
      let response = {};

      try {
        const recipeRef = doc(db, 'recipes', params.recipeId);
        const recipeSnap = await getDoc(recipeRef);

        const authRef = doc(db, 'users', recipeSnap.data().authorId);
        const authSnap = await getDoc(authRef);

        response = {
          id: recipeSnap.id,
          authName: authSnap.data().name,
          ...recipeSnap.data(),
        };
      } catch (error) {
        console.log('Error', error.message);
      }

      if (isSubscribed) {
        setRecipe(response);
        setLoading(false);
      }
    };

    fetchRecipes();

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
      {loading ? (
        <LoadingShape>
          <img src={loadingImg} alt="" />
        </LoadingShape>
      ) : (
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
                  <div>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </div>
                  <span>3/5</span>
                </li>
              </AboutDetaill>
              <Image>
                <img src={recipe.thumbnail} alt="" />
              </Image>
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
                          <BsCheck2Square />
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
                            {nutrition.name}: {nutrition.quantity}
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
            </RecipeContainer>
            <RightSide>
              <LatestRecipes />
              <RecipeCategories />
            </RightSide>
          </Content>
        </>
      )}
    </>
  );
};

export default RecipeDetail;
