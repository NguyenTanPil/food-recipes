import {
  AvatarAndEditButton,
  Body,
  Container,
  Cover,
  Header,
  Info,
  NavContent,
  NavPane,
  NavTab,
  NavTabItem,
} from './ProfileStyleds';
import TitleBar from '../../TitleBar';
import { Content, RightSide } from '../Category/CategoryStyles';
import LatestRecipes from '../../LatestRecipes';
import RecipeCategories from '../../RecipeCategories';
import { AiOutlineSchedule } from 'react-icons/ai';
import { FaFly } from 'react-icons/fa';
import { FiUserPlus, FiUserCheck } from 'react-icons/fi';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { useState } from 'react';
import Product from '../../Product';
import { Products } from '../../LatestRecipes/LatestRecipesStyles';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('recipes');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

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
              <button>Edit Profile</button>
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
                  <Product
                    id="1gihv1dHyzfTk4sR4Swz"
                    img="https://realfood.tesco.com/media/images/Marshmallow-Hot-Choc-Final-ff8b5584-9011-4c0c-8ded-15bd6e375631-0-1400x919.jpg"
                    name="hot chocolate gift jars"
                    desc="With layers of freshly grated chocolate, crushed candy canes and fluffy."
                    category="Drinks"
                  />
                  <Product
                    id="1gihv1dHyzfTk4sR4Swz"
                    img="https://realfood.tesco.com/media/images/Marshmallow-Hot-Choc-Final-ff8b5584-9011-4c0c-8ded-15bd6e375631-0-1400x919.jpg"
                    name="hot chocolate gift jars"
                    desc="With layers of freshly grated chocolate, crushed candy canes and fluffy."
                    category="Drinks"
                  />
                  <Product
                    id="1gihv1dHyzfTk4sR4Swz"
                    img="https://realfood.tesco.com/media/images/Marshmallow-Hot-Choc-Final-ff8b5584-9011-4c0c-8ded-15bd6e375631-0-1400x919.jpg"
                    name="hot chocolate gift jars"
                    desc="With layers of freshly grated chocolate, crushed candy canes and fluffy."
                    category="Drinks"
                  />
                </Products>
              </NavPane>
              <NavPane active={activeTab === 'photos' ? 1 : 0}>
                Photos content
              </NavPane>
              <NavPane active={activeTab === 'followers' ? 1 : 0}>
                followers content
              </NavPane>
              <NavPane active={activeTab === 'following' ? 1 : 0}>
                following content
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
