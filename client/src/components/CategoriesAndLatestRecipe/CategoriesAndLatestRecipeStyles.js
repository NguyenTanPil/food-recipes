import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  @media only screen and (min-width: 1200px) {
    width: 33%;
  }
`;
