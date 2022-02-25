import { Container, Content, Header, ListLink } from './SidebarStyles';
import { CgPushChevronRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

const Sidebar = ({ isShowSidebar, setIsShowSidebar }) => {
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
    <Container
      show={isShowSidebar ? 1 : 0}
      onClick={() => setIsShowSidebar(false)}
    >
      <Content onClick={(e) => e.stopPropagation()}>
        <Header>
          <button onClick={() => setIsShowSidebar(false)}>
            <CgPushChevronRight />
          </button>
        </Header>
        <ListLink>
          <li onClick={() => setIsShowSidebar(false)}>
            <Link to="/recipes">
              <span>Recipes</span>
            </Link>
          </li>
          <li>
            <span>Popular</span>
          </li>
          <li>
            <span>Healthy</span>
          </li>
          <li>
            <span>Search</span>
          </li>
          <li>
            <span>Save</span>
          </li>
          {!isSignIn ? (
            <li onClick={() => setIsShowSidebar(false)}>
              <Link to="/login">
                <span>Login</span>
              </Link>
            </li>
          ) : (
            <li>
              <span>Profile</span>
            </li>
          )}
        </ListLink>
      </Content>
    </Container>
  );
};

export default Sidebar;
