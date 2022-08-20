import { Formik, Form, Field } from 'formik';
import React from 'react';
import * as yup from 'yup';
import classes from './EditPet.module.scss';
import PetService from '../../../services/PetServices';
import { PetDTO, PetGender, PetSize, PetType } from '../../../types/PetsDTO';

export interface EditPetProps  {
  pet: PetDTO;
}
const urlValid = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;
const birthdayValid = /^(?:(?:(?:0?[13578]|1[02])(\/|-|\.)31)\1|(?:(?:0?[1,3-9]|1[0-2])(\/|-|\.)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:0?2(\/|-|\.)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/|-|\.)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

const EditPet: React.FC<EditPetProps> = ({ pet }) => {

  const validationSchema = yup.object().shape({
    name: yup.string().required('Поле обязательно для заполнения'),
    weight: yup.number().required('Поле обязательно для заполнения').positive('Вес не можем быть отрицательным'),
    breed: yup.string().required('Поле обязательно для заполнения'),
    color: yup.string().required('Поле обязательно для заполнения'),
    description: yup.string().required('Поле обязательно для заполнения'),
    avatar: yup.string().matches(urlValid, 'Enter correct url!').required('Поле обязательно для заполнения'),
    birthDay: yup.string().matches(birthdayValid, 'Enter correct date in format DD.MM.YYYY').required('Поле обязательно для заполнения'),
  });

  const onSubmit = async (
    data:PetDTO,
  ) => {
    PetService.editPet('id', data);
  };

  return (
    <div className={classes.container}>
      <Formik
        initialValues={pet}
        onSubmit={(values) => { onSubmit(values); }}
        validationSchema={validationSchema}
      >
      {({
        handleChange, handleBlur, values, isValid, dirty, touched, errors,
      }) => (
        <Form className={classes.form}>
          <div>
            <h4 className={classes.form_title}>Редактировать питомца</h4>
            <div className={classes.input_wrapper}>
              <label htmlFor="name">
                Имя
                <Field
                  id="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  type="text"
                  name="name"
                  className={classes.input}
                />
                {touched.name && errors.name && <span className={classes.input_wrapper__error}>{errors.name}</span>}
              </label>
            </div>
            <div className={classes.input_wrapper}>
              <label htmlFor="weight">
                Вес
                <Field
                  id="weight"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.weight}
                  name="weight"
                  className={classes.input}
                />
                {touched.weight && errors.weight && <span className={classes.input_wrapper__error}>{errors.weight}</span>}
              </label>
            </div>
            <div className={classes.input_wrapper}>
              <label htmlFor="breed">
                Порода
                <Field
                  id="breed"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.breed}
                  name="breed"
                  className={classes.input}
                />
                {touched.breed && errors.breed && <span className={classes.input_wrapper__error}>{errors.breed}</span>}
              </label>
            </div>
            <div className={classes.input_wrapper}>
              <label htmlFor="color">
                Окрас
                <Field
                  id="color"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.color}
                  name="color"
                  className={classes.input}
                />
                {touched.color && errors.color && <span className={classes.input_wrapper__error}>{errors.color}</span>}
              </label>
            </div>
            <div className={classes.input_wrapper}>
              <label htmlFor="description">
                Описание
                <Field
                  id="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  name="description"
                  className={classes.input}
                />
                {touched.description && errors.description && <span className={classes.input_wrapper__error}>{errors.description}</span>}
              </label>
            </div>
            <div className={classes.input_wrapper}>
              <label htmlFor="avatar">
                Фотография
                <Field
                  id="avatar"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.avatar}
                  name="avatar"
                  className={classes.input}
                />
                {touched.avatar && errors.avatar && <span className={classes.input_wrapper__error}>{errors.avatar}</span>}
              </label>
            </div>
            <div className={classes.input_wrapper}>
              <label htmlFor="birthDay">
                Дата рождения
                <Field
                  id="birthDay"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.birthDay}
                  name="birthDay"
                  className={classes.input}
                />
                {touched.birthDay && errors.birthDay && <span className={classes.input_wrapper__error}>{errors.birthDay}</span>}
              </label>
            </div>
            <div className={classes.input_wrapper}>
            <label htmlFor='petType'>
              Вид
              <Field 
                id="petType"
                as="select"
                onChange={handleChange}
                onBlur={handleBlur}
                name="petType" 
                className={classes.input} 
              >
                <option value={PetType.CAT}>Cat</option>
                <option value={PetType.DOG}>Dog</option>
              </Field>
              {touched.petType && errors.petType && <span className={classes.input_wrapper__error}>{errors.petType}</span>}
            </label>
          </div>
          <div className={classes.input_wrapper}>
            <label htmlFor='gender'>
              Пол
              <Field 
                id="gender"
                as="select"
                onChange={handleChange}
                onBlur={handleBlur}
                name="gender" 
                className={classes.input} 
              >
                <option value={PetGender.MALE}>Мужской</option>
                <option value={PetGender.FEMALE}>Женский</option>
                <option value={PetGender.OTHER}>Другой</option>
              </Field>
              {touched.gender && errors.gender && <span className={classes.input_wrapper__error}>{errors.gender}</span>}
            </label>
          </div>
          <div className={classes.input_wrapper}>
            <label htmlFor='size'>
              Размер
              <Field 
                id="size"
                as="select"
                onChange={handleChange}
                onBlur={handleBlur}
                name="size" 
                className={classes.input} 
              >
                <option value={PetSize.SMALL}>SMALL</option>
              </Field>
              {touched.gender && errors.gender && <span className={classes.input_wrapper__error}>{errors.gender}</span>}
            </label>
          </div>
            <button
              disabled={!isValid && !dirty}
              type="submit"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
  );
}
export default EditPet;