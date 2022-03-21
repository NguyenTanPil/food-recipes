import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: fit-content;
  margin-bottom: 4rem;
  width: 100%;

  @media only screen and (min-width: 1200px) {
    width: 63%;
  }
`;

export const Header = styled.div`
  width: 100%;
`;

export const Cover = styled.div`
  width: 100%;

  img {
    border-radius: 1.4rem;
    max-height: 38rem;
    width: 100%;
  }
`;

export const AvatarAndEditButton = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 1.2rem;
  position: relative;

  @media only screen and (min-width: 576px) {
    padding: 0 3.2rem;
  }

  img {
    border: 0.3rem solid ${(props) => props.theme.hoverColor};
    border-radius: 50%;
    box-shadow: rgb(255 255 255 / 3%) 0px 0px 2px inset;
    height: 10rem;
    position: absolute;
    top: -7rem;
    width: 10rem;

    @media only screen and (min-width: 576px) {
      height: 18rem;
      top: -12rem;
      width: 18rem;
    }
  }

  button {
    background-color: ${(props) => props.theme.hoverColor};
    border: 0.1rem solid ${(props) => props.theme.hoverColor};
    border-radius: 0.4rem;
    color: ${(props) => props.theme.backgroundColor};
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: 600;
    margin-top: 2rem;
    outline: none;
    padding: 1rem 1.5rem;
    text-transform: capitalize;
    transition: background-color 0.2s ease-out;

    span {
      display: none;
    }

    @media only screen and (min-width: 576px) {
      span {
        display: inline-block;
      }
    }

    &:hover {
      background-color: #fd4755e6;
    }
  }
`;

export const Info = styled.div`
  letter-spacing: 0.1rem;
  margin-top: 5rem;
  text-align: left;
  width: 19rem;

  @media only screen and (min-width: 576px) {
    margin-top: 8rem;
    text-align: center;
  }

  h3 {
    color: ${(props) => props.theme.titleColor};
    font-size: 2.4rem;
    font-weight: 600;
    margin: 0;
  }

  span,
  p {
    color: ${(props) => props.theme.fontColor};
    font-size: 1.5rem;
    font-weight: 500;
  }

  span {
    display: inline-block;
    margin-bottom: 1.2rem;
    margin-top: 0.4rem;
  }

  p {
    display: inline-flex;
    align-items: center;
    margin: 0;

    svg {
      font-size: 1.8rem;
      font-weight: 500;
      margin-right: 0.5rem;
    }
  }
`;

export const Body = styled.div`
  border: 0.1rem solid ${(props) => props.theme.borderColor};
  border-radius: 0.8rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0 0.2rem 0.8rem 0;
  display: flex;
  margin-top: 4rem;
  padding: 1.4rem;
  width: 100%;

  @media only screen and (min-width: 576px) {
    margin-left: 3.2rem;
    margin-right: 3.2rem;
  }
`;

export const NavTab = styled.ul`
  width: 10.4rem;

  @media only screen and (min-width: 576px) {
    padding-left: 1.6rem;
    width: 17.4rem;
  }
`;

export const NavTabItem = styled.li`
  background-color: transparent;
  box-sizing: border-box;
  color: ${(props) =>
    props.active ? props.theme.hoverColor : props.theme.fontColor};
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  padding: 1.2rem 0;
  transition: all 0.2s ease-out;
  width: 100%;

  &:hover {
    color: ${(props) => props.theme.hoverColor};
    padding-left: ${(props) => (props.active ? '0rem' : '0.5rem')};
  }

  @media only screen and (min-width: 576px) {
    font-size: 1.5rem;
    padding: 1.5rem;

    &:hover {
      padding-left: ${(props) => (props.active ? '1.5rem' : '2rem')};
    }
  }

  svg {
    margin-right: 0.5rem;

    @media only screen and (min-width: 576px) {
      margin-right: 1rem;
    }
  }
`;

export const NavContent = styled.div`
  box-sizing: border-box;
  padding: 1.4rem 0 1.4rem 0;
  width: calc(100% - 10.4rem);

  @media only screen and (min-width: 576px) {
    padding: 1.4rem;
    width: calc(100% - 17.4rem);
  }
`;

export const NavPane = styled.div`
  display: ${(props) => (props.active ? 'block' : 'none')};

  & > div > div > div {
    &:first-child {
      display: none;

      @media only screen and (min-width: 768px) {
        display: block;
      }
    }

    &:last-child {
      padding: 0 1.2rem;
      width: 100%;

      @media only screen and (min-width: 576px) {
        padding: 0 2.4rem;
      }

      @media only screen and (min-width: 768px) {
        width: 60%;
      }
    }
  }
`;

export const ProductDesc = styled.p`
  display: -webkit-box !important;
  -webkit-line-clamp: 2 !important;
`;

export const FollowingContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const FollowingItem = styled.div`
  box-sizing: border-box;
  border: 0.1rem solid ${(props) => props.theme.borderColor};
  border-radius: 1.4rem;
  cursor: pointer;
  margin-bottom: 1.4rem;
  margin-right: 1.4rem;
  overflow: hidden;
  position: relative;
  width: calc((100% - 1.4rem * 1) / 2);

  &:nth-child(2n) {
    margin-right: 0;
  }

  @media only screen and (min-width: 576px) {
    width: calc((100% - 2.8rem * 1) / 2);

    margin-bottom: 2.8rem;
    margin-right: 2.8rem;
  }

  @media only screen and (min-width: 768px) {
    width: calc((100% - 2.8rem * 3) / 4);

    &:nth-child(2n) {
      margin-right: 2.8rem;
    }

    &:nth-child(4n) {
      margin-right: 0;
    }
  }

  @media only screen and (min-width: 992px) {
    width: calc((100% - 2.8rem * 4) / 5);

    &:nth-child(4n) {
      margin-right: 2.8rem;
    }

    &:nth-child(5n) {
      margin-right: 0;
    }
  }

  @media only screen and (min-width: 1200px) {
    width: calc((100% - 2.8rem * 3) / 4);

    &:nth-child(5n) {
      margin-right: 2.8rem;
    }

    &:nth-child(4n) {
      margin-right: 0;
    }
  }

  img {
    border-radius: 1.4rem;
    display: block;
    width: 100%;
  }

  a {
    background-color: rgb(253 71 85 / 0.8);
    box-sizing: border-box;
    color: ${(props) => props.theme.backgroundColor};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;
    font-weight: 600;
    height: 100%;
    margin: 0;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0 1.2rem;
    text-align: center;
    text-transform: uppercase;
    transition: transform 0.4s ease-out;
    transform: scaleY(0);
    transform-origin: bottom left;
    width: 100%;

    @media only screen and (min-width: 576px) {
      font-size: 1.5rem;
    }
  }

  &:hover {
    a {
      transform: scaleY(1);
      transform-origin: top left;
    }
  }
`;

export const NoHaveHover = styled.div`
  color: ${(props) => props.theme.fontColor};
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: 16.5rem;
  text-align: center;
  width: 100%;

  span {
    font-size: 2.4rem !important;
    font-weight: 600;
    text-transform: capitalize;
  }

  svg {
    font-size: 4.8rem;
    font-weight: 600;
    margin-bottom: 1.4rem;
  }
`;
