import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr;
  max-width: 45rem;
  opacity: ${(props) => (props.modeSign === 'signup' ? '1' : '0')};
  position: absolute;
  left: ${(props) => (props.modeSign === 'signup' ? '25%' : '75%')};
  top: 50%;
  padding: 4rem 6rem 6rem;
  transform: translate(-50%, -50%);
  transition: opacity 0.1s ease-in-out;
  width: 50%;
  z-index: 13;
`;
