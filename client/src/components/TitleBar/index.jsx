import {
  Container,
  LeftTitle,
  RightTitle,
  BreadcrumbItem,
} from './TitleBarStyles';
import { NavLink, useParams } from 'react-router-dom';

const TitleBar = ({ mainTitle, pageList }) => {
  const params = useParams();

  return (
    <Container>
      <LeftTitle>
        <h3>{mainTitle}</h3>
      </LeftTitle>
      <RightTitle>
        <ul>
          <BreadcrumbItem>
            <NavLink to="/">Home</NavLink>
          </BreadcrumbItem>
          {pageList.map((item, index) => {
            return (
              <BreadcrumbItem
                key={index}
                active={params.category === item ? 1 : 0}
              >
                <NavLink to={`/${item}`}>{item}</NavLink>
              </BreadcrumbItem>
            );
          })}
        </ul>
      </RightTitle>
    </Container>
  );
};

export default TitleBar;
