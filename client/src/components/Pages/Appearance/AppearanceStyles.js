import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 4rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  max-width: 70rem;
  padding-bottom: 1.2rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
`;

export const Content = styled.div`
  border: 0.1rem solid ${(props) => props.theme.borderColor};
  border-radius: 0.8rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0 0.2rem 0.8rem 0;
  padding: 1.6rem 2.4rem;
  width: 100%;

  @media only screen and (min-width: 576px) {
    padding: 1.6rem 3.2rem;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    color: ${(props) => props.theme.titleColor};
    font-size: 2.4rem;
    font-weight: 800;
    margin-bottom: 1.2rem;
    text-transform: capitalize;
  }

  span {
    color: ${(props) => props.theme.fontColor};
    font-size: 1.6rem;
    font-weight: 400;
    max-width: 50rem;
  }
`;

export const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

export const CustomItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  width: 100%;

  label {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 0.8rem;
  }
`;

export const SelectOption = styled.div`
  background-color: ${(props) => props.theme.borderColor};
  border-radius: 0.8rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2rem 1.6rem;
  width: 100%;
`;

export const SelectItem = styled.div`
  border-radius: 0.8rem;
  display: flex;
  justify-content: center;
  width: calc(100% / 3);

  &:nth-child(-n + 3) {
    margin-bottom: 1.6rem;
  }

  @media only screen and (min-width: 576px) {
    width: calc(100% / 6);

    &:nth-child(-n + 3) {
      margin-bottom: 0;
    }
  }

  span {
    background-color: #e33e5a;
    border-radius: 0.8rem;
    box-shadow: ${(props) => props.active && '#e33e5a 0 0 1.6rem '};
    cursor: pointer;
    display: block;
    height: 4.5rem;
    opacity: ${(props) => (props.active ? '1' : '0.4')};
    width: 4.5rem;
  }

  &:nth-child(2) {
    span {
      background-color: #00bbf0;
      box-shadow: ${(props) => props.active && '#00bbf0 0 0 1.6rem '};
    }
  }

  &:nth-child(3) {
    span {
      background-color: #ffd739;
      box-shadow: ${(props) => props.active && '#ffd739 0 0 1.6rem '};
    }
  }

  &:nth-child(4) {
    span {
      background-color: #29de92;
      box-shadow: ${(props) => props.active && '#29de92 0 0 1.6rem '};
    }
  }

  &:nth-child(5) {
    span {
      background-color: #9852f9;
      box-shadow: ${(props) => props.active && '#9852f9 0 0 1.6rem '};
    }
  }

  &:last-child {
    span {
      background-color: #f91880;
      box-shadow: ${(props) => props.active && '#f91880 0 0 1.6rem '};
    }
  }
`;

export const SelectBackgroundItem = styled(SelectItem)`
  max-width: 26rem;
  width: 100%;

  &:nth-child(3) {
    margin-bottom: 0;
  }

  @media only screen and (min-width: 576px) {
    width: 26%;
  }

  span {
    background-color: #ffffff;
    border: ${(props) =>
      props.active && `0.2rem solid ${props.theme.hoverColor}`};
    box-shadow: ${(props) =>
      props.active && `${props.theme.hoverColor} 0 0 1.6rem  !important`};
    box-sizing: border-box;
    height: 6rem;
    opacity: ${(props) => (props.active ? '1' : '0.8')};
    width: 100%;
  }

  &:nth-child(2) {
    span {
      background-color: #181a1b;
    }
  }

  &:last-child {
    span {
      background-color: #15202b;
    }
  }
`;
