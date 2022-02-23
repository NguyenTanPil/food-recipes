import { Container } from './SignUpStyles';
import { Form, Formik } from 'formik';
import ValidInput from '../ValidInput';
import { Header, SubmitButton } from '../SignIn/SignInStyles';
import logo from '../../assets/brand.png';

const SignUp = ({ modeSign, validate }) => {
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
        onSubmit={(value, actions) => {
          console.log(value);
        }}
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
