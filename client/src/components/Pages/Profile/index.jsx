import {
  AvatarAndEditButton,
  Container,
  Cover,
  Header,
  Info,
} from './ProfileStyleds';
import TitleBar from '../../TitleBar';
import { Content, RightSide } from '../Category/CategoryStyles';
import LatestRecipes from '../../LatestRecipes';
import RecipeCategories from '../../RecipeCategories';

const Profile = () => {
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
                  <p>Joined January 2022</p>
                </Info>
              </div>
              <button>Edit Profile</button>
            </AvatarAndEditButton>
          </Header>
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
