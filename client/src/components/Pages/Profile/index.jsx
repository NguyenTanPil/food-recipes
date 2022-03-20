import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { AiOutlineSchedule } from 'react-icons/ai';
import { CgUnavailable } from 'react-icons/cg';
import { FaFly } from 'react-icons/fa';
import { FiUserCheck, FiUserPlus } from 'react-icons/fi';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import loadingImg from '../../../assets/gif-loading-icon-16.jpg';
import { selectUser } from '../../../features/userSlice';
import db from '../../../firebase';
import EditProfileModal from '../../EditProfileModal';
import LatestRecipes from '../../LatestRecipes';
import { Products } from '../../LatestRecipes/LatestRecipesStyles';
import {
  Body as ProductBody,
  Container as ProductContainer,
  Header as ProductHeader,
} from '../../Product/ProductStyles';
import RecipeCategories from '../../RecipeCategories';
import TitleBar from '../../TitleBar';
import { Content, RightSide } from '../Category/CategoryStyles';
import { LoadingShape } from '../RecipeDetail/RecipeDetailStyles';
import {
  AvatarAndEditButton,
  Body,
  Container,
  Cover,
  FollowingContainer,
  FollowingItem,
  Header,
  Info,
  NavContent,
  NavPane,
  NavTab,
  NavTabItem,
  NoHaveHover,
  ProductDesc,
} from './ProfileStyleds';

const Profile = () => {
  const currentUser = useSelector(selectUser);
  const navigate = useNavigate();
  const params = useParams();

  const [activeTab, setActiveTab] = useState('recipes');
  const [isShowEditModel, setIsShowEditModel] = useState(false);
  const [user, setUser] = useState();
  const [recipes, setRecipes] = useState([]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    let isSubscribed = true;

    const fetchUser = async () => {
      let response = {};

      try {
        const userRef = doc(db, 'users', params.profileId);
        const userSnap = await getDoc(userRef);
        response = { id: userSnap.id, ...userSnap.data() };
      } catch (error) {
        console.log('Error', error.message);
      }

      if (isSubscribed) {
        setUser(response);
      }
    };

    if (params.authorId === currentUser.id) {
      if (!currentUser.id) {
        navigate('/login');
      } else {
        setUser(currentUser);
      }
    } else {
      fetchUser();
    }

    return () => {
      isSubscribed = false;
    };
  }, [navigate, params.profileId, params.authorId, currentUser]);

  useEffect(() => {
    let isSubscribed = true;

    const fetchRecipes = async () => {
      const response = [];

      try {
        const queryRecipes = query(
          collection(db, 'recipes'),
          where('authorId', '==', user.id),
        );
        const querySnapshot = await getDocs(queryRecipes);

        querySnapshot.forEach((doc) => {
          response.push({ id: doc.id, ...doc.data() });
        });
      } catch (error) {
        console.log('Error: ' + error.message);
      }

      if (isSubscribed) {
        if (response.length === 0) {
          setRecipes();
        } else {
          setRecipes(response);
        }
      }
    };

    if (user) {
      fetchRecipes();
    }

    return () => {
      isSubscribed = false;
    };
  }, [user]);

  return (
    <>
      <TitleBar oneLine mainTitle="Detail Profile" pageList={['Profile']} />
      {isShowEditModel && (
        <EditProfileModal setShow={setIsShowEditModel} {...user} />
      )}
      {user ? (
        <Content>
          <Container>
            <Header>
              <Cover>
                <img src={user.background} alt="" />
              </Cover>
              <AvatarAndEditButton>
                <div>
                  <img src={user.avatar} alt="" />
                  <Info>
                    <h3>{user.name}</h3>
                    <span>@{user.userName}</span>
                    <p>
                      <AiOutlineSchedule />
                      {user.joined}
                    </p>
                  </Info>
                </div>

                {params.profileId === currentUser.id && (
                  <button onClick={() => setIsShowEditModel(true)}>
                    Edit <span>Profile</span>
                  </button>
                )}
              </AvatarAndEditButton>
            </Header>
            <Body>
              <NavTab>
                <NavTabItem
                  active={activeTab === 'recipes' ? 1 : 0}
                  onClick={() => handleTabChange('recipes')}
                >
                  <FaFly />
                  Recipes
                </NavTabItem>
                <NavTabItem
                  active={activeTab === 'photos' ? 1 : 0}
                  onClick={() => handleTabChange('photos')}
                >
                  <HiOutlinePhotograph />
                  Photos
                </NavTabItem>
                <NavTabItem
                  active={activeTab === 'followers' ? 1 : 0}
                  onClick={() => handleTabChange('followers')}
                >
                  <FiUserCheck />
                  Followers
                </NavTabItem>
                <NavTabItem
                  active={activeTab === 'following' ? 1 : 0}
                  onClick={() => handleTabChange('following')}
                >
                  <FiUserPlus />
                  Following
                </NavTabItem>
              </NavTab>
              <NavContent>
                <NavPane active={activeTab === 'recipes' ? 1 : 0}>
                  <Products>
                    {!recipes ? (
                      <NoHaveHover>
                        <CgUnavailable />
                        <span>No recipes found</span>
                      </NoHaveHover>
                    ) : recipes.length === 0 ? (
                      <LoadingShape>
                        <img src={loadingImg} alt="" />
                      </LoadingShape>
                    ) : (
                      recipes.map((recipe) => (
                        <ProductContainer key={recipe.id}>
                          <ProductHeader>
                            <Link to={`/${recipe.category}/${recipe.id}`}>
                              <img src={recipe.thumbnail} alt="" />
                            </Link>
                          </ProductHeader>
                          <ProductBody>
                            <Link to={`/${recipe.category}`}>
                              <h3>{recipe.category}</h3>
                            </Link>
                            <span>
                              <Link to={`/${recipe.category}/${recipe.id}`}>
                                {recipe.name}
                              </Link>
                            </span>
                            <ProductDesc>{recipe.desc}</ProductDesc>
                          </ProductBody>
                        </ProductContainer>
                      ))
                    )}
                  </Products>
                </NavPane>
                <NavPane active={activeTab === 'photos' ? 1 : 0}>
                  <FollowingContainer>
                    <FollowingItem>
                      <img
                        src="https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_182,w_181/v1/gk-static/gk/img/avatar/pie.png"
                        alt=""
                      />
                    </FollowingItem>
                    <FollowingItem>
                      <img
                        src="https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_182,w_181/v1/gk-static/gk/img/avatar/pie.png"
                        alt=""
                      />
                    </FollowingItem>
                    <FollowingItem>
                      <img
                        src="https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_182,w_181/v1/gk-static/gk/img/avatar/pie.png"
                        alt=""
                      />
                    </FollowingItem>
                    <FollowingItem>
                      <img
                        src="https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_182,w_181/v1/gk-static/gk/img/avatar/pie.png"
                        alt=""
                      />
                    </FollowingItem>
                    <FollowingItem>
                      <img
                        src="https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_182,w_181/v1/gk-static/gk/img/avatar/pop.png"
                        alt=""
                      />
                    </FollowingItem>
                    <FollowingItem>
                      <img
                        src="https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_182,w_181/v1/gk-static/gk/img/avatar/pie.png"
                        alt=""
                      />
                    </FollowingItem>
                  </FollowingContainer>
                </NavPane>
                <NavPane active={activeTab === 'followers' ? 1 : 0}>
                  <FollowingContainer>
                    <FollowingItem>
                      <img
                        src="https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_182,w_181/v1/gk-static/gk/img/avatar/pie.png"
                        alt=""
                      />
                      <a href="!#">Felix Nguyen</a>
                    </FollowingItem>
                    <FollowingItem>
                      <img
                        src="https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_182,w_181/v1/gk-static/gk/img/avatar/pop.png"
                        alt=""
                      />
                      <a href="!#">Connie K</a>
                    </FollowingItem>
                    <FollowingItem>
                      <img
                        src="https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_182,w_181/v1/gk-static/gk/img/avatar/pie.png"
                        alt=""
                      />
                      <a href="!#">WELLANDTONED</a>
                    </FollowingItem>
                  </FollowingContainer>
                </NavPane>
                <NavPane active={activeTab === 'following' ? 1 : 0}>
                  <FollowingContainer>
                    <FollowingItem>
                      <img
                        src="https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_182,w_181/v1/gk-static/gk/img/avatar/pie.png"
                        alt=""
                      />
                      <a href="!#">WELLANDTONED</a>
                    </FollowingItem>
                    <FollowingItem>
                      <img
                        src="https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_182,w_181/v1/gk-static/gk/img/avatar/pop.png"
                        alt=""
                      />
                      <a href="!#">Connie K</a>
                    </FollowingItem>
                    <FollowingItem>
                      <img
                        src="https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_182,w_181/v1/gk-static/gk/img/avatar/pie.png"
                        alt=""
                      />
                      <a href="!#">WELLANDTONED</a>
                    </FollowingItem>
                  </FollowingContainer>
                </NavPane>
              </NavContent>
            </Body>
          </Container>
          <RightSide>
            <LatestRecipes />
            <RecipeCategories />
          </RightSide>
        </Content>
      ) : (
        <LoadingShape>
          <img src={loadingImg} alt="" />
        </LoadingShape>
      )}
    </>
  );
};

export default Profile;
