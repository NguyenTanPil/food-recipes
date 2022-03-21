import { useState } from 'react';
import { BiBarChart, BiSearch, BiUser, BiLogOutCircle } from 'react-icons/bi';
import { HiOutlineBookmark } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import brandImg from '../../assets/brand.png';
import { selectUser } from '../../features/userSlice';
import { setSignOut } from '../../features/userSlice';
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
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    const cookies = new Cookies();
    cookies.remove('user', { path: '/', sameSite: true });

    navigate('/login', { state: { prev: '/' } });
    dispatch(setSignOut());
  };

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
                <NavLink to="/recipes">Recipes</NavLink>
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
              <NavLink to="/save">
                <HiOutlineBookmark title="Save" />
                <span>Save</span>
              </NavLink>
            </li>
            <li>
              {user.id ? (
                <NavLink to="/profile">
                  <BiUser title="Profile" />
                  <span>Profile</span>
                </NavLink>
              ) : (
                <NavLink to="/login" state={{ prev: location.pathname }}>
                  <BiUser title="Login" />
                  <span>Login</span>
                </NavLink>
              )}
            </li>
            {user.id && (
              <li onClick={handleSignOut}>
                <BiLogOutCircle title="Sign Out" />
                <span>Sign Out</span>
              </li>
            )}
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
