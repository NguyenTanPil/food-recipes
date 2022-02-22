import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
  margin-top: 1rem;
  width: 100%;
`;

export const PageNumbers = styled.ul`
  display: flex;
  align-items: center;
`;

const rippleAnimation = keyframes` 
  to {
    transform: scale(4);
    opacity: 0;
  }
    
`;

export const PageButton = styled.button`
  background-color: ${(props) =>
    props.active ? props.theme.hoverColor : 'transparent'};
  border: 0.2rem solid ${(props) => props.theme.borderColor};
  border-radius: 0.4rem;
  box-sizing: border-box;
  color: ${(props) => (props.active ? '#fff' : props.theme.fontColor)};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 1.4rem;
  letter-spacing: 0.01071rem;
  line-height: 1.43;
  height: 3.6rem;
  min-width: 3.6rem;
  margin: 0 0.3rem;
  outline: 0;
  opacity: ${(props) => (props.disabled ? '0.52' : '1')};
  overflow: hidden;
  padding: 0 0.6rem;
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  position: relative;
  text-align: center;
  transition: all 400ms;
  user-select: none;

  svg {
    display: inline-block;
    flex-shrink: 0;
    fill: currentColor;
    font-size: 1.5rem;
    font-size: 1.25rem;
    height: 2.4rem;
    margin: 0 -0.8rem;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    user-select: none;
    width: 2.4rem;
  }

  span {
    animation: ${rippleAnimation} 600ms linear;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    position: absolute;
    transform: scale(0);
  }
`;
