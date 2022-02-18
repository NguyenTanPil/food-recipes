import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 4rem;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 48%;
  }

  @media only screen and (min-width: 1200px) {
    margin-bottom: 4rem;
    width: 100%;
  }
`;

export const Products = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    border: none;
    display: flex;
    margin-bottom: 2.4rem;
    width: 100%;

    &:hover {
      img {
        transform: scale(1.1);
      }
    }

    & > div:first-child {
      width: 40%;
    }

    & > div:last-child {
      width: 60%;
    }

    h3 {
      font-size: 1.6rem;
    }

    span {
      font-size: 1.6rem;
    }

    p {
      display: flex;
      align-items: center;

      svg {
        color: ${(props) => props.theme.hoverColor};
        font-size: 1.6rem;
        margin-right: 0.5rem;
      }
    }
  }
`;
