import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  border: 0.1rem solid ${(props) => props.theme.borderColor};
  border-radius: 0.8rem;
  margin-bottom: 3rem;
  width: 100%;

  @media only screen and (min-width: 576px) {
    width: 48%;
  }

  @media only screen and (min-width: 992px) {
    margin-bottom: 0;
    width: 31%;
  }
`;

export const Header = styled.div`
  border-radius: 0.8rem 0.8rem 0 0;
  cursor: pointer;
  overflow: hidden;
  width: 100%;

  &:hover {
    img {
      transform: scale(1.1) rotate(-2deg);
    }
  }

  img {
    display: block;
    border-radius: 0.8rem 0.8rem 0 0;
    transition: transform 0.2s ease-out;
    width: 100%;
  }
`;

export const Body = styled.div`
  box-sizing: border-box;
  padding: 1.5rem 2.4rem 2.4rem 2.4rem;

  h3 {
    color: ${(props) => props.theme.hoverColor};
    font-size: 1.8rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
    text-transform: capitalize;
  }

  & > span {
    cursor: pointer;
    display: -webkit-box;
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.8rem;
    margin-bottom: 0.5rem;
    overflow: hidden;
    text-transform: capitalize;
    transition: color 0.2s ease-out;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    &:hover {
      color: ${(props) => props.theme.hoverColor};

      a {
        color: ${(props) => props.theme.hoverColor};
        transition: color 0.2s ease-out;
      }
    }
  }

  p {
    color: ${(props) => props.theme.fontColor};
    display: -webkit-box;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.1rem;
    margin: 0;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

export const EntryMeta = styled.ul`
  background-color: ${(props) => props.theme.borderColor};
  border-radius: 0.4rem;
  display: flex;
  margin-top: 1rem;
  width: fit-content;

  li {
    color: ${(props) => props.theme.fontColor};
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 500;
    padding: 0.6rem 1.2rem;

    span {
      font-size: 1.3rem;
    }

    svg {
      color: ${(props) => props.theme.hoverColor};
      font-size: 1.2rem;
      margin-right: 0.25rem;
    }
  }
`;
