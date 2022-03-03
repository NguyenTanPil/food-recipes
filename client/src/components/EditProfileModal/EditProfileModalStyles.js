import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(91, 112, 131, 0.4);
  cursor: default;
  display: block;
  overflow: auto;
  position: fixed;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  transition: all 0.2s ease-out 0.2s;
  z-index: 2000;
`;

export const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.75rem auto;
  max-width: 58rem;
  min-height: calc(100% - (1.75rem * 2));

  & > div {
    background-color: ${(props) => props.theme.backgroundColor};
    border-radius: 1.2rem;
    margin: 0 0.75rem;
    padding: 2.4rem 1.2rem;

    @media only screen and (min-width: 576px) {
      border-radius: 1.6rem;
      padding: 2.4rem;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    background-color: transparent;
    border-radius: 0.4rem;
    color: ${(props) => props.theme.fontColor};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.8rem;
    transition: all 0.2s ease-out;
    width: 3.8rem;

    &:hover {
      background-color: ${(props) => props.theme.hoverItemColor};
      color: ${(props) => props.theme.hoverColor};
    }

    svg {
      background-color: transparent;
      cursor: pointer;
      font-size: 2.6rem;
    }
  }

  button {
    margin-top: 0;
    font-size: 1.4rem;
    width: initial;
  }
`;

export const Body = styled.div`
  margin-top: 2.4rem;
`;

export const BackgroundUpload = styled.div`
  position: relative;

  img {
    border-radius: 1.4rem;
    max-height: 24.5rem;
    width: 100%;
  }
`;

export const OverLoadUpload = styled.div`
  background-color: rgba(221, 221, 222, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  label {
    background-color: rgba(91, 112, 131, 0.7);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    transition: all 0.2s ease-out;
    width: 3rem;

    &:hover {
      background-color: ${(props) => props.theme.borderColor};

      svg {
        color: ${(props) => props.theme.hoverColor};
      }
    }

    svg {
      color: ${(props) => props.theme.hoverItemColor};
      font-size: 1.4rem;
      font-weight: 600;
    }

    @media only screen and (min-width: 576px) {
      height: 4.4rem;
      width: 4.4rem;

      svg {
        font-size: 2rem;
      }
    }

    input {
      height: 0;
      width: 0;
    }
  }
`;

export const AvatarUpload = styled.div`
  height: 3rem;
  position: relative;

  @media only screen and (min-width: 576px) {
    height: 5rem;
  }

  & > div {
    border-radius: 50%;
    height: 10rem;
    position: absolute;
    left: 2rem;
    top: -6rem;
    width: 10rem;

    @media only screen and (min-width: 576px) {
      height: 16.8rem;
      top: -12rem;
      width: 16.8rem;
    }

    & > div {
      border-radius: 50%;
    }

    img {
      width: 100%;
    }
  }
`;

export const EditForm = styled.div`
  overflow: auto;
  margin-top: 1rem;
  padding: 0 2rem;

  & > label {
    display: block;
    margin-top: 2rem;

    span {
      background-color: ${(props) => props.theme.backgroundColor};
      z-index: 0;
    }

    input {
      position: relative;
      z-index: 1;
    }
  }
`;
