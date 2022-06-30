/* eslint-disable @typescript-eslint/no-unused-vars */
import { Formik, Form, Field } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';
import AuthService from '../../services/AuthService';
import './AuthForm.scss';

const AuthForm: React.FC = () => {
  const validationsSchema = yup.object().shape({
    email: yup.string().email('Incorrect email').required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const onSubmit = async (
    data: { email: string, password: string },
    setErrors: (errors: { email: string; password: string; }) => void,
  ) => {
    AuthService.loginUser(data.email, data.password)
      .then(({ data: resData }) => {
        localStorage.setItem('token', resData.jwtToken);
      })
      .catch((err) => {
        if (err.response.status === 403) {
          setErrors({ email: 'Invalid email or password', password: 'Invalid email or password' });
        }
      });
  };

  return (
    <div className="container">
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, { setErrors }) => {
          onSubmit(values, setErrors);
        }}
        validationSchema={validationsSchema}
      >
        {({
          handleChange, handleBlur, values, isValid, dirty, touched, errors,
        }) => (
          <Form className="auth-form">
            <div className="inner-wrapper">
              <h2 className="auth-form__title">Sign-in</h2>
              <div className="input-wrapper">
                <label htmlFor="email">
                  Email
                  <Field
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    type="text"
                    name="email"
                    placeholder="Email"
                  />
                  {touched.email && errors.email && <span className="input-wrapper__error">{errors.email}</span>}
                </label>
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">
                  Password
                  <Field
                    placeholder="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    id="password"
                    type="password"
                    name="password"
                  />
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
};

export default AuthForm;
