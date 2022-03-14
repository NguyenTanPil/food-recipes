import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const CurrentSelect = styled.div`
  border: 0.1rem solid ${(props) => props.theme.borderColor};
  border-radius: 0.8rem;
  color: ${(props) => props.theme.fontColor};
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.2rem 1.6rem;
  text-transform: capitalize;
`;

export const SelectList = styled.div`
  background-color: ${(props) => props.theme.titleBackgroundColor};
  border: 0.1rem solid ${(props) => props.theme.borderColor};
  border-radius: 0.8rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0 0.2rem 0.8rem 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: calc(100% + 0.5rem);
  width: 100%;
  z-index: 1008;
`;

export const SelectItem = styled.span`
  background-color: ${(props) =>
    props.active ? props.theme.backgroundColor : 'inherit'};
  color: ${(props) =>
    props.active ? props.theme.hoverColor : props.theme.fontColor};
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.2rem 1.6rem;
  transition: all 0.2s ease-out;
  text-transform: capitalize;

  &:hover {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.hoverColor};
    padding-left: ${(props) => (props.active ? '1.6rem' : '2rem')};
  }

  &:first-child {
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
  }

  &:last-child {
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
  }
`;
