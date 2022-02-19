import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.titleBackgroundColor};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  max-width: 120.8rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
`;

export const LeftTitle = styled.div`
  padding: 2.6rem 0;

  h3 {
    color: ${(props) => props.theme.titleColor};
    font-size: 2.4rem;
    font-weight: 600;
    margin: 0;
    text-transform: capitalize;
  }
`;

export const RightTitle = styled.div`
  padding: 2.6rem 0;
`;

export const BreadcrumbItem = styled.li`
  display: inline-block;
  color: ${(props) =>
    props.active ? props.theme.hoverColor : props.theme.titleColor};
  font-size: 1.6rem;
  font-weight: 400;
  padding-left: 0.5rem;
  text-transform: capitalize;

  & + li:before {
    content: '/';
    color: ${(props) => props.theme.titleColor};
    display: inline-block;
    font-size: 1.2rem;
    padding-right: 0.5rem;
  }
`;
