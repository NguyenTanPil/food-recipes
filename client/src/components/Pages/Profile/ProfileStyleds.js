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
    width: 100%;
  }
`;

export const AvatarAndEditButton = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 3.2rem;
  position: relative;

  img {
    border: 0.3rem solid ${(props) => props.theme.hoverColor};
    border-radius: 50%;
    box-shadow: rgb(255 255 255 / 3%) 0px 0px 2px inset;
    height: 18rem;
    position: absolute;
    top: -12rem;
    width: 18rem;
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

    &:hover {
      background-color: #fd4755e6;
    }
  }
`;

export const Info = styled.div`
  letter-spacing: 0.1rem;
  margin-top: 8rem;
  text-align: center;
  width: 18.4rem;

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
    margin: 0;
  }
`;
