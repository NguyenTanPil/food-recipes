import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  max-width: 124rem;
  padding-bottom: 1.2rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
`;

export const Header = styled.div`
  margin-bottom: 3rem;
  position: relative;
`;

export const Title = styled.h2`
  border-bottom: 0.1rem solid ${(props) => props.theme.borderColor};
  font-size: 2.4rem;
  font-weight: 700;
  margin: 0;
  padding-bottom: 1.5rem;
`;

export const ShortLine = styled.div`
  background-color: ${(props) => props.theme.hoverColor};
  height: 0.3rem;
  position: absolute;
  left: 0;
  bottom: -0.125rem;
  width: 10rem;
`;

export const ProductIntro = styled.div`
  margin-bottom: 4rem;

  & > div {
    border: none;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    width: 100%;

    & > div:first-child {
      border-radius: 0;
      width: 100%;

      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }

    & > div:last-child {
      padding-left: 0;
      padding-right: 0;
      width: 100%;

      & > span {
        font-size: 2.4rem;
      }

      & > p {
        font-size: 1.6rem;
      }
    }

    img {
      border-radius: 0;
      max-height: 38rem;
      object-fit: cover;
    }
  }

  @media only screen and (min-width: 768px) {
    & > div {
      & > div:first-child {
        width: 65%;
      }

      & > div:last-child {
        padding-left: 2.4rem;
        padding-bottom: 0;
        padding-right: 0;
        width: 35%;
      }
    }
  }
`;

export const Products = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  & > div {
    margin-bottom: 3rem;
    width: 100%;

    &:last-child {
      margin-bottom: 0;
    }

    @media only screen and (min-width: 576px) {
      width: 48%;
    }

    @media only screen and (min-width: 992px) {
      width: 31%;
    }

    @media only screen and (min-width: 1200px) {
      margin-bottom: 0;
      width: 23%;
    }
  }
`;
