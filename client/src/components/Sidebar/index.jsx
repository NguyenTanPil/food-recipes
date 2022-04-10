import { CgPushChevronRight } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { selectUser, setSignOut } from '../../features/userSlice';
import { deleteCookie } from '../../Utils/cookie';
import { Container, Content, Header, ListLink } from './SidebarStyles';

const Sidebar = ({ isShowSidebar, setIsShowSidebar }) => {
  const user = useSelector(selectUser);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    deleteCookie('user');
    dispatch(setSignOut());
    setIsShowSidebar(false);
    navigate('/login', { state: { prev: '/' } });
  };

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
          <li onClick={() => setIsShowSidebar(false)}>
            <NavLink to="/search">
              <span>Search</span>
            </NavLink>
          </li>
          <li onClick={() => setIsShowSidebar(false)}>
            <NavLink to="/save">
              <span>Save</span>
            </NavLink>
          </li>
          <li onClick={() => setIsShowSidebar(false)}>
            <NavLink to="/appearance">
              <span>Appearance</span>
            </NavLink>
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
          {user.id && (
            <li onClick={handleSignOut}>
              <span>Sign Out</span>
            </li>
          )}
        </ListLink>
      </Content>
    </Container>
  );
};

export default Sidebar;
