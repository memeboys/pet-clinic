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
  return (
    <Formik
      initialValues={pet}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <Field name="name" type="text" />

        <Field name="weight" type='text' />

        <Field name="breed" type='text' />

        <Field name="color" type='text' />

        <Field name="description" type='text' />

        <Field name="avatar" type="text" />

        <Field name="birthDay" type="text" />

        <Field name="petType" as="select">
          <option value={PetType.CAT}>Cat</option>
          <option value={PetType.DOG}>Dog</option>
        </Field>

        <Field name="gender" as="select">
          <option value={PetGender.MALE}>Мужской</option>
          <option value={PetGender.FEMALE}>Женский</option>
          <option value={PetGender.OTHER}>Другой</option>
        </Field>

        <Field name="size" as="select">
          <option value={PetSize.SMALL}>SMALL</option>
        </Field>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}


export default EditPet;