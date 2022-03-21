import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import { AiOutlineCamera, AiOutlineClose } from 'react-icons/ai';
import { RiAddFill, RiSubtractFill } from 'react-icons/ri';
import SelectInput from '../../SelectInput';
import TitleBar from '../../TitleBar';
import {
  ActionButton,
  ButtonGroup,
  CloseButton,
  Container,
  ErrorMess,
  FieldGroup,
  ImageInput,
  IngredientItem,
  NofiModel,
  NutritionItem,
  PreviewImage,
  StepItem,
  SubmitButton,
  TitleForm,
} from './CreateRecipeStyles';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import db from '../../../firebase';
import loadingImg from '../../../assets/gif-loading-icon-16.jpg';

const categories = [
  'breakfast',
  'dinner',
  'drinks',
  'dessert',
  'lunch',
  'side dish',
  'snack',
  'starter',
];

const validate = (values) => {
  const errors = {};

  // valid thumbnail
  if (!values.thumbnail) {
    errors.thumbnail = 'Thumbnail is required';
  }

  // valid name
  if (!values.name) {
    errors.name = 'Name is required';
  }

  // valid desc
  if (!values.desc) {
    errors.desc = 'Description is required';
  }

  // valid ingredients
  if (!values.ingredients[0]) {
    errors.ingredients = 'Ingredients is required';
  }

  // valid steps
  if (
    !values.steps[0].title &&
    !values.steps[0].image &&
    !values.steps[0].desc
  ) {
    errors.steps = 'Steps is required';
  }

  return errors;
};

const CreateRecipe = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    const cookies = new Cookies();
    const userCookie = cookies.get('user');

    if (!userCookie) {
      navigate('/login');
    }
  }, [navigate]);

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

  const handleAutoHeight = (e) => {
    e.target.style.height = 'auto';
    const height = e.target.scrollHeight;
    e.target.style.height = `${height}px`;
  };

  const handleChangeNumberInput = (e, setFieldValue) => {
    const value = e.target.value;

    if (value < 0) {
      setFieldValue(e.target.name, 0);
    } else if (value > 100) {
      setFieldValue(e.target.name, 100);
    } else {
      setFieldValue(e.target.name, value);
    }
  };

  const uploadImageToCloudinary = async (image) => {
    const url = `https://api.cloudinary.com/v1_1/felixnguyen/image/upload`;

    // Create form data
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'food-recipes-recipes');

    const res = await fetch(url, {
      method: 'POST',
      body: data,
    });

    // Response media url from cloudinary
    const fileRes = await res.json();
    return fileRes.secure_url;
  };

  const handleCreateRecipe = async (data) => {
    const submitData = {
      ...data,
      authorId: user.id,
      createdAt: Date.now(),
      id: '',
    };
    const newRecipe = await addDoc(collection(db, 'recipes'), submitData);
    await updateDoc(doc(db, 'recipes', newRecipe.id), {
      id: newRecipe.id,
    });

    setIsLoading(false);
  };

  return (
    <>
      <TitleBar mainTitle="Create Recipe" pageList={['create recipe']} />
      <Container>
        <Formik
          initialValues={{
            thumbnail: '',
            name: '',
            category: 'breakfast',
            desc: '',
            ingredients: [''],
            steps: [
              {
                title: '',
                image: '',
                desc: '',
              },
            ],
            nutrition: [
              {
                name: 'Calories',
                percents: '0',
                quantity: '0',
              },
              {
                name: 'Fat',
                percents: '0',
                quantity: '0',
              },
              {
                name: 'Sodium',
                percents: '0',
                quantity: '0',
              },
              {
                name: 'Sugars',
                percents: '0',
                quantity: '0',
              },
            ],
          }}
          validate={validate}
          validateOnBlur={true}
          onSubmit={async (values) => {
            setIsLoading(true);
            setIsSubmit(true);
            let data = { ...values };

            // upload thumbnail
            if (data.thumbnail) {
              const thumbnailURL = await uploadImageToCloudinary(
                data.thumbnail,
              );
              data.thumbnail = thumbnailURL;
            }

            // upload image steps
            if (data.steps.length > 0) {
              data.steps = await Promise.all(
                data.steps.map(async (step) => {
                  if (step.image) {
                    const imageURL = await uploadImageToCloudinary(step.image);
                    step.image = imageURL;
                  }
                  return step;
                }),
              );
            }

            // formart nutrition
            data.nutrition = data.nutrition.map((nutrient) => {
              const { name, percents, quantity } = nutrient;
              return {
                name,
                percents: parseInt(percents),
                quantity: quantity + 'g',
              };
            });

            // handle submit
            handleCreateRecipe(data);
          }}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit} noValidate>
              <TitleForm>Create Recipe</TitleForm>
              {isSubmit && (
                <NofiModel>
                  <div>
                    {!isLoading ? (
                      <>
                        <h3>Successfully </h3>
                        <span>
                          The food recipe was created. Are you want to create a
                          new one?
                        </span>
                        <div>
                          <SubmitButton
                            type="button"
                            onClick={() => {
                              setIsSubmit(false);
                              props.resetForm();
                            }}
                          >
                            Continue
                          </SubmitButton>
                          <SubmitButton type="button">
                            <Link to="/">Back to home</Link>
                          </SubmitButton>
                        </div>
                      </>
                    ) : (
                      <img src={loadingImg} alt="" />
                    )}
                  </div>
                </NofiModel>
              )}
              <FieldGroup>
                <label>Thumbnail</label>
                {props.values.thumbnail && (
                  <PreviewImage>
                    <img src={props.values.thumbnail} alt="" />
                    <CloseButton
                      onClick={() => props.setFieldValue('thumbnail', '')}
                    >
                      <AiOutlineClose />
                    </CloseButton>
                  </PreviewImage>
                )}
                <Field type="hidden" name="thumbnail" />
                <ImageInput>
                  <input
                    type="file"
                    id="thumbnail"
                    accept="image/jpeg,image/png,image/webp"
                    onChange={(e) =>
                      handlePreviewMedia(e, 'thumbnail', props.setFieldValue)
                    }
                  />
                  <label htmlFor="thumbnail">
                    <AiOutlineCamera />
                    <span>
                      {props.values.thumbnail ? 'Change image' : 'Upload image'}
                    </span>
                  </label>
                </ImageInput>
                <ErrorMessage component={ErrorMess} name="thumbnail" />
              </FieldGroup>
              <FieldGroup>
                <label>Name</label>
                <Field
                  type="text"
                  name="name"
                  autoComplete="off"
                  placeholder="Enter recipe name..."
                />
                <ErrorMessage component={ErrorMess} name="name" />
              </FieldGroup>
              <FieldGroup>
                <label>Description</label>
                <Field
                  as="textarea"
                  name="desc"
                  onInput={(e) => handleAutoHeight(e)}
                  placeholder="Enter recipe description..."
                />
                <ErrorMessage component={ErrorMess} name="desc" />
              </FieldGroup>
              <FieldGroup>
                <label>Category</label>
                <Field type="hidden" name="category" />
                <SelectInput
                  options={categories}
                  name="category"
                  setFieldValue={props.setFieldValue}
                />
              </FieldGroup>
              <FieldGroup>
                <label>Ingredients</label>
                <FieldArray name="ingredients">
                  {(fieldArrayProps) => {
                    const { ingredients } = fieldArrayProps.form.values;
                    const { push, remove } = fieldArrayProps;

                    return (
                      <>
                        {ingredients.map((_, index) => {
                          return (
                            <IngredientItem key={index}>
                              <Field
                                type="text"
                                name={`ingredients[${index}]`}
                                autoComplete="off"
                                placeholder="Enter a ingredient..."
                              />
                              <ActionButton
                                type="button"
                                onClick={() => push('')}
                              >
                                <RiAddFill />
                              </ActionButton>
                              {ingredients.length > 1 && (
                                <ActionButton
                                  type="button"
                                  onClick={() => remove(index)}
                                >
                                  <RiSubtractFill />
                                </ActionButton>
                              )}
                            </IngredientItem>
                          );
                        })}
                      </>
                    );
                  }}
                </FieldArray>
                <ErrorMessage component={ErrorMess} name="ingredients" />
              </FieldGroup>
              <FieldGroup>
                <label>Steps</label>
                <FieldArray name="steps">
                  {(fieldArrayProps) => {
                    const { steps } = fieldArrayProps.form.values;
                    const { push, remove } = fieldArrayProps;
                    const { setFieldValue } = fieldArrayProps.form;

                    return (
                      <>
                        {steps.map((step, index) => (
                          <StepItem key={index}>
                            <label>Step {index + 1}</label>
                            <Field
                              type="text"
                              name={`steps[${index}].title`}
                              placeholder="Enter your title..."
                              onChange={(e) =>
                                setFieldValue(e.target.name, e.target.value)
                              }
                            />

                            {step.image && (
                              <PreviewImage>
                                <img src={step.image} alt="" />
                                <CloseButton
                                  onClick={() =>
                                    setFieldValue(`steps[${index}].image`, '')
                                  }
                                >
                                  <AiOutlineClose />
                                </CloseButton>
                              </PreviewImage>
                            )}

                            <Field
                              type="hidden"
                              name={`steps[${index}].image`}
                            />
                            <ImageInput>
                              <input
                                type="file"
                                id={`steps[${index}].image-holder`}
                                accept="image/jpeg,image/png,image/webp"
                                onChange={(e) =>
                                  handlePreviewMedia(
                                    e,
                                    `steps[${index}].image`,
                                    setFieldValue,
                                  )
                                }
                              />
                              <label htmlFor={`steps[${index}].image-holder`}>
                                <AiOutlineCamera />
                                <span>
                                  {step.image ? 'Change image' : 'Upload image'}
                                </span>
                              </label>
                            </ImageInput>
                            <Field
                              as="textarea"
                              name={`steps[${index}].desc`}
                              placeholder="Enter step desc..."
                              onInput={(e) => handleAutoHeight(e)}
                            />
                            <ActionButton
                              type="button"
                              onClick={() =>
                                push({
                                  title: '',
                                  image: '',
                                  desc: '',
                                })
                              }
                            >
                              <RiAddFill />
                            </ActionButton>
                            {steps.length > 1 && (
                              <ActionButton
                                type="button"
                                onClick={() => remove(index)}
                              >
                                <RiSubtractFill />
                              </ActionButton>
                            )}
                          </StepItem>
                        ))}
                      </>
                    );
                  }}
                </FieldArray>
                <ErrorMessage component={ErrorMess} name="steps" />
              </FieldGroup>
              <FieldGroup>
                <label>Nutritions</label>
                {props.values.nutrition.map((nutri, index) => (
                  <NutritionItem key={nutri.name}>
                    <label>{nutri.name}</label>
                    <div>
                      <div>
                        <Field
                          type="number"
                          step={0.1}
                          min={0}
                          max={100}
                          name={`nutrition[${index}].percents`}
                          placeholder="Enter percents..."
                          onChange={(e) =>
                            handleChangeNumberInput(e, props.setFieldValue)
                          }
                        />
                        <span>%</span>
                      </div>
                      <div>
                        <Field
                          type="number"
                          step={0.1}
                          min={0}
                          max={100}
                          name={`nutrition[${index}].quantity`}
                          placeholder="Enter quantity..."
                        />
                        <span>{index === 0 ? 'kcal' : 'mg'}</span>
                      </div>
                    </div>
                  </NutritionItem>
                ))}
              </FieldGroup>
              <ButtonGroup>
                <SubmitButton type="submit">Create</SubmitButton>
                <SubmitButton type="button" onClick={() => props.resetForm()}>
                  Clear
                </SubmitButton>
              </ButtonGroup>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default CreateRecipe;
