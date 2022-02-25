import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  position: relative;
`;

export const FieldGroup = styled.label`
  position: relative;

  span {
    background: ${(props) => props.theme.titleBackgroundColor};
    color: ${(props) => props.theme.fontColor};
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.2;
    padding: calc(0.5rem * 0.75) calc(0.5rem * 0.5);
    margin: calc(0.5rem * 0.75 + 0.5rem) calc(0.5rem * 0.5);
    position: absolute;
    left: 1.5rem;
    top: 0;
    transform: translateX(0, 0);
    transform-origin: 0 0;
    transition: transform 120ms ease-in;
    white-space: nowrap;
    z-index: -1;
  }

  input {
    appearance: auto;
    background-color: transparent;
    border: 0.1rem solid ${(props) => props.theme.border};
    border-radius: 0.4rem;
    box-sizing: border-box;
    color: ${(props) => props.theme.fontColor};
    display: block;
    font-size: 1.8rem;
    font-weight: 700;
    outline: none;
    padding: 1.2rem 1.6rem;
    width: 100%;

    &:focus,
    :not(:placeholder-shown) {
      & + span {
        transform: translate(-0.1rem, -70%) scale(0.8);
        color: ${(props) => props.theme.hoverColor};
        z-index: 2;
      }
    }
  }
`;

export const ErrorMessage = styled.div`
  height: 0;
  overflow: hidden;
  transition: height 0.2s ease-out 0s;

  div {
    padding: 0.75rem 0.5rem 0.5rem 1.8rem;
  }

  span {
    color: #f55d7a;
    font-size: 1.2rem;
  }
`;

export const NofiIcon = styled.div`
  position: absolute;
  right: 1.2rem;
  top: 1.5rem;

  svg {
    color: ${(props) => (props.error ? '#f55d7a' : '#0fb56d')};
    font-size: 1.8rem;
    font-weight: 600;
  }
`;
