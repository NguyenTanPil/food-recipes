import { Container, Header, SubmitButton } from './SignInStyles';
import { Form, Formik } from 'formik';
import ValidInput from '../ValidInput';
import logo from '../../assets/brand.png';

const SignIn = ({ modeSign, validate }) => {
  return (
    <Container modeSign={modeSign}>
      <Header>
        <img src={logo} alt="" />
        <h2>Sign In to Food Recipes</h2>
      </Header>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(value, actions) => {
          console.log(value);
        }}
      >
        {({ errors, touched, validateForm, handleSubmit }) => (
          <Form onSubmit={handleSubmit} noValidate>
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
            <SubmitButton>Sign In</SubmitButton>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SignIn;
