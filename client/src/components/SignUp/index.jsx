import { Container } from './SignUpStyles';
import { Form, Formik } from 'formik';
import ValidInput from '../ValidInput';
import { Header, SubmitButton } from '../SignIn/SignInStyles';
import logo from '../../assets/brand.png';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const SignUp = ({ modeSign, validate, setModeSign }) => {
  const handleSignUp = (values) => {
    // handle sign in then validation
    const { email, password, userName } = values;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCreated) => {
        const user = userCreated.user;
        updateProfile(user, {
          displayName: userName,
          photoURL:
            'https://res.cloudinary.com/felixnguyen/image/upload/v1620744647/user-details/avt_npasta.png',
        })
          .then(() => {
            // update is succsess
            setModeSign('signup');
          })
          .catch((error) => {
            console.log('Error update user: ', error.message);
          });
      })
      .catch((error) => {
        // sign in not successful
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === 'auth/email-already-in-use') {
          alert('Email is already in use!');
        } else if (errorCode === 'auth/invalid-email') {
          alert('Email is not exist!');
        } else {
          console.log('Error create user', errorMessage);
        }
      });
  };

  return (
    <Container modeSign={modeSign}>
      <Header>
        <img src={logo} alt="" />
        <h2>Sign Up to Food Recipes</h2>
      </Header>
      <Formik
        initialValues={{
          userName: '',
          email: '',
          password: '',
        }}
        validateOnChange={false}
        validateOnBlur={true}
        onSubmit={handleSignUp}
      >
        {({ errors, touched, validateForm, handleSubmit }) => (
          <Form onSubmit={handleSubmit} noValidate>
            <ValidInput
              type="text"
              name="userName"
              placeholder="Your Name"
              errorMessage={
                errors.userName && touched.userName && errors.userName
              }
              touched={touched.userName}
              validateFunc={validate.userName}
            />
            <ValidInput
              type="email"
              name="email"
              placeholder="Your Email"
              errorMessage={errors.email && touched.email && errors.email}
              touched={touched.email}
              validateFunc={validate.email}
            />

            <ValidInput
              type="password"
              name="password"
              placeholder="Your Password"
              errorMessage={
                errors.password && touched.password && errors.password
              }
              touched={touched.password}
              validateFunc={validate.password}
            />
            <SubmitButton type="submit" onClick={() => validateForm()}>
              Sign up
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SignUp;
