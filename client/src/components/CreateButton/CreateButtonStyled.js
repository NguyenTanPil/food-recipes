import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.25) 0 5.4rem 5.5rem,
    rgba(0, 0, 0, 0.12) 0 -1.2rem 3rem, rgba(0, 0, 0, 0.12) 0 0.4rem 0.6rem,
    rgba(0, 0, 0, 0.17) 0 1.2rem 1.3rem, rgba(0, 0, 0, 0.09) 0 -0.3rem 0.5rem;
  height: 6rem;
  position: fixed;
  left: 2rem;
  bottom: 10rem;
  transition: transform 0.2s ease-out;
  width: 6rem;
  z-index: 1008;

  a {
    display: block;
    position: relative;
    height: 100%;
  }

  img {
    width: 100%;
  }

  svg {
    background-color: ${(props) => props.theme.hoverColor};
    border-radius: 50%;
    color: ${(props) => props.theme.backgroundColor};
    font-size: 2rem;
    font-weight: 600;
    position: absolute;
    right: 0.2rem;
    top: 2rem;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
