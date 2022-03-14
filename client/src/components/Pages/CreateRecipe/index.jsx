import { Field, Form, Formik, FieldArray } from 'formik';
import { useState } from 'react';
import SelectInput from '../../SelectInput';
import TitleBar from '../../TitleBar';
import {
  Container,
  TitleForm,
  FieldGroup,
  IngredientItem,
  ActionButton,
  StepItem,
  PreviewImage,
  CloseButton,
  ImageInput,
  NutritionItem,
} from './CreateRecipeStyles';
import { RiSubtractFill, RiAddFill } from 'react-icons/ri';
import { AiOutlineClose, AiOutlineCamera } from 'react-icons/ai';

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

const nutritions = ['Calories', 'Fat', 'Sodium', 'Sugars'];

const CreateRecipe = () => {
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

  return (
    <>
      <TitleBar mainTitle="Create Recipe" pageList={['create recipe']} />
      <Container>
        <Formik
          initialValues={{
            name: '',
            category: '',
            descripton: '',
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
                percents: 0,
                quantity: '0',
              },
            ],
          }}
          onSubmit={() => {}}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit} noValidate>
              <TitleForm>Create Recipe</TitleForm>
              <FieldGroup>
                <label>Name</label>
                <Field type="text" name="name" autoComplete="off" />
              </FieldGroup>
              <FieldGroup>
                <label>Desciption</label>
                <Field
                  as="textarea"
                  name="descripton"
                  onInput={(e) => handleAutoHeight(e)}
                />
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
                                id="placeholder-img"
                                accept="image/jpeg,image/png,image/webp"
                                onChange={(e) =>
                                  handlePreviewMedia(
                                    e,
                                    `steps[${index}].image`,
                                    setFieldValue,
                                  )
                                }
                              />
                              <label htmlFor="placeholder-img">
                                <AiOutlineCamera />
                                <span>
                                  {step.image ? 'Change image' : 'Upload image'}
                                </span>
                              </label>
                            </ImageInput>
                            <Field
                              as="textarea"
                              name={`steps[${index}].desc`}
                              placeholder="Enter your descripton..."
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
              </FieldGroup>
              <FieldGroup>
                <label>Nutritions</label>
                {props.values.nutrition.map((nutri, index) => (
                  <NutritionItem key={nutri.name}>
                    <label>{nutri.name}</label>
                    <div>
                      <div>
                        <Field name={`nutritions[${index}].percents`} />
                        <span>%</span>
                      </div>
                      <div>
                        <Field name={`nutritions[${index}].quantity`} />
                        <span>mg</span>
                      </div>
                    </div>
                  </NutritionItem>
                ))}
              </FieldGroup>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default CreateRecipe;
