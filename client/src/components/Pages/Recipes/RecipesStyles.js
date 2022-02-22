import styled, { css, keyframes } from 'styled-components';

export const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -1.6rem;
  margin-right: -1.6rem;
  justify-content: flex-start;

  & > div {
    box-sizing: border-box;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    width: 100%;

    @media only screen and (min-width: 576px) {
      width: calc(100% / 2);
    }

    @media only screen and (min-width: 768px) {
      width: calc(100% / 3);
    }

    & > div {
      width: 100%;

      @media only screen and (min-width: 992px) {
        margin-bottom: 3.2rem;
      }
    }
  }
`;

export const FilterProducts = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: -1.5rem;
  margin-top: 4rem;
  max-width: 124rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;

  & > span {
    color: ${(props) => props.theme.fontColor};
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    margin-right: 1.2rem;
    width: 6.4rem;
  }
`;

export const SelectCategory = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 0.125rem;
  width: calc(100% - 7.6rem);
`;

const jelly = keyframes` 
  0% {
     transform: translateY(-50%) scale3d(1,1,1);
  }

  30% {
    transform: translateY(-50%) scale3d(.75,1.25,1);
  }

  40% {
    transform: translateY(-50%) scale3d(1.25,.75,1) ;
  }

  50% {
     transform: translateY(-50%) scale3d(.85,1.15,1);
  }

  65% {
    transform: translateY(-50%) scale3d(1.05,.95,1);
  }

  75% {
    transform: translateY(-50%) scale3d(.95,1.05,1);
  }

  100% {
    transform: translateY(-50%) scale3d(1,1,1) ;
  }
`;

const jellyAnimation = () =>
  css`
    ${jelly} 0.7s cubic-bezier(.25,.46,.45,.94);
  `;

export const Option = styled.li`
  margin-bottom: 1.5rem;
  min-width: 9rem;
  padding-right: 1.5rem;
  text-transform: capitalize;

  div {
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;

    &:hover {
      &:before {
        border-color: ${(props) => props.theme.hoverColor};
      }

      span {
        color: ${(props) => props.theme.hoverColor};
      }
    }

    &:before,
    &:after {
      content: '';
      background-color: transparent;
      border: 0.2rem solid
        ${(props) =>
          props.active ? props.theme.hoverColor : props.theme.fontColor};
      border-radius: 0.2rem;
      box-sizing: border-box;
      height: 1.5rem;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      transition: all 0.2s ease-in-out;
      width: 1.5rem;
    }

    &:before {
      animation: ${(props) => props.active && jellyAnimation};
    }

    &:after {
      background-color: ${(props) => props.theme.hoverColor};
      transform: ${(props) =>
        props.active
          ? 'translateY(-50%) scale(0.4)'
          : 'translateY(-50%) scale(0)'};
    }

    span {
      color: ${(props) => props.theme.fontColor};
      font-size: 1.6rem;
      font-weight: 500;
      text-indent: 2rem;
    }
  }
`;
