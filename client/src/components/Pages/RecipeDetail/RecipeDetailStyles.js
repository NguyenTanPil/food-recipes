import styled from 'styled-components';
import { SubmitButton } from '../CreateRecipe/CreateRecipeStyles';

export const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  max-width: 124rem;
  padding-bottom: 1.2rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
`;

export const RecipeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 4rem;
  width: 100%;

  @media only screen and (min-width: 1200px) {
    width: 63%;
  }
`;

export const RecipeTitle = styled.div`
  margin-bottom: 4rem;

  h2 {
    color: ${(props) => props.theme.titleColor};
    font-size: 2.4rem;
    font-weight: 600;
    margin: 0;
    text-transform: capitalize;

    @media only screen and (min-width: 576px) {
      font-size: 3.2rem;
    }
  }
`;

export const AboutDetaill = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;

  li {
    color: ${(props) => props.theme.fontColor};
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 400;
    padding: 0.25rem 1rem 0.25rem 0;

    & > svg {
      color: ${(props) => props.theme.hoverColor};
      font-size: 1.4rem;
      margin-right: 0.5rem;
    }

    & > span {
      color: ${(props) => props.theme.hoverColor};
      font-weight: 600;
      margin-left: 0.25rem;
    }

    & > div {
      margin-top: 0;
    }
  }
`;

export const Image = styled.div`
  max-height: 50rem;
  overflow: hidden;
  width: 100%;

  img {
    border-radius: 1.6rem;
    object-fit: contain;
    width: 100%;
  }
`;

export const Description = styled.div`
  margin-bottom: 4rem;
  margin-top: 4rem;
`;

export const DescContent = styled.div`
  position: relative;

  p {
    color: ${(props) => props.theme.fontColor};
    display: -webkit-box;
    font-size: 1.8rem;
    font-weight: 400;
    letter-spacing: 0.1rem;
    line-height: 2.4rem;
    overflow: hidden;
    transition: line-clamp 0.2s ease-out;
    -webkit-line-clamp: ${(props) => (props.full ? 'none' : 8)};
    -webkit-box-orient: vertical;
  }

  span {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.hoverColor};
    border: 0.2rem solid ${(props) => props.theme.hoverColor};
    border-radius: 0.4rem;
    cursor: pointer;
    display: inline-block;
    font-size: 1.5rem;
    outline: none;
    padding: 1rem 1.25rem;
    text-align: center;
    transition: all 0.3s ease-out;

    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
      color: #fff;
    }
  }
`;

export const IngreAndNutri = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  & > div {
    width: 100%;

    &:first-child {
      margin-bottom: 4rem;
    }

    @media only screen and (min-width: 576px) {
      width: 48%;
    }
  }
`;

export const Ingredients = styled.div`
  ul {
    display: flex;
    flex-direction: column;
  }

  li {
    color: ${(props) => props.theme.fontColor};
    display: flex;
    align-items: flex-start;
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 2rem;

    svg {
      font-size: 2rem;
      margin-right: 1rem;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Nutrition = styled(Ingredients)`
  li {
    border-bottom: 0.1rem dashed ${(props) => props.theme.borderColor};
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding-bottom: 1.5rem;
    padding-top: 1.5rem;

    & > span:last-child {
      font-weight: 600;
    }

    &:first-child {
      color: ${(props) => props.theme.hoverColor};
      justify-content: flex-end;
      font-size: 1.6rem;
      padding-bottom: 1rem;
      padding-top: 0;
    }
  }
`;

export const Directions = styled.div`
  margin-top: 3rem;

  & > p {
    color: ${(props) => props.theme.fontColor};
    font-size: 1.8rem;
    font-weight: 400;
    letter-spacing: 0.1rem;
    line-height: 2.4rem;
  }
`;

export const ListStep = styled.ul`
  margin-top: 4rem;
`;

export const StepItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media only screen and (min-width: 576px) {
    flex-direction: row;
  }
`;

const dist = (property, multiplier) => {
  const baseDist = 0.25;

  return `${property}: ${baseDist * multiplier}rem;`;
};

export const NumberStep = styled.div`
  background-color: ${(props) => props.theme.hoverColor};
  clip-path: polygon(
    calc(0.25rem * 50 * 0.85) 0,
    calc(0.25rem * 50) 50%,
    calc(0.25rem * 50 * 0.85) 100%,
    0% 100%,
    calc(0.25rem * 32 * 0.15) 50%,
    0% 0%
  );
  display: inline-block;
  font-size: 1.6rem;
  margin-bottom: 2rem;
  position: relative;
  ${dist('padding-left', 5)};
  ${dist('padding-right', 5)};
  ${dist('padding-top', 1)};
  ${dist('padding-bottom', 1)};
  ${dist('height', 16)};
  ${dist('max-width', 40)};
  ${dist('min-width', 40)};

  @media only screen and (min-width: 576px) {
    margin-bottom: 0;
  }

  & > div {
    color: #fff;
    display: inline-block;
    height: 5rem;
    position: relative;
    top: -0.5rem;
    left: 2.5rem;
    vertical-align: middle;
  }

  p {
    font-weight: 600;
    text-align: center;
  }
`;

export const StepContent = styled.div`
  margin-bottom: 2rem;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }

  @media only screen and (min-width: 576px) {
    width: calc(100% - 14rem);
  }

  img {
    border-radius: 1.4rem;
    margin-bottom: 1.5rem;
    width: 100%;
  }

  p {
    color: ${(props) => props.theme.fontColor};
    font-size: 1.8rem;
    font-weight: 400;
    letter-spacing: 0.1rem;
    line-height: 2.4rem;
    margin-top: 1rem;
  }
`;

export const StepTitle = styled.div`
  width: 100%;

  h3 {
    color: ${(props) => props.theme.fontColor};
    font-size: 2.4rem;
    font-weight: 600;
    margin: 0;
  }
`;

export const LoadingShape = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  margin-top: 2rem;
  width: 100%;

  img {
    height: 10rem;
    width: 10rem;
  }
`;

export const SaveButton = styled(SubmitButton)`
  margin-top: 2rem;
  width: 100%;
`;
