import styled from 'styled-components';

export const PanelsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;

  img {
    max-width: 26rem;
    transition: transform 1.1s ease-in-out 0.4s;
    width: 100%;
  }
`;

export const Content = styled.div`
  color: ${(props) => props.theme.backgroundColor};
  transition: transform 0.9s ease-in-out 0.6s;

  @media only screen and (max-width: 576px) {
    padding: 0.5rem 1rem;
  }

  h3 {
    font-size: 3.2rem;
    font-weight: 600;
    line-height: 3.2rem;
    margin: 0;
  }

  p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
    letter-spacing: 0.1rem;
    max-width: 31.2rem;
    padding: 0.7rem 0;
  }
`;

export const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  padding: 3rem 17% 2rem 12%;
  pointer-events: all;
  text-align: center;
`;

export const RightPanel = styled(LeftPanel)`
  padding: 3rem 12% 2rem 17%;
  pointer-events: none;

  ${Content}, img {
    transform: translateX(800px);
  }
`;

export const SignUpButon = styled.button`
  background-color: transparent;
  border: 0.1rem solid ${(props) => props.theme.backgroundColor};
  border-radius: 0.4rem;
  color: ${(props) => props.theme.backgroundColor};
  cursor: pointer;
  display: inline-block;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.75;
  margin: 0;
  min-width: 6.4rem;
  outline: none;
  padding: 0.5rem 1.5rem;
  text-transform: capitalize;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: ${(props) => props.theme.backgroundColor};
    color: #4481eb;
  }
`;

export const Wrapper = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4rem;
  margin-top: 4rem;
  max-width: 124rem;
  padding-bottom: 1.2rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.titleBackgroundColor};
  border-radius: 1.4rem;
  min-height: 61.2rem;
  overflow: hidden;
  position: relative;
  width: 100%;

  &:before {
    content: '';
    background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%);
    border-radius: 50%;
    height: 200rem;
    position: absolute;
    right: ${(props) => (props.modeSign === 'signup' ? '52%' : '48%')};
    top: -10%;
    transition: 1.8s ease-in-out;
    transform: ${(props) =>
      props.modeSign === 'signup'
        ? 'translate(100%, -50%)'
        : 'translateY(-50%)'};
    width: 380rem;
    z-index: 15;
  }

  ${LeftPanel} {
    ${Content}, img {
      transform: ${(props) =>
        props.modeSign === 'signup' && 'translateX(-800px)'};
    }
    z-index: ${(props) => (props.modeSign === 'signup' ? '12' : '16')};
  }

  ${RightPanel} {
    pointer-events: all;
    z-index: ${(props) => (props.modeSign === 'signin' ? '12' : '16')};

    ${Content}, img {
      transform: ${(props) => props.modeSign === 'signup' && 'translateX(0px)'};
    }
  }
`;
