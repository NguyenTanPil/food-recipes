import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin-bottom: 2rem;
`;

export const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  max-width: 124rem;
  padding-bottom: 1.2rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  padding-top: 2rem;
  width: 100%;
`;

export const ShiftLeft = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Brand = styled(NavLink)`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 6rem;
  margin-right: 1.5rem;

  span {
    color: ${(props) => props.theme.hoverColor};
    display: inline-block;
    font-size: 2.4rem;
    font-weight: 600;
    margin-left: 1.25rem;
    white-space: nowrap;

    @media only screen and (min-width: 576px) {
      display: none;
    }

    @media only screen and (min-width: 768px) {
      display: inline-block;
    }
  }

  img {
    display: block;
    height: 5rem;
    width: 5rem;
  }
`;

export const ShiftRight = styled.nav`
  margin-right: -0.4rem;

  @media only screen and (min-width: 992px) {
    margin-right: -1.4rem;
  }

  & > ul > li {
    padding-left: 0.6rem;
    padding-right: 0.6rem;

    span {
      display: none;
    }

    svg {
      font-size: 1.8rem;
      font-weight: 600;
      margin-right: 0.25rem;
    }

    @media only screen and (min-width: 992px) {
      padding-left: 1.4rem;
      padding-right: 1.4rem;

      svg {
        font-size: 1.6rem;
      }

      span {
        display: inline-block;
      }
    }
  }
`;

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  height: 4.6rem;

  li {
    color: ${(props) => props.theme.fontColor};
    cursor: pointer;
    display: none;
    font-size: 1.6rem;
    font-weight: 600;
    padding-left: 1.4rem;
    padding-right: 1.4rem;
    text-transform: uppercase;
    transition: color 0.2s ease-out;

    &:hover {
      color: ${(props) => props.theme.hoverColor};
    }

    @media only screen and (min-width: 576px) {
      display: flex;
      align-items: center;
    }
  }

  div {
    cursor: pointer;
    transform: rotate(90deg);

    svg {
      color: ${(props) => props.theme.fontColor};
      font-size: 2.85rem;
      transition: color 0.2s ease-out;

      &:hover {
        color: ${(props) => props.theme.hoverColor};
      }
    }

    @media only screen and (min-width: 576px) {
      display: none;
    }
  }
`;
