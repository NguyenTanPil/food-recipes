import { CgPushChevronRight } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { selectUser } from '../../features/userSlice';
import { Container, Content, Header, ListLink } from './SidebarStyles';

const Sidebar = ({ isShowSidebar, setIsShowSidebar }) => {
  const user = useSelector(selectUser);
  const location = useLocation();

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
            <NavLink to="/recipes">
              <span>Recipes</span>
            </NavLink>
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
          <li onClick={() => setIsShowSidebar(false)}>
            {user.id ? (
              <NavLink to="/profile">
                <span>Profile</span>
              </NavLink>
            ) : (
              <NavLink to="/login" state={{ prev: location.pathname }}>
                <span>Login</span>
              </NavLink>
            )}
          </li>
        </ListLink>
      </Content>
    </Container>
  );
};

export default Sidebar;
