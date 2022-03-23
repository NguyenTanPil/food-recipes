import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const Container = styled.div`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  width: 3.7rem;
  z-index: 1008;
`;

export const Button = styled.button`
  animation: ${pulse} 1s ease infinite 0s;
  background-color: ${(props) => props.theme.hoverColor};
  border: none;
  border-radius: 0.4rem;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 1.4rem;
  outline: none;
  padding: 1rem 1.25rem;
  text-align: center;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: ${(props) => `${props.theme.hoverColor}CC`};
    font-weight: 600;
  }
`;
