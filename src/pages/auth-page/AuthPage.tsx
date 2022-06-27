/* eslint-disable @typescript-eslint/no-unused-vars */
import { Formik, Form, Field } from 'formik';
import React from 'react';
import * as yup from 'yup';
import './AuthPage.scss';

function AuthPage () {
  const validationsSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  });

  const onSubmit = (data: { username: string, password: string }) => {
    console.log(data);
  };

  return (
    <div className="container">
      <Formik initialValues={{ username: '', password: '' }} onSubmit={onSubmit} validationSchema={validationsSchema}>
        {({
          handleChange, handleBlur, values, isValid, dirty, touched, errors,
        }) => (
          <Form className="auth-form">
            <div className="inner-wrapper">
              <h2 className="auth-form__title">Sign-in</h2>
              <div className="input-wrapper">
                <label htmlFor="username">
                  Username
                  <Field
                    id="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    type="text"
                    name="username"
                  />
                  {touched.username && errors.username && <span className="input-wrapper__error">{errors.username}</span>}
                </label>
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">
                  Password
                  <Field id="password" type="text" name="password" />
                  {touched.password && errors.password && <span className="input-wrapper__error">{errors.password}</span>}
                </label>
              </div>
              <button
                className="auth-form__btn"
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

export default AuthPage;
