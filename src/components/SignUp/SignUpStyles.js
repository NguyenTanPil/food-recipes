import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr;
  max-width: 45rem;
  opacity: ${(props) => (props.modeSign === 'signin' ? '1' : '0')};
  position: absolute;
  left: ${(props) => (props.modeSign === 'signup' ? '25%' : '75%')};
  top: 50%;
  padding: 4rem 6rem 4rem;
  transform: translate(-50%, -50%);
  transition: all 1.1s ease-in-out;
  width: 50%;
  z-index: ${(props) => (props.modeSign === 'signin' ? '14' : '13')};

  @media only screen and (max-width: 870px) {
    left: 50%;
    top: ${(props) => (props.modeSign === 'signup' ? '5%' : '95%')};
    transform: ${(props) =>
      props.modeSign === 'signup'
        ? 'translate(-50%, 0)'
        : 'translate(-50%, -100%)'};
    transition: 1s 0.8s ease-in-out;
    width: 100%;
  }

  @media only screen and (max-width: 576px) {
    padding: 0.5rem 1.5rem;
  }
`;
