import { Formik, Form, Field } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { AuthRequest } from '../../types/AuthDTO';
import AuthService from '../../services/AuthService';
import './AuthForm.scss';

const AuthForm: React.FC = () => {
  const validationsSchema = yup.object().shape({
    username: yup.string().email('Incorrect email').required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const onSubmit = async (
    data: AuthRequest,
    setErrors: (errors: { username: string; password: string; }) => void,
  ) => {
    AuthService.loginUser(data)
      .then(({ data: resData }) => {
        localStorage.setItem('token', resData.jwtToken);
      })
      .catch((err) => {
        if (err.response.status === 403) {
          setErrors({ username: 'Invalid email or password', password: 'Invalid email or password' });
        }
      });
  };

  return (
    <div className="container">
      <Formik
        initialValues={{ username: '', password: '' }}
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
                    value={values.username}
                    type="text"
                    name="username"
                    placeholder="Email"
                  />
                  {touched.username && errors.username && <span className="input-wrapper__error">{errors.username}</span>}
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
