import styled from 'styled-components';
import { Brand as BrandHeader } from '../Header/HeaderStyles';

export const Container = styled.div`
  background-color: ${(props) => props.theme.footerBackgroundColor};
  box-sizing: border-box;
  padding-bottom: 4rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  padding-top: 6rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;

  @media only screen and (min-width: 576px) {
    max-width: 54rem;
  }

  @media only screen and (min-width: 768px) {
    max-width: 72rem;
  }
`;

export const Brand = styled(BrandHeader)`
  flex-direction: column;
  height: 9rem;
  margin-right: 0;

  span {
    display: inline-block;
    margin-left: 0;
    margin-top: 0.25rem;
  }
`;

export const Follows = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2.5rem;
`;

export const FollowItem = styled.div`
  color: ${(props) => props.theme.footerColor};
  font-size: 1.4rem;
  font-weight: 400;
  padding: 1.2rem 1rem 1.2rem 2rem;
  text-transform: capitalize;
  transition: color 0.2s ease-out;
  width: 10rem;

  &:hover {
    a {
      color: ${(props) => props.theme.hoverColor};
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 1.5rem;
      margin-right: 0.5rem;
    }
  }
`;

export const Copyright = styled.p`
  color: ${(props) => props.theme.footerColor};
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 2.5rem;
  text-align: center;
  width: 100%;

  span {
    color: ${(props) => props.theme.hoverColor};
    font-weight: 700;
  }
`;
