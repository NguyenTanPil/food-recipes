import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.titleBackgroundColor};
  box-sizing: border-box;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  max-width: 120.8rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;

  & > div {
    width: ${(props) => (props.oneLine ? '50%' : '100%')};

    @media only screen and (min-width: 576px) {
      width: 50%;
    }
  }
`;

export const LeftTitle = styled.div`
  box-sizing: border-box;
  padding: ${(props) => (props.oneLine ? '2.6rem 0' : '2.6rem 0 0.8rem 0')};

  @media only screen and (min-width: 576px) {
    padding-bottom: 2.6rem;
  }

  @media only screen and (min-width: 1200px) {
    padding-left: 2rem;
  }

  h3 {
    color: ${(props) => props.theme.titleColor};
    font-size: 2.4rem;
    font-weight: 600;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: capitalize;
    width: 100%;
    white-space: nowrap;
  }
`;

export const RightTitle = styled.div`
  box-sizing: border-box;
  padding: ${(props) => (props.oneLine ? '2.6rem 0' : '0.8rem 0 2.6rem 0')};

  @media only screen and (min-width: 576px) {
    padding-top: 2.6rem;
  }

  @media only screen and (min-width: 1200px) {
    padding-right: 2rem;
  }

  ul {
    text-align: ${(props) => (props.oneLine ? 'right' : 'left')};

    @media only screen and (min-width: 576px) {
      text-align: right;
    }
  }
`;

export const BreadcrumbItem = styled.li`
  display: inline-block;
  color: ${(props) =>
    props.active ? props.theme.hoverColor : props.theme.titleColor};
  font-size: 1.6rem;
  font-weight: 400;
  max-width: 16rem;
  overflow: hidden;
  padding-left: 0.5rem;
  text-overflow: ellipsis;
  text-transform: capitalize;
  white-space: nowrap;

  &:first-child {
    padding-left: 0;
  }

  & + li:before {
    content: '/';
    color: ${(props) => props.theme.titleColor};
    display: inline-block;
    font-size: 1.2rem;
    padding-right: 0.5rem;
  }
`;
