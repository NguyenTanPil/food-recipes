import { getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCookie } from '../../../Utils/cookie';
import getImageByKey from '../../../Utils/getImageByKey';
import SignIn from '../../SignIn';
import SignUp from '../../SignUp';
import TitleBar from '../../TitleBar';
import {
  Container,
  Content,
  LeftPanel,
  PanelsContainer,
  RightPanel,
  SignUpButon,
  Wrapper,
} from './LoginStyles';

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

const Login = ({ color }) => {
  const [mode, setMode] = useState('signup');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isSubscribed = true;

    if (isSubscribed) {
      const userCookie = getCookie('user');
      if (userCookie) {
        navigate('/');
      }
    }

    return () => {
      isSubscribed = false;
    };
  }, [navigate]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smoothly scrolling
    });
  }, []);

  return (
    <>
      <TitleBar mainTitle="Login to Food Recipes" pageList={['Login']} />
      <Wrapper>
        <Container modeSign={mode}>
          <SignUp modeSign={mode} setModeSign={setMode} validate={validate} />
          <SignIn
            prev={location.state ? location.state.prev : '/profile'}
            modeSign={mode}
            validate={validate}
          />
          <PanelsContainer>
            <LeftPanel>
              <Content>
                <h3>Welcome Back!</h3>
                <p>
                  To keep connected to our updates please login with your
                  personal info
                </p>

                <SignUpButon onClick={() => setMode('signup')}>
                  Sign In
                </SignUpButon>
              </Content>
              <img
                src={getImageByKey(
                  `barbecue${color.charAt(0).toUpperCase() + color.slice(1)}`,
                )}
                alt=""
              />
            </LeftPanel>
            <RightPanel>
              <Content>
                <h3>Hello, Friend!</h3>
                <p>
                  Enter your personal details and start your journey with us
                </p>
                <SignUpButon onClick={() => setMode('signin')}>
                  Sign Up
                </SignUpButon>
              </Content>
              <img
                src={getImageByKey(
                  `cooking${color.charAt(0).toUpperCase() + color.slice(1)}`,
                )}
                alt=""
              />
            </RightPanel>
          </PanelsContainer>
        </Container>
      </Wrapper>
    </>
  );
};

export default Login;
