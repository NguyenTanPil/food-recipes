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
import { useState } from 'react';

const Header = () => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);

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
              <Link to="/login">Login</Link>
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
