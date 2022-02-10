import { Container, Content, Header, ListLink } from './SideBarStyles';
import { CgPushChevronRight } from 'react-icons/cg';

const Sidebar = ({ isShowSidebar, setIsShowSidebar }) => {
  return (
    <Container show={isShowSidebar ? 1 : 0}>
      <Content>
        <Header>
          <button onClick={() => setIsShowSidebar(false)}>
            <CgPushChevronRight />
          </button>
        </Header>
        <ListLink>
          <li>
            <span>Recipes</span>
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
