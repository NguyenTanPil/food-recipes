import { useEffect, useState } from 'react';
import { BiBarChart, BiSearch, BiUser } from 'react-icons/bi';
import { HiOutlineBookmark } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Cookies from 'universal-cookie';
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
import { setLoginDetail } from '../../features/userSlice';

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
                <Link to="/login" state={{ prev: location.pathname }}>
                  Login
                </Link>
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
