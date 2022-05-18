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
import { AiOutlineSchedule } from 'react-icons/ai';
import { CgUnavailable } from 'react-icons/cg';
import { FaFly } from 'react-icons/fa';
import { FiUserCheck, FiUserPlus } from 'react-icons/fi';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import loadingImg from '../../../assets/gif-loading-icon-16.jpg';
import { selectUser } from '../../../features/userSlice';
import db from '../../../firebase';
import { getCookie, setCookie } from '../../../Utils/cookie';
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
  const location = useLocation();

  const [activeTab, setActiveTab] = useState('recipes');
  const [isShowEditModel, setIsShowEditModel] = useState(false);
  const [user, setUser] = useState();

  const [recipes, setRecipes] = useState([]);
  const [follows, setFollows] = useState([]);
  const [followers, setFollowers] = useState([]);

  const [isFollow, setIsFollow] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleClickFollow = async () => {
    if (currentUser.id) {
      // if follow =>  unfollow
      if (user.followerList.includes(currentUser.id)) {
        const newUser = {
          ...user,
          followerList: user.followerList.filter((id) => id !== currentUser.id),
        };

        const newCurrentUser = {
          ...currentUser,
          followList: currentUser.followList.filter((id) => id !== user.id),
        };

        setIsFollow(false);
        setUser(newUser);
        setCookie({ data: newCurrentUser, cookieName: 'user' });

        await updateDoc(doc(db, 'users', user.id), {
          followerList: newUser.followerList,
        });

        await updateDoc(doc(db, 'users', currentUser.id), {
          followList: newCurrentUser.followList,
        });
      } else {
        // if unfollow => follow
        const newUser = {
          ...user,
          followerList: [currentUser.id, ...user.followerList],
        };

        const newCurrentUser = {
          ...currentUser,
          followList: [user.id, ...currentUser.followList],
        };

        setIsFollow(true);
        setUser(newUser);
        setCookie({ data: newCurrentUser, cookieName: 'user' });

        await updateDoc(doc(db, 'users', user.id), {
          followerList: newUser.followerList,
        });

        await updateDoc(doc(db, 'users', currentUser.id), {
          followList: newCurrentUser.followList,
        });
      }
    } else {
      navigate('/login', { state: { prev: location.pathname } });
    }
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
        setIsFollow(response.followerList.includes(currentUser.id));
        setUser(response);
      }
    };

    if (params.profileId === currentUser.id || !params.profileId) {
      if (!currentUser.id) {
        navigate('/login');
      } else {
        const cookieUser = getCookie('user');
        setUser(cookieUser);
      }
    } else {
      // don't must current user
      fetchUser();
    }

    return () => {
      isSubscribed = false;
    };
  }, [navigate, params.profileId, params.authorId, currentUser]);

  useEffect(() => {
    let isSubscribed = true;

    const fetchFollows = async () => {
      const followsResponse = [];

      try {
        // fetch follows
        const queryFollows = query(
          collection(db, 'users'),
          where('id', 'in', user.followList),
        );
        const followsSnapshot = await getDocs(queryFollows);

        followsSnapshot.forEach((doc) => {
          followsResponse.push({
            id: doc.id,
            avatar: doc.data().avatar,
            name: doc.data().name,
          });
        });
      } catch (error) {
        console.log('Error fetch follows: ' + error.message);
      }

      if (isSubscribed) {
        setFollows(followsResponse);
      }
    };

    const fetchFollowers = async () => {
      const followersResponse = [];

      try {
        // fetch followers
        const queryFollowers = query(
          collection(db, 'users'),
          where('id', 'in', user.followerList),
        );
        const followsSnapshot = await getDocs(queryFollowers);

        followsSnapshot.forEach((doc) => {
          followersResponse.push({
            id: doc.id,
            avatar: doc.data().avatar,
            name: doc.data().name,
          });
        });
      } catch (error) {
        console.log('Error fetch followers: ' + error.message);
      }

      if (isSubscribed) {
        setFollowers(followersResponse);
      }
    };

    const fetchRecipes = async () => {
      const recipesResponse = [];

      try {
        // fetch recipes
        const queryRecipes = query(
          collection(db, 'recipes'),
          where('authorId', '==', user.id),
        );
        const recipesSnapshot = await getDocs(queryRecipes);

        recipesSnapshot.forEach((doc) => {
          recipesResponse.push({ id: doc.id, ...doc.data() });
        });
      } catch (error) {
        console.log('Error fetch recipes: ' + error.message);
      }

      if (isSubscribed) {
        if (recipesResponse.length === 0) {
          setRecipes();
        } else {
          setRecipes(recipesResponse);
        }
      }
    };

    if (user) {
      fetchRecipes();

      if (user.followList.length > 0) {
        fetchFollows();
      } else {
        setFollows([]);
      }

      if (user.followerList.length > 0) {
        fetchFollowers();
      } else {
        setFollowers([]);
      }
    }

    return () => {
      isSubscribed = false;
    };
  }, [user]);

  return (
    <>
      <TitleBar oneLine mainTitle="Detail Profile" pageList={['Profile']} />
      {isShowEditModel && (
        <EditProfileModal setShow={setIsShowEditModel} user={user} />
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

                {params.profileId === currentUser.id || !params.profileId ? (
                  <button onClick={() => setIsShowEditModel(true)}>
                    Edit <span>Profile</span>
                  </button>
                ) : (
                  <button onClick={handleClickFollow}>
                    {isFollow ? 'Unfollow' : 'Follow'}
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
                    {followers.length === 0 ? (
                      <NoHaveHover>
                        <CgUnavailable />
                        <span>No followers found</span>
                      </NoHaveHover>
                    ) : (
                      followers.map((follow) => (
                        <FollowingItem key={follow.id}>
                          <img src={follow.avatar} alt="" />
                          <Link
                            to={
                              currentUser.id === follow.id
                                ? '/profile'
                                : `/profile/${follow.id}`
                            }
                          >
                            {follow.name}
                          </Link>
                        </FollowingItem>
                      ))
                    )}
                  </FollowingContainer>
                </NavPane>
                <NavPane active={activeTab === 'following' ? 1 : 0}>
                  <FollowingContainer>
                    {follows.length === 0 ? (
                      <NoHaveHover>
                        <CgUnavailable />
                        <span>No following found</span>
                      </NoHaveHover>
                    ) : (
                      follows.map((follow) => (
                        <FollowingItem key={follow.id}>
                          <img src={follow.avatar} alt="" />
                          <Link to={`/profile/${follow.id}`}>
                            {follow.name}
                          </Link>
                        </FollowingItem>
                      ))
                    )}
                  </FollowingContainer>
                </NavPane>
              </NavContent>
            </Body>
          </Container>
          <RightSide>
            <LatestRecipes title={'Latest Recipes'} />
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
