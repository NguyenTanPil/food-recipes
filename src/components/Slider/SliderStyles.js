import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 124rem;
  padding-bottom: 1.2rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  position: relative;

  &:hover {
    button {
      opacity: 1;
    }
  }
`;

export const Images = styled.div`
  width: 100%;
`;

export const ImageItem = styled.div`
  opacity: ${(props) => (props.active ? '1' : '0')};
  transition-duration: ${(props) => (props.active ? '0.5s' : '0.5s ease')};
  transform: ${(props) => (props.active ? 'scale(1)' : 'scale(0.92)')};
  width: 100%;

  img {
    border-radius: 1.6rem;
    display: block;
    max-height: 60rem;
    width: 100%;
  }
`;

export const PrevButton = styled.button`
  background-color: ${(props) => props.theme.backgroundColor};
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 0.8rem 0 rgb(222 222 222 / 70%);
  color: ${(props) => props.theme.hoverColor};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  height: 4rem;
  opacity: 0;
  outline: none;
  position: absolute;
  left: 3rem;
  top: 50%;
  transition: all 0.2s ease-out;
  transform: translateY(-50%);
  user-select: none;
  width: 4rem;
  z-index: 1008;

  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
    color: ${(props) => props.theme.backgroundColor};
  }

  @media only screen and (min-width: 576px) {
    height: 6rem;
    left: 5rem;
    width: 6rem;
  }
`;

export const NextButton = styled(PrevButton)`
  left: auto;
  right: 3rem;

  @media only screen and (min-width: 576px) {
    right: 5rem;
  }
`;
