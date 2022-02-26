import { CgPushChevronRight } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUser } from '../../features/userSlice';
import { Container, Content, Header, ListLink } from './SidebarStyles';

const Sidebar = ({ isShowSidebar, setIsShowSidebar }) => {
  const user = useSelector(selectUser);

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
          <li onClick={() => setIsShowSidebar(false)}>
            {user.id ? (
              <Link to="/profile">
                <span>Profile</span>
              </Link>
            ) : (
              <Link to="/login">
                <span>Login</span>
              </Link>
            )}
          </li>
        </ListLink>
      </Content>
    </Container>
  );
};

export default Sidebar;
