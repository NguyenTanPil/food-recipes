import { BiSearch, BiUser } from 'react-icons/bi';
import { HiOutlineBookmark } from 'react-icons/hi';
import brandImg from '../../assets/brand.png';
import {
  Brand,
  Container,
  Content,
  NavItems,
  ShiftLeft,
  ShiftRight,
} from './HeaderStyles';
import Sidebar from '../Sidebar';
import { BiBarChart } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

const Header = () => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);

  useEffect(() => {
    let isSubscribed = true;

    if (isSubscribed) {
      const cookies = new Cookies();
      const user = cookies.get('user');
      setIsSignIn(user && true);
    }

    return () => {
      isSubscribed = false;
    };
  }, []);

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
              <BiUser title="Login" />
              {!isSignIn ? (
                <Link to="/login">Login</Link>
              ) : (
                <span>Profile</span>
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
