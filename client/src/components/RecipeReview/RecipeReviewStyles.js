import styled from 'styled-components';

export const Reviews = styled.div`
  margin-top: 4rem;
  width: 100%;
`;

export const ReviewHeader = styled.div`
  position: relative;

  h3 {
    border-bottom: 0.1rem solid ${(props) => props.theme.borderColor};
    font-size: 2.4rem;
    font-weight: 700;
    margin: 0;
    padding-bottom: 1.5rem;
  }
`;

export const ReviewContainer = styled.ul`
  display: flex;
  flex-direction: column;

  & > div:first-child {
    margin-left: 0;
    margin-top: 3.2rem;
  }
`;

export const ReviewItem = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 3.2rem;
`;

export const UserAvatar = styled.div`
  color: ${(props) => props.theme.fontColor};
  margin-right: 1.2rem;

  img {
    border-radius: 50%;
    display: block;
    height: 3.6rem;
    width: 3.6rem;

    @media only screen and (min-width: 576px) {
      height: 4.5rem;
      width: 4.5rem;
    }
  }
`;

export const ContentReview = styled.div`
  width: calc(100% - 4.8rem);

  @media screen and (min-width: 576px) {
    width: calc(100% - 5.8rem);
  }

  & > div {
    background-color: ${(props) => props.theme.borderColor};
    border-radius: 1.2rem;
    box-sizing: border-box;
    padding: 1.2rem 1.6rem;
    width: fit-content;
  }

  h4 {
    color: ${(props) => props.theme.titleColor};
    font-size: 1.6rem;
    font-weight: 600;
    margin: 0;
    transition: color 0.2s ease-out;

    &:hover {
      color: ${(props) => props.theme.hoverColor};
    }
  }

  p {
    display: inline-block;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
    margin-bottom: 0;
    margin-top: 0.4rem;

    a {
      color: ${(props) => props.theme.hoverColor};
      font-weight: 600;
      margin-right: 0.5rem;
    }
  }
`;

export const DetailReview = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-top: 0.8rem;
  margin-left: 6rem;
  width: 100%;

  @media only screen and (min-width: 576px) {
    margin-left: 7.2rem;
  }

  & > span {
    color: ${(props) => props.theme.fontColor};
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: 0.1rem;

    &:first-child {
      color: ${(props) => props.theme.hoverColor};
      cursor: pointer;
      margin-right: 1.2rem;
    }
  }
`;

export const ReplyContainer = styled(ReviewContainer)`
  margin-left: 4.6rem;

  @media screen and (min-width: 576px) {
    margin-left: 6rem;
  }
`;

export const ReplyTextInput = styled.div`
  margin-top: 1.2rem;
  margin-left: 4.6rem;
  width: 100%;

  @media screen and (min-width: 576px) {
    margin-left: 6rem;

    p {
      margin-left: 6rem !important;
    }

    textarea {
      width: calc(100% - 5.8rem);
    }
  }

  & > div {
    display: flex;
    align-items: flex-start;
    position: relative;
    width: 100%;

    &:focus-within {
      svg {
        color: ${(props) => props.theme.hoverColor};
      }

      textarea {
        border-color: ${(props) => props.theme.hoverColor};
      }
    }

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      height: 2.8rem;
      outline: none;
      padding: 0;
      position: absolute;
      bottom: 0.9rem;
      right: 1.2rem;
      width: 2.8rem;

      svg {
        color: ${(props) => props.theme.fontColor};
        font-size: 2.8rem;
        font-weight: 700;
        transition: color 0.2s ease-out;
      }
    }
  }

  p {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 0.8rem;
    margin-left: 4.8rem;
    margin-top: -1rem;

    a {
      color: ${(props) => props.theme.hoverColor};
      font-weight: 600;
    }

    button {
      background-color: transparent;
      border: 0.1rem solid ${(props) => props.theme.hoverColor};
      border-radius: 0.4rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      height: 2.4rem;
      padding: 0;
      transition: all 0.2 ease-out;
      width: 2.4rem;

      &:hover {
        background-color: ${(props) => props.theme.hoverColor};

        svg {
          color: ${(props) => props.theme.backgroundColor};
        }
      }

      svg {
        color: ${(props) => props.theme.hoverColor};
        font-size: 2.4rem;
        font-weight: 600;
      }
    }
  }

  textarea {
    background-color: ${(props) => props.theme.backgroundColor};
    border: 0.1rem solid ${(props) => props.theme.borderColor};
    border-radius: 0.4rem;
    box-sizing: border-box;
    color: ${(props) => props.theme.fontColor};
    font-size: 1.8rem;
    font-family: 'Roboto', sans-serif;
    height: 4.8rem;
    outline: none;
    overflow: hidden;
    padding: 1.2rem 5.2rem 1.2rem 1.6rem;
    resize: none;
    transition: border-color 0.2s ease-out;
    white-space: pre-wrap;
    width: calc(100% - 4.8rem);
  }
`;
