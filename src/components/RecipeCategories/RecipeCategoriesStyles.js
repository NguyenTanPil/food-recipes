import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 2rem;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 48%;
  }

  @media only screen and (min-width: 1200px) {
    width: 100%;
  }
`;

export const Categories = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const CategoryItem = styled.li`
  color: ${(props) => props.theme.fontColor};
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;
  font-weight: 400;
  margin: 0 0 1rem;
  padding: 0 0 1rem;

  a {
    font-weight: 600;
    text-transform: capitalize;
    transition: color 0.2s ease-out;
  }

  &:hover {
    a {
      color: ${(props) => props.theme.hoverColor};
    }
  }
`;
