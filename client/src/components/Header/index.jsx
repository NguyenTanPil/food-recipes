import { useState } from 'react';
import { BiBarChart, BiLogOutCircle, BiSearch, BiUser } from 'react-icons/bi';
import { HiOutlineBookmark } from 'react-icons/hi';
import { MdOutlineColorLens } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import brandImg from '../../assets/brand.png';
import { selectUser, setSignOut } from '../../features/userSlice';
import { deleteCookie } from '../../Utils/cookie';
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
    deleteCookie('user');

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
            </NavItems>
          )}
        </ShiftLeft>
        <ShiftRight>
          <NavItems>
            <li>
              <NavLink to="/search">
                <BiSearch title="Search" />
                <span>Search</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/appearance">
                <MdOutlineColorLens title="Appearance" />
                <span>Appearance</span>
              </NavLink>
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
