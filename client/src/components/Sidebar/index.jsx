import { Container, Content, Header, ListLink } from './SidebarStyles';
import { CgPushChevronRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Sidebar = ({ isShowSidebar, setIsShowSidebar }) => {
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
          <li>
            <span>Login</span>
          </li>
        </ListLink>
      </Content>
    </Container>
  );
};

export default Sidebar;
