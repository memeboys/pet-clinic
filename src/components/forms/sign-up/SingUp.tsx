import { Formik, Form, Field } from 'formik';
import React from 'react';
import * as yup from 'yup';
import AuthService, { UserReg } from '../../../services/AuthService';
import classes from './SignUp.module.scss';

function SignUp (): JSX.Element {
  const validationsSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email address').required('Email is required'),
    firstname: yup.string().required('Firstname is required'),
    lastname: yup.string().required('Lastname is required'),
    password: yup.string().test('minLenght', 'minimum of 5 characters', (val) => `${val}`.length > 4)
      .required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match')
      .test('minLenght', 'minimum of 5 characters', (val) => `${val}`.length > 4).required('Password is required'),
  });

  const onSubmit = (data: UserReg) => {
    AuthService.createNewUser(data);
  };

  return (
    <div className="container">
      <Formik
        initialValues={{
          email: '',
          firstname: '',
          lastname: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={onSubmit}
        validationSchema={validationsSchema}
      >
        {({
          handleChange, handleBlur, values, touched, errors,
        }) => (
          <Form className={classes.form}>
            <div>
              <h4 className={classes.form_title}>Create new account</h4>
              <div className={classes.input_wrapper}>
                <label htmlFor="email">
                  Email adress
                  <Field
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    type="text"
                    name="email"
                    placeholder="Email adress"
                    className={classes.input}
                  />
                  {touched.email && errors.email && <span className={classes.input_wrapper__error}>{errors.email}</span>}
                </label>
              </div>
              <div className={classes.input_wrapper}>
                <label htmlFor="firstname">
                  First name
                  <Field
                    id="firstname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstname}
                    type="text"
                    name="firstname"
                    placeholder="First name"
                    className={classes.input}
                  />
                  {touched.firstname && errors.firstname && (
                  <span className={classes.input_wrapper__error}>
                    {errors.firstname}
                  </span>
                  )}
                </label>
              </div>
              <div className={classes.input_wrapper}>
                <label htmlFor="lastname">
                  Last name
                  <Field
                    id="lastname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastname}
                    type="text"
                    name="lastname"
                    placeholder="Last name"
                    className={classes.input}
                  />
                  {touched.lastname && errors.lastname && (
                  <span className={classes.input_wrapper__error}>
                    {errors.lastname}
                  </span>
                  )}
                </label>
              </div>
              <div className={classes.input_wrapper}>
                <label htmlFor="password">
                  Password
                  <Field
                    id="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={classes.input}
                  />
                  {touched.password && errors.password && <span className={classes.input_wrapper__error}>{errors.password}</span>}
                </label>
              </div>
              <div className={classes.input_wrapper}>
                <label htmlFor="confirmPassword">
                  Confirm password
                  <Field
                    id="confirmPassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    className={classes.input}
                  />
                  {touched.confirmPassword && errors.confirmPassword && (
                  <span className={classes.input_wrapper__error}>
                    {errors.confirmPassword}
                  </span>
                  )}
                </label>
              </div>
              <input type="submit" value="Create" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignUp;
