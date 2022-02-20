import { NavLink } from 'react-router-dom';
import {
  BreadcrumbItem,
  Container,
  LeftTitle,
  RightTitle,
} from './TitleBarStyles';

const TitleBar = ({ mainTitle, pageList, oneLine }) => {
  return (
    <Container oneLine={oneLine ? 1 : 0}>
      <LeftTitle oneLine={oneLine ? 1 : 0}>
        <h3>{mainTitle}</h3>
      </LeftTitle>
      <RightTitle oneLine={oneLine ? 1 : 0}>
        <ul>
          <BreadcrumbItem>
            <NavLink to="/">Home</NavLink>
          </BreadcrumbItem>
          {pageList.map((item, index) => {
            return (
              <BreadcrumbItem
                key={index}
                active={index === pageList.length - 1 ? 1 : 0}
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
