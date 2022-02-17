import styled from 'styled-components';

export const Container = styled.div`
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
  border-radius: 0.8rem;
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
    border-radius: 0.8rem;
    transition: transform 0.2s ease-out;
    width: 100%;
  }
`;

export const Body = styled.div`
  box-sizing: border-box;
  padding: 1.5rem 2.4rem;

  h3 {
    color: ${(props) => props.theme.hoverColor};
    font-size: 1.8rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
  }

  & > span {
    cursor: pointer;
    display: inline-block;
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.8rem;
    margin-bottom: 0.5rem;
    transition: color 0.2s ease-out;

    &:hover {
      color: ${(props) => props.theme.hoverColor};
    }
  }

  p {
    color: ${(props) => props.theme.fontColor};
    font-size: 1.4rem;
    font-weight: 500;
    margin: 0;
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
