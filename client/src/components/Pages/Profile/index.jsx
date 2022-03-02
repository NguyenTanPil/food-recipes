import { useEffect, useState } from 'react';
import { AiOutlineSchedule } from 'react-icons/ai';
import { FaFly } from 'react-icons/fa';
import { FiUserCheck, FiUserPlus } from 'react-icons/fi';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectUser } from '../../../features/userSlice';
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
  ProductDesc,
} from './ProfileStyleds';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('recipes');
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    if (!user.id) {
      navigate('/login');
    }
  }, []);

  return (
    <>
      <TitleBar oneLine mainTitle="Detail Profile" pageList={['Profile']} />
      <Content>
        <Container>
          <Header>
            <Cover>
              <img
                src="https://i.pinimg.com/736x/b1/33/fe/b133fe1cf7d86da172350deaf4c85599.jpg"
                alt=""
              />
            </Cover>
            <AvatarAndEditButton>
              <div>
                <img
                  src="https://pbs.twimg.com/profile_images/1477919658590146560/bQxLDkoP_400x400.png"
                  alt=""
                />
                <Info>
                  <h3>Felix Nguyen</h3>
                  <span>@NguyenTanPil</span>
                  <p>
                    <AiOutlineSchedule />
                    Joined January 2022
                  </p>
                </Info>
              </div>
              <button>
                Edit <span>Profile</span>
              </button>
            </AvatarAndEditButton>
          </Header>
          <Body>
            <NavTab>
              <NavTabItem
                active={activeTab === 'recipes' ? 1 : 0}
                onClick={() => handleTabChange('recipes')}
              >
                <FaFly />
                Recipe
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
                  <ProductContainer>
                    <ProductHeader>
                      <Link to="/drinks/1gihv1dHyzfTk4sR4Swz">
                        <img
                          src="https://realfood.tesco.com/media/images/Marshmallow-Hot-Choc-Final-ff8b5584-9011-4c0c-8ded-15bd6e375631-0-1400x919.jpg"
                          alt=""
                        />
                      </Link>
                    </ProductHeader>
                    <ProductBody>
                      <Link to="/drinks">
                        <h3>Drinks</h3>
                      </Link>
                      <span>
                        <Link to="/drinks/1gihv1dHyzfTk4sR4Swz">
                          hot chocolate gift jars
                        </Link>
                      </span>
                      <ProductDesc>
                        With layers of freshly grated chocolate, crushed candy
                        canes and fluffy.With layers of freshly grated
                        chocolate, crushed candy canes and fluffy.
                      </ProductDesc>
                    </ProductBody>
                  </ProductContainer>
                  <ProductContainer>
                    <ProductHeader>
                      <Link to="/drinks/1gihv1dHyzfTk4sR4Swz">
                        <img
                          src="https://realfood.tesco.com/media/images/Marshmallow-Hot-Choc-Final-ff8b5584-9011-4c0c-8ded-15bd6e375631-0-1400x919.jpg"
                          alt=""
                        />
                      </Link>
                    </ProductHeader>
                    <ProductBody>
                      <Link to="/drinks">
                        <h3>Drinks</h3>
                      </Link>
                      <span>
                        <Link to="/drinks/1gihv1dHyzfTk4sR4Swz">
                          hot chocolate gift jars
                        </Link>
                      </span>
                      <ProductDesc>
                        With layers of freshly grated chocolate, crushed candy
                        canes and fluffy.With layers of freshly grated
                        chocolate, crushed candy canes and fluffy.
                      </ProductDesc>
                    </ProductBody>
                  </ProductContainer>
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
    </>
  );
};

export default Profile;
