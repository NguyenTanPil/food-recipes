import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 4rem;
  width: 100%;

  @media only screen and (min-width: 1200px) {
    width: 63%;
  }
`;

export const Products = styled.div`
  & > div {
    border: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 2rem;
    width: 100%;

    &:last-child {
      margin-bottom: 0;
    }

    & > div:first-child {
      border-radius: 0.8rem;
      width: 100%;

      img {
        border-radius: 0.8rem;
      }
    }

    & > div:last-child {
      width: 100%;
    }

    @media only screen and (min-width: 576px) {
      flex-direction: row;

      & > div:first-child {
        width: 50%;
      }

      & > div:last-child {
        width: 50%;
      }
    }
  }
`;
