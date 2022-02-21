import styled from 'styled-components';

export const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  max-width: 124rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
`;

export const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: fit-content;
  margin-bottom: 4rem;
  width: 100%;

  & > div {
    width: 100%;
    margin-bottom: 2.4rem;

    @media only screen and (min-width: 576px) {
      width: 48%;
    }
  }

  @media only screen and (min-width: 1200px) {
    width: 63%;
  }
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  @media only screen and (min-width: 1200px) {
    justify-content: flex-start;
    flex-direction: column;
  }

  & > div {
    @media only screen and (min-width: 576px) {
      &:first-child {
        width: 58%;
      }

      &:last-child {
        width: 38%;
      }
    }

    @media only screen and (min-width: 1200px) {
      &:first-child,
      &:last-child {
        width: 100%;
      }
    }
  }

  @media only screen and (min-width: 1200px) {
    width: 33%;
  }
`;

export const NoProducts = styled.div`
  color: ${(props) => props.theme.fontColor};
  width: 100% !important;

  h3 {
    font-size: 2.4rem;
    font-size: 600;
    margin: 0;
    text-align: center;
  }
`;
