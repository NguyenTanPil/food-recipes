import styled from 'styled-components';

export const Container = styled.div`
  /* background-color: rgba(91, 112, 131, 0.4); */
  cursor: default;
  display: flex;
  justify-content: flex-end;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 600ms ease 0s;
  width: 100vw;
  z-index: 2000;
`;

export const Content = styled.aside`
  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: rgb(0 0 0 / 16%) 0px 0.2rem 2.5rem 0,
    rgb(0 0 0 / 12%) 0 0.2rem 3rem 0;
  height: 100%;
  width: 60%;

  @media only screen and (min-width: 576px) {
    width: 45%;
  }

  @media only screen and (min-width: 768px) {
    width: 40%;
  }

  @media only screen and (min-width: 992px) {
    width: 30%;
  }

  @media only screen and (min-width: 1200px) {
    width: 25%;
  }
`;

export const Header = styled.div`
  border-bottom: 0.1rem solid ${(props) => props.theme.borderColor};
  padding: 2.8rem 3rem;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;

    &:hover {
      svg {
        color: ${(props) => props.theme.hoverColor};
      }
    }
  }

  svg {
    color: ${(props) => props.theme.fontColor};
    font-size: 3rem;
    font-weight: 700;
    transition: color 0.2s ease-out;
  }
`;

export const ListLink = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    cursor: pointer;
    padding-left: 0;
    padding-right: 0;

    a.active {
      span {
        background-color: ${(props) => props.theme.hoverItemColor};
        border-left-color: ${(props) => props.theme.hoverColor};
        color: ${(props) => props.theme.hoverColor};
        padding-left: 4.5rem;
      }
    }

    span {
      background-color: ${(props) => props.theme.backgroundColor};
      border-bottom: 0.1rem solid ${(props) => props.theme.borderColor};
      border-left: 0.3rem solid transparent;
      color: ${(props) => props.theme.fontColor};
      display: block;
      font-size: 1.6rem;
      font-weight: 600;
      text-transform: capitalize;
      padding: 1.5rem 3rem 1.5rem 4rem;
      transition: all 0.3s ease 0s;

      &:hover {
        background-color: ${(props) => props.theme.hoverItemColor};
        border-left-color: ${(props) => props.theme.hoverColor};
        color: ${(props) => props.theme.hoverColor};
        padding-left: 4.5rem;
      }
    }
  }
`;
