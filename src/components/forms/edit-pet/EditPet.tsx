import { Formik, Form, Field } from 'formik';
import React from 'react';
import * as yup from 'yup';
import classes from './EditPet.module.scss';
import PetService from '../../../services/PetServices';
import { PetDTO, PetGender, PetSize, PetType } from '../../../types/PetsDTO';

export interface EditPetProps  {
  pet: PetDTO;
}

const EditPet: React.FC<EditPetProps> = ({ pet }) => {

  const validationSchema = yup.object().shape({
    name: yup.string().required('Поле обязательно для заполнения'),
    weight: yup.string().required('Поле обязательно для заполнения'),
    breed: yup.string().required('Поле обязательно для заполнения'),
    color: yup.string().required('Поле обязательно для заполнения'),
    description: yup.string().required('Поле обязательно для заполнения'),
    avatar: yup.string().required('Поле обязательно для заполнения'),
    birthDay: yup.string().required('Поле обязательно для заполнения'),
  });

  return (
    <div className={classes.container}>
      <Formik
        initialValues={pet}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <Form className={classes.form}>
          <div className={classes.input_wrapper}>
            <label className={classes.input} htmlFor='name'>
              Имя
              <Field name="name" type="text" />
            </label>
          </div>
          <div className={classes.input_wrapper}>
            <label className={classes.input} htmlFor='weight'>
              Вес
              <Field name="weight" type='text' />
            </label>
          </div>
          <div className={classes.input_wrapper}>
            <label className={classes.input} htmlFor='breed'>
              Порода
              <Field name="breed" type='text' />
            </label>
          </div>
          <div className={classes.input_wrapper}>
            <label className={classes.input} htmlFor='color'>
              Окрас
              <Field name="color" type='text' />
            </label>
          </div>
          <div className={classes.input_wrapper}>
            <label className={classes.input} htmlFor='description'>
              Описание
              <Field name="description" type='text' />
            </label>
          </div>
          <div className={classes.input_wrapper}>
            <label className={classes.input} htmlFor='avatar'>
              Фотография
              <Field name="avatar" type="text" />
            </label>
          </div>
          <div className={classes.input_wrapper}>
            <label className={classes.input} htmlFor='birthDay'>
              Дата рождения
              <Field name="birthDay" type="text" />
            </label>
          </div>
          <div className={classes.input_wrapper}>
            <label className={classes.input} htmlFor='petType'>
              Вид
              <Field name="petType" as="select">
                <option value={PetType.CAT}>Cat</option>
                <option value={PetType.DOG}>Dog</option>
              </Field>
            </label>
          </div>
          <div className={classes.input_wrapper}>
            <label className={classes.input} htmlFor='gender'>
              Пол
              <Field name="gender" as="select">
                <option value={PetGender.MALE}>Мужской</option>
                <option value={PetGender.FEMALE}>Женский</option>
                <option value={PetGender.OTHER}>Другой</option>
              </Field>
            </label>
          </div>
          <div className={classes.input_wrapper}>
            <label className={classes.input} htmlFor='size'>
              Размер
              <Field name="size" as="select">
                <option value={PetSize.SMALL}>SMALL</option>
              </Field>
            </label>
          </div>
          <button type="submit">Отправить</button>
        </Form>
      </Formik>
    </div>
  );
}


export default EditPet;