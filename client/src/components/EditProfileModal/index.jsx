import {
  AvatarUpload,
  BackgroundUpload,
  Body,
  Container,
  Content,
  EditForm,
  Header,
  OverLoadUpload,
} from './EditProfileModalStyles';
import { CgPushChevronLeft } from 'react-icons/cg';
import { BsCamera } from 'react-icons/bs';
import { Formik, Form, Field } from 'formik';
import { FieldGroup } from '../ValidInput/ValidInputStyles';
import { SubmitButton } from '../SignIn/SignInStyles';

const EditProfileModel = ({ user, setShow }) => {
  return (
    <Container onClick={() => setShow(false)}>
      <Content>
        <div onClick={(e) => e.stopPropagation()}>
          <Header>
            <div onClick={() => setShow(false)}>
              <CgPushChevronLeft />
            </div>
            <SubmitButton>Save</SubmitButton>
          </Header>
          <Body>
            <Formik
              initialValues={{
                background: '',
                avatar: '',
                name: '',
              }}
              validateOnBlur={false}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {(props) => (
                <Form onSubmit={props.handleSubmit}>
                  <BackgroundUpload>
                    <img src={user.background} alt="" />
                    <OverLoadUpload title="Add Photo">
                      <label htmlFor="background">
                        <BsCamera />
                        <input
                          type="file"
                          id="background"
                          name="background"
                          accept="image/jpeg,image/png,image/webp"
                        />
                      </label>
                    </OverLoadUpload>
                  </BackgroundUpload>
                  <AvatarUpload>
                    <div>
                      <img src={user.avatar} alt="" />

                      <OverLoadUpload title="Add Photo">
                        <label htmlFor="avatar">
                          <BsCamera />
                          <input
                            type="file"
                            id="avatar"
                            name="avatar"
                            accept="image/jpeg,image/png,image/webp"
                          />
                        </label>
                      </OverLoadUpload>
                    </div>
                  </AvatarUpload>
                  <EditForm>
                    <FieldGroup>
                      <Field
                        type="text"
                        name="name"
                        placeholder=" "
                        autoComplete="off"
                      />
                      <span>Your Name</span>
                    </FieldGroup>
                    <FieldGroup>
                      <Field
                        type="text"
                        name="location"
                        placeholder=" "
                        autoComplete="off"
                      />
                      <span>Your Location</span>
                    </FieldGroup>
                    <FieldGroup>
                      <Field
                        type="text"
                        name="bio"
                        placeholder=" "
                        autoComplete="off"
                      />
                      <span>Your Bio</span>
                    </FieldGroup>
                  </EditForm>
                </Form>
              )}
            </Formik>
          </Body>
        </div>{' '}
      </Content>
    </Container>
  );
};

export default EditProfileModel;
