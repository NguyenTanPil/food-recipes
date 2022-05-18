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

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      img {
        transform: scale(1.1);
      }
    }

    & > div:first-child {
      border-radius: 0.8rem;
      width: 40%;

      img {
        border-radius: 0.8rem;
      }
    }

    & > div:last-child {
      padding: 0 2.4rem;
      width: 60%;

      @media only screen and (min-width: 576px) {
        padding: 1.5rem 2.4rem;
      }
    }

    h3 {
      font-size: 1.6rem;
    }

    span {
      display: -webkit-box;
      font-size: 1.6rem;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
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
