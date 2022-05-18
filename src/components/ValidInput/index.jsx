import {
  Container,
  ErrorMessage,
  FieldGroup,
  NofiIcon,
} from './ValidInputStyles';
import { Field } from 'formik';
import { BiErrorCircle } from 'react-icons/bi';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useRef, useEffect } from 'react';

const ValidInput = ({
  type,
  name,
  placeholder,
  validateFunc,
  errorMessage,
  touched,
}) => {
  const messageRef = useRef();
  const wrapMessageRef = useRef();

  useEffect(() => {
    const height = messageRef.current.getBoundingClientRect().height;
    wrapMessageRef.current.style.height = height + 'px';
  }, [errorMessage]);

  return (
    <Container>
      <FieldGroup>
        <Field
          type={type}
          name={name}
          placeholder=" "
          autoComplete="off"
          validate={validateFunc}
        />
        <span>{placeholder}</span>
      </FieldGroup>
      <ErrorMessage ref={wrapMessageRef}>
        <div ref={messageRef}>
          <span>{errorMessage}</span>
        </div>
      </ErrorMessage>
      <NofiIcon error={errorMessage ? 1 : 0}>
        {touched ? (
          errorMessage ? (
            <BiErrorCircle />
          ) : (
            <AiOutlineCheckCircle />
          )
        ) : (
          ''
        )}
      </NofiIcon>
    </Container>
  );
};

export default ValidInput;
