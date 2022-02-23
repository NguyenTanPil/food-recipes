import TitleBar from '../../TitleBar';
import {
  Container,
  PanelsContainer,
  FormContainer,
  FormTitle,
  MainForm,
  LeftPanel,
  RightPanel,
  Content,
  SignUpButon,
  Wrapper,
} from './LoginStyles';
import { Form, Formik } from 'formik';
import ValidInput from '../../ValidInput';
import bgLogin from '../../../assets/bg-login.svg';
import bgSignUp from '../../../assets/bg-sign-up.svg';
import { useRef, useState } from 'react';
import SignUp from '../../SignUp';
import SignIn from '../../SignIn';

const validate = {
  // check user name
  userName(value) {
    let error;
    const maxLength = 15;

    if (!value) {
      error = 'Please enter your user name';
    } else if (['admin', 'null', 'god'].includes(value)) {
      error = 'Nice try!';
    } else if (value.length > maxLength) {
      error = 'Must be 15 characters or less';
    }

    return error;
  },
  // check email
  email(value) {
    let error;

    if (!value) {
      error = 'Please enter your email address';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }

    return error;
  },
  // check password
  password(value) {
    let error;

    if (!value) {
      error = 'Please enter your password';
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) {
      error = 'Minimum 8 characters, at least one letter and one number';
    }

    return error;
  },
  // check repeat password
  repeatPass(value, pass) {
    let error;

    if (!value) {
      error = 'Please enter confirm password';
    } else if (value !== pass) {
      error = 'Password is not matched';
    }

    return error;
  },
};

const Login = () => {
  const [mode, setMode] = useState('signin');

  return (
    <>
      <TitleBar mainTitle="Login to Food Recipes" pageList={['Login']} />
      <Wrapper>
        <Container modeSign={mode}>
          <SignUp modeSign={mode} validate={validate} />
          <SignIn modeSign={mode} validate={validate} />
          <PanelsContainer>
            <LeftPanel>
              <Content>
                <h3>Hello, Friend!</h3>
                <p>
                  Enter your personal details and start your journey with us
                </p>
                <SignUpButon onClick={() => setMode('signup')}>
                  Sign Up
                </SignUpButon>
              </Content>
              <img src={bgLogin} alt="" />
            </LeftPanel>
            <RightPanel>
              <Content>
                <h3>Welcome Back!</h3>
                <p>
                  To keep connected to our updates please login with your
                  personal info
                </p>
                <SignUpButon onClick={() => setMode('signin')}>
                  Sign in
                </SignUpButon>
              </Content>
              <img src={bgSignUp} alt="" />
            </RightPanel>
          </PanelsContainer>
        </Container>
      </Wrapper>
    </>
  );
};

export default Login;