import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 4rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  max-width: 80rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;

  form {
    border-radius: 0.8rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0 0.2rem 0.8rem 0;
    box-sizing: border-box;
    padding: 2.4rem;
    width: 100%;

    @media only screen and (min-width: 576px) {
      padding: 3.4rem 5.2rem;
    }

    & > div {
      margin-top: 2.4rem;

      & > label {
        background-color: ${(props) => props.theme.backgroundColor};
      }
    }
  }
`;

export const TitleForm = styled.h2`
  color: ${(props) => props.theme.hoverColor};
  font-size: 3.2rem;
  font-weight: 600;
  margin-bottom: 0;
  margin-top: 0;
  text-align: center;
  width: 100%;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: ${(props) => props.theme.fontColor};
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  input,
  textarea {
    border: 0.1rem solid ${(props) => props.theme.borderColor};
    border-radius: 0.4rem;
    box-sizing: border-box;
    color: ${(props) => props.theme.fontColor};
    font-size: 1.8rem;
    outline: none;
    padding: 1.2rem 1.6rem;
    transition: border-color 0.2s ease-out;

    &:focus {
      border-color: ${(props) => props.theme.hoverColor};
    }
  }

  textarea {
    font-family: 'Roboto', sans-serif;
    min-height: 12rem;
    resize: none;
  }
`;

export const IngredientItem = styled.div`
  display: flex;
  flex-wrap: wrap;

  input {
    margin-bottom: 1rem;
    width: 100%;

    @media only screen and (min-width: 576px) {
      flex-grow: 1;
      margin-right: 1.4rem;
      width: auto;
    }
  }

  &:last-child input,
  &:last-child button {
    margin-bottom: 0rem;
  }
`;

export const ActionButton = styled.button`
  background-color: ${(props) => props.theme.backgroundColor};
  border: 0.1rem solid ${(props) => props.theme.hoverColor};
  border-radius: 0.4rem;
  color: ${(props) => props.theme.hoverColor};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 500;
  height: 4.6rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
  outline: none;
  transition: all 0.2s ease-out;
  width: 4.6rem;

  &:last-child {
    margin-right: 0;
  }

  svg {
    font-size: 2.4rem;
    font-weight: 600;
  }

  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
    color: ${(props) => props.theme.backgroundColor};
  }
`;

export const StepItem = styled.div`
  margin-bottom: 1.2rem;

  &:last-child {
    margin-bottom: 0;
  }

  label {
    color: ${(props) => props.theme.hoverColor};
    display: inline-block;
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  input {
    width: 100%;
  }

  textarea {
    font-family: 'Roboto', sans-serif;
    min-height: 10rem;
    resize: none;
    width: 100%;
  }

  input,
  textarea {
    margin-bottom: 1.5rem;
  }
`;

export const PreviewImage = styled.div`
  margin-bottom: 1.4rem;
  position: relative;
  width: 100%;

  img {
    border-radius: 1.4rem;
    max-height: 32rem;
    object-fit: cover;
    width: 100%;
  }
`;

export const CloseButton = styled(ActionButton)`
  background-color: ${(props) => props.theme.hoverColor};
  border-radius: 50%;
  color: ${(props) => props.theme.backgroundColor};
  position: absolute;
  right: 1.4rem;
  top: 1.4rem;

  &:hover {
    background-color: #fd4755e0;
  }
`;

export const ImageInput = styled.div`
  position: relative;

  input {
    opacity: 0;
  }

  label {
    border: 0.1rem solid ${(props) => props.theme.borderColor};
    border-radius: 0.4rem;
    box-sizing: border-box;
    color: ${(props) => props.theme.fontColor};
    cursor: pointer;
    display: flex;
    align-items: center;
    height: calc(100% - 1.7rem);
    position: absolute;
    top: 0;
    right: 0;
    padding-left: 1.4rem;
    text-transform: capitalize;
    transition: color 0.2s ease-out;
    width: calc(100% - 0.2rem);
    z-index: 1008;

    &:hover {
      color: ${(props) => props.theme.hoverColor};
    }

    svg {
      color: inherit;
      font-size: 2.4rem;
      font-weight: 600;
      margin-right: 1rem;
    }

    span {
      color: inherit;
      font-size: 1.6rem;
      font-weight: 600;
    }
  }
`;

export const NutritionItem = styled(StepItem)`
  & > div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    & > div {
      position: relative;

      span {
        color: ${(props) => props.theme.fontColor};
        font-size: 1.6rem;
        font-weight: 500;
        position: absolute;
        right: 1.4rem;
        top: 1.2rem;
      }
    }

    input {
      padding-right: 4rem;
      width: 100%;
    }

    @media only screen and (min-width: 576px) {
      flex-direction: row;

      input {
        width: 48%;
      }
    }
  }
`;
