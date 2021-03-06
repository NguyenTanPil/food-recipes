import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/brand.png';
import { setLoginDetail } from '../../features/userSlice';
import db, { auth } from '../../firebase';
import { setCookie } from '../../Utils/cookie';
import ValidInput from '../ValidInput';
import { Container, Header, SubmitButton } from './SignInStyles';

const convertCreateAtToJoinedTime = (createdAt) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const date = new Date(parseInt(createdAt));

  return `Joined ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
};

const SignIn = ({ prev, modeSign, validate }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAfterSignIn = async (response) => {
    const userId = response.user.uid;
    let currentUser;

    // check user is exists
    const userSnap = await getDoc(doc(db, 'users', userId));

    if (userSnap.exists()) {
      currentUser = { id: userId, ...userSnap.data() };
    } else {
      const user = {
        id: userId,
        name: response.user.displayName,
        userName: response.user.displayName,
        email: response.user.email,
        location: '',
        bio: '',
        background:
          'https://i.pinimg.com/736x/b1/33/fe/b133fe1cf7d86da172350deaf4c85599.jpg',
        avatar: response.user.photoURL,
        joined: convertCreateAtToJoinedTime(response.user.metadata.createdAt),
        followList: [],
        followerList: [],
        savedList: [],
      };

      await setDoc(doc(db, 'users', userId), user);
      currentUser = { ...user };
    }

    setCookie({ data: currentUser, cookieName: 'user', time: 60 * 60 });
    dispatch(setLoginDetail(currentUser)); // set user detail to redux

    navigate(prev);
  };

  const handleSignIn = (values) => {
    // handle sign in then validation
    const { email, password } = values;

    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        handleAfterSignIn(response);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === 'auth/user-not-found') {
          alert('Email or password is incorrect. Try again! ');
        } else if (errorCode === 'auth/wrong-password') {
          alert('Email or password is incorrect. Try again!');
        } else {
          console.log('Error login', errorMessage);
        }
      });
  };

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
        onSubmit={handleSignIn}
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
            <SubmitButton type="submit" onClick={() => validateForm()}>
              Sign In
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SignIn;
