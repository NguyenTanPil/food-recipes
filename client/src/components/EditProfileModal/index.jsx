import {
  AvatarUpload,
  BackgroundUpload,
  Body,
  Container,
  Content,
  EditForm,
  Header,
  LoadingShape,
  OverLoadUpload,
} from './EditProfileModalStyles';
import { CgPushChevronLeft } from 'react-icons/cg';
import { BsCamera } from 'react-icons/bs';
import { Formik, Form, Field } from 'formik';
import { FieldGroup } from '../ValidInput/ValidInputStyles';
import { SubmitButton } from '../SignIn/SignInStyles';
import Cookies from 'universal-cookie';
import { setLoginDetail } from '../../features/userSlice';
import { doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import db from '../../firebase';
import loadingImg from '../../assets/gif-loading-icon-16.jpg';

const textInputs = ['name', 'userName', 'location', 'bio'];

const EditProfileModel = ({
  id,
  joined,
  avatar,
  name,
  location,
  bio,
  background,
  userName,
  setShow,
}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handlePreviewMedia = (e, name, setFieldValue) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    try {
      reader.onload = () => {
        if (reader.readyState === 2) {
          setFieldValue(name, reader.result);
        }
      };

      reader.readAsDataURL(file);
    } catch (error) {
      setFieldValue(name, '');
    }
  };

  const uploadImageToCloudinary = async (image) => {
    const url = `https://api.cloudinary.com/v1_1/felixnguyen/image/upload`;

    // Create form data
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'food-recipes-users');

    const res = await fetch(url, {
      method: 'POST',
      body: data,
    });

    // Response media url from cloudinary
    const fileRes = await res.json();
    return fileRes.secure_url;
  };

  const handleSaveEdit = async (user) => {
    const cookies = new Cookies();
    const newUser = { id, joined, ...user };
    console.log(newUser);

    cookies.set('user', JSON.stringify(newUser), {
      path: '/',
      sameSite: true,
    });

    dispatch(setLoginDetail(newUser));
    setIsLoading(false);
    setShow(false);
    await setDoc(doc(db, 'users', id), user);
  };

  return (
    <Container onClick={() => setShow(false)}>
      <Content>
        {isLoading ? (
          <LoadingShape src={loadingImg} alt="" />
        ) : (
          <div onClick={(e) => e.stopPropagation()}>
            <Body>
              <Formik
                initialValues={{
                  background,
                  avatar,
                  name,
                  location,
                  bio,
                  userName,
                }}
                validateOnBlur={false}
                onSubmit={async (values) => {
                  let data = values;
                  setIsLoading(true);

                  if (values.avatar !== avatar) {
                    const avatarUrl = await uploadImageToCloudinary(
                      values.avatar,
                    );
                    data.avatar = avatarUrl;
                  }

                  if (values.background && values.background !== background) {
                    const backgroundUrl = await uploadImageToCloudinary(
                      values.background,
                    );
                    data.background = backgroundUrl;
                  }

                  handleSaveEdit(data);
                }}
              >
                {(props) => (
                  <Form onSubmit={props.handleSubmit}>
                    <Header>
                      <div onClick={() => setShow(false)}>
                        <CgPushChevronLeft />
                      </div>
                      <SubmitButton type="submit">Save</SubmitButton>
                    </Header>

                    <BackgroundUpload>
                      <img src={props.values.background || background} alt="" />
                      <OverLoadUpload title="Add Photo">
                        <label htmlFor="background">
                          <BsCamera />
                          <input
                            type="file"
                            id="background"
                            name="background"
                            accept="image/jpeg,image/png,image/webp"
                            onChange={(e) =>
                              handlePreviewMedia(
                                e,
                                'background',
                                props.setFieldValue,
                              )
                            }
                          />
                        </label>
                      </OverLoadUpload>
                    </BackgroundUpload>
                    <AvatarUpload>
                      <div>
                        <img src={props.values.avatar || avatar} alt="" />

                        <OverLoadUpload title="Add Photo">
                          <label htmlFor="avatar">
                            <BsCamera />
                            <input
                              type="file"
                              id="avatar"
                              name="avatar"
                              accept="image/jpeg,image/png,image/webp"
                              onChange={(e) =>
                                handlePreviewMedia(
                                  e,
                                  'avatar',
                                  props.setFieldValue,
                                )
                              }
                            />
                          </label>
                        </OverLoadUpload>
                      </div>
                    </AvatarUpload>
                    <EditForm>
                      {textInputs.map((item) => (
                        <FieldGroup key={item}>
                          <Field
                            type="text"
                            name={item}
                            placeholder=" "
                            autoComplete="off"
                            value={props.values[item]}
                            onChange={props.handleChange}
                          />
                          <span>
                            Your {item === 'userName' ? 'user name' : item}
                          </span>
                        </FieldGroup>
                      ))}
                    </EditForm>
                  </Form>
                )}
              </Formik>
            </Body>
          </div>
        )}
      </Content>
    </Container>
  );
};

export default EditProfileModel;
