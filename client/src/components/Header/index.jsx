import { useEffect, useState } from 'react';
import { BiBarChart, BiSearch, BiUser } from 'react-icons/bi';
import { HiOutlineBookmark } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import Cookies from 'universal-cookie';
import brandImg from '../../assets/brand.png';
import {
  selectUser,
  setLoginDetail,
  setSignOut,
} from '../../features/userSlice';
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
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const cookies = new Cookies();
    const userCookie = cookies.get('user');

    if (userCookie) {
      dispatch(setLoginDetail(userCookie));
    } else {
      dispatch(setSignOut());
    }
  }, [dispatch]);

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
              <HiOutlineBookmark title="Save" />
              <span>Save</span>
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
