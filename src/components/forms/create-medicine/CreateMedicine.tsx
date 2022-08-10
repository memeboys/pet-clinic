import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { Alert } from 'antd';
import MedicineService from '../../../services/manager/MedicineService';
import { MedicineData } from '../../../types/Manager/MedicineDTO';
import classes from './CreateMedicine.module.scss';

const CreateMedicine :React.FC = () => {
  const [medicine, setMedicine] = useState<MedicineData | null>(null);
  const [error, setError] = useState<boolean>(false);

  const validationsSchema = yup.object().shape({
    manufactureName: yup.string().required('Manufacture Name is required'),
    name: yup.string().required(' Name is required'),
    iconUrl: yup.string().required(' Icon is required'),
    description: yup.string().required(' Description is required'),
  });

  const onSubmit = async (
    data:MedicineData,
  ) => {
    setError(false);
    MedicineService.createMedicine(data)
      .then((result) => {
        setMedicine(result.data);
      })
      .catch((err) => {
        if (err) {
          setError(true);
        }
      });
  };

  return (
    <div className={classes.container}>
      <Formik
        initialValues={{
          manufactureName: '', name: '', iconUrl: '', description: '',
        }}
        onSubmit={(values) => { onSubmit(values); }}
        validationSchema={validationsSchema}
      >
        {({
          handleChange, handleBlur, values, isValid, dirty, touched, errors,
        }) => (
          <Form className={classes.form}>
            <div>
              <h4 className={classes.form_title}>Create new medicine</h4>
              {!!medicine && <Alert message="Success " type="success" showIcon closable />}
              {error && (
              <Alert
                message="Error"
                description="Something went wrong"
                type="error"
                showIcon
                onClose={() => setError(false)}
              />
              )}
              <div className={classes.input_wrapper}>
                <label htmlFor="manufactureName">
                  Manufacture Name
                  <Field
                    id="manufactureName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.manufactureName}
                    type="text"
                    placeholder="Manufacture name"
                    name="manufactureName"
                    className={classes.input}
                  />
                  {touched.manufactureName && errors.manufactureName
                  && <span className={classes.input_wrapper__error}>{errors.manufactureName}</span>}
                </label>
              </div>
              <div className={classes.input_wrapper}>
                <label htmlFor="name">
                  Name
                  <Field
                    id="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    type="text"
                    name="name"
                    placeholder="Name"
                    className={classes.input}
                  />
                  {touched.name && errors.name && <span className={classes.input_wrapper__error}>{errors.name}</span>}
                </label>
              </div>
              <div className={classes.input_wrapper}>
                <label htmlFor="icon">
                  Icon
                  <Field
                    id="iconUrl"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.iconUrl}
                    type="text"
                    name="iconUrl"
                    placeholder="Icon address"
                    className={classes.input}
                  />
                  {touched.iconUrl && errors.iconUrl && <span className={classes.input_wrapper__error}>{errors.iconUrl}</span>}
                </label>
              </div>
              <div className={classes.input_wrapper}>
                <label htmlFor="description">
                  Description
                  <textarea
                    id="description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                    name="description"
                    placeholder="Description"
                    className={classes.input}
                  />
                  {touched.description && errors.description
                  && <span className={classes.input_wrapper__error}>{errors.description}</span>}
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
};
export default CreateMedicine;
