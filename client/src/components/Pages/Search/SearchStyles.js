import styled from 'styled-components';

export const SearchBox = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: -1.5rem;
  margin-bottom: 4rem;
  margin-top: 4rem;
  max-width: 124rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;

  div {
    position: relative;
    max-width: 40rem;
    width: 100%;

    &:focus-within {
      input {
        border-color: ${(props) => props.theme.hoverColor};
      }

      svg {
        color: ${(props) => props.theme.hoverColor};
      }
    }

    input {
      background-color: ${(props) => props.theme.backgroundColor};
      border: none;
      border-bottom: 0.1rem solid ${(props) => props.theme.fontColor};
      box-sizing: border-box;
      color: ${(props) => props.theme.fontColor};
      font-size: 1.8rem;
      font-weight: 400;
      letter-spacing: 0.2rem;
      outline: none;
      padding: 1.2rem 4rem 1.2rem 1.6rem;
      transition: border-color 0.2s ease-in-out;
      width: 100%;
    }

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      height: 2rem;
      outline: none;
      padding: 0;
      position: absolute;
      right: 1.6rem;
      top: 50%;
      transform: translateY(-50%);
    }

    svg {
      color: ${(props) => props.theme.fontColor};
      font-size: 2rem;
      transition: color 0.2s ease-in-out;
    }
  }
`;

export const ResultAmount = styled.div`
  box-sizing: border-box;
  margin: 1.2rem 0 3.2rem;

  span {
    color: ${(props) => props.theme.titleColor};
    font-size: 2.4rem;
    font-weight: 600;

    span {
      color: ${(props) => props.theme.hoverColor};
    }
  }
`;
