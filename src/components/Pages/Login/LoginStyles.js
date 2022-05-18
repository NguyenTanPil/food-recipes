import styled from 'styled-components';

export const PanelsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;

  img {
    max-width: 26rem;
    transition: transform 1.1s ease-in-out 0.4s;
    width: 100%;
  }
`;

export const Content = styled.div`
  color: #ffffff;
  transition: transform 0.9s ease-in-out 0.6s;

  @media only screen and (max-width: 576px) {
    padding: 0.5rem 1rem;
  }

  h3 {
    font-size: 3.2rem;
    font-weight: 600;
    line-height: 3.2rem;
    margin: 0;
  }

  p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
    letter-spacing: 0.1rem;
    max-width: 31.2rem;
    padding: 0.7rem 0;
  }
`;

export const LeftPanel = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: space-around;
  padding: 3rem 17% 2rem 12%;
  pointer-events: all;
  text-align: center;
`;

export const RightPanel = styled(LeftPanel)`
  padding: 3rem 12% 2rem 17%;
  pointer-events: none;

  ${Content}, img {
    transform: translateX(80rem);
  }
`;

export const SignUpButon = styled.button`
  background-color: transparent;
  border: 0.1rem solid #ffffff;
  border-radius: 0.4rem;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.75;
  margin: 0;
  min-width: 6.4rem;
  outline: none;
  padding: 0.5rem 1.5rem;
  text-transform: capitalize;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: #ffffff;
    color: ${(props) => props.theme.hoverColor};
  }
`;

export const Wrapper = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4rem;
  margin-top: 4rem;
  max-width: 124rem;
  padding-bottom: 1.2rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.titleBackgroundColor};
  border-radius: 1.4rem;
  min-height: 61.2rem;
  overflow: hidden;
  position: relative;
  width: 100%;

  &:before {
    content: '';
    background-image: ${(props) =>
      `linear-gradient(-45deg, ${props.theme.hoverColor} 0%, ${props.theme.hoverColor}7f 100%)`};
    border-radius: 50%;
    height: 200rem;
    position: absolute;
    right: ${(props) => (props.modeSign === 'signup' ? '52%' : '48%')};
    top: -10%;
    transition: 1.8s ease-in-out;
    transform: ${(props) =>
      props.modeSign === 'signup'
        ? 'translate(100%, -50%)'
        : 'translateY(-50%)'};
    width: 380rem;
    z-index: 15;
  }

  ${LeftPanel} {
    ${Content}, img {
      transform: ${(props) =>
        props.modeSign === 'signup' && 'translateX(-80rem)'};
    }
    z-index: ${(props) => (props.modeSign === 'signup' ? '12' : '16')};
  }

  ${RightPanel} {
    pointer-events: all;
    z-index: ${(props) => (props.modeSign === 'signin' ? '12' : '16')};

    ${Content}, img {
      transform: ${(props) => props.modeSign === 'signup' && 'translateX(0)'};
    }
  }

  @media only screen and (max-width: 870px) {
    min-height: 80rem;

    &:before {
      bottom: ${(props) => (props.modeSign === 'signup' ? '36%' : '64%')};
      left: 30%;
      height: 150rem;
      right: initial;
      top: initial;
      transform: ${(props) =>
        props.modeSign === 'signup'
          ? 'translate(-50%, 100%)'
          : 'translateX(-50%)'};
      transition: 2s ease-in-out;
      width: 150rem;
    }

    ${PanelsContainer} {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 2fr 1fr;
    }

    ${Content} {
      padding-right: 15%;
      transition: transform 0.9s ease-in-out 0.8s;

      & + img {
        transition: transform 0.9s ease-in-out 0.6s;
        width: 20rem;
      }
    }

    ${LeftPanel} {
      align-items: center;
      flex-direction: row;
      grid-row: 1 / 2;
      justify-content: center;
      padding: 2.5rem 8%;

      ${Content}, img {
        transform: ${(props) =>
          props.modeSign === 'signup' && 'translateY(-30rem)'};
      }
    }

    ${RightPanel} {
      grid-row: 3 / 4;

      ${Content}, img {
        transform: ${(props) =>
          props.modeSign === 'signup' ? 'translateY(0)' : 'translateY(30rem)'};
      }
    }
  }

  @media only screen and (max-width: 576px) {
    &:before {
      bottom: ${(props) => (props.modeSign === 'signup' ? '35%' : '65%')};
      left: 50%;
    }

    & ${Content} {
      padding: 0.5rem 1rem;

      & + img {
        display: none;
      }
    }
  }
`;
