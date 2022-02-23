import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr;
  max-width: 45rem;
  opacity: ${(props) => (props.modeSign === 'signin' ? '1' : '0')};
  position: absolute;
  left: 75%;
  top: 50%;
  padding: 4rem 6rem 6rem;
  transform: translate(-50%, -50%);
  transition: opacity 0.1s ease-in-out;
  width: 50%;
  z-index: 14;
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
