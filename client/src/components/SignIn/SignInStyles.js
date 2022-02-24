import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr;
  max-width: 45rem;
  opacity: ${(props) => (props.modeSign === 'signup' ? '1' : '0')};
  position: absolute;
  left: 75%;
  top: 50%;
  padding: 4rem 6rem 4rem;
  transform: translate(-50%, -50%);
  transition: all 1.1s ease-in-out;
  width: 50%;
  z-index: ${(props) => (props.modeSign === 'signup' ? '14' : '13')};

  @media only screen and (max-width: 870px) {
    left: 50%;
    top: 95%;
    transform: translate(-50%, -100%);
    transition: 1s 0.8s ease-in-out;
    width: 100%;
  }

  @media only screen and (max-width: 576px) {
    padding: 0.5rem 1.5rem;
  }
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
  transition: all 1.1s ease-in-out;
  width: 50%;
  z-index: 13;

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

export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    color: ${(props) => props.theme.hoverColor};
    font-size: 2.4rem;
    font-weight: 600;
    margin-top: 1rem;
    text-align: center;
    text-transform: capitalize;
  }

  img {
    height: 6rem;
    width: 6rem;
  }
`;

export const SubmitButton = styled.button`
  background-color: ${(props) => props.theme.hoverColor};
  border: 0.1rem solid ${(props) => props.theme.hoverColor};
  border-radius: 0.4rem;
  color: ${(props) => props.theme.backgroundColor};
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 600;
  margin-top: 2rem;
  outline: none;
  padding: 1rem 1.5rem;
  text-transform: uppercase;
  transition: background-color 0.2s ease-out;
  width: 100%;

  &:hover {
    background-color: #fd4755e6;
  }
`;
