import { useState } from 'react';
import { BiBarChart, BiSearch, BiUser } from 'react-icons/bi';
import { HiOutlineBookmark } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import brandImg from '../../assets/brand.png';
import { selectUser } from '../../features/userSlice';
import Sidebar from '../Sidebar';
import {
  Brand,
  Container,
  Content,
  NavItems,
  ShiftLeft,
  ShiftRight,
} from './HeaderStyles';

const Header = () => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const user = useSelector(selectUser);

  return (
    <Container>
      <Content>
        <ShiftLeft>
          <Brand to="/">
            <img src={brandImg} alt="" />
            <span>Food Recipes</span>
          </Brand>
          {!isShowSidebar && (
            <NavItems>
              <li>
                <Link to="/recipes">Recipes</Link>
              </li>
              <li>Popular</li>
              <li>Healthy</li>
            </NavItems>
          )}
        </ShiftLeft>
        <ShiftRight>
          <NavItems>
            <li>
              <BiSearch title="Search" />
              <span>Search</span>
            </li>
            <li>
              <HiOutlineBookmark title="Save" />
              <span>Save</span>
            </li>
            <li>
              <BiUser title={user.id ? 'Profile' : 'Login'} />
              {user.id ? (
                <Link to="/profile">Profile</Link>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
            <div onClick={() => setIsShowSidebar(true)}>
              <BiBarChart />
            </div>
          </NavItems>
          <Sidebar
            isShowSidebar={isShowSidebar}
            setIsShowSidebar={setIsShowSidebar}
          />
        </ShiftRight>
      </Content>
    </Container>
  );
};

export default Header;
