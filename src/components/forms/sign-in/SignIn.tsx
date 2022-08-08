import { Formik, Form, Field } from 'formik';
import { useNavigate, useLocation, Location } from 'react-router-dom';
import React from 'react';
import * as yup from 'yup';
import { AuthRequest, Role } from '../../../types/AuthDTO';
import AuthService from '../../../services/AuthService';
import classes from './SignIn.module.scss';

const SignIn: React.FC = () => {
  const location = useLocation() as unknown as LocationProps;
  const navigate = useNavigate();

  const { role: fromRole = null, from: { pathname: fromPage = undefined } } = location.state || { from: {} };

  const validationsSchema = yup.object().shape({
    username: yup.string().email('Incorrect email').required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const redirectToRolePage = (role:Role, redirectPath:string | undefined, fromRedirectRole:Role | null) => {
    const navigation = {
      [Role.ADMIN]: '/admin/adminPage',
      [Role.DOCTOR]: '/doctor/doctorPage',
      [Role.CLIENT]: '/client/clientPage',
      [Role.MANAGER]: '/manager/managerPage',
      [Role.UNVERIFIED_CLIENT]: '/',
    };
    if (fromRedirectRole && redirectPath) {
      if (redirectPath && fromRedirectRole === role) {
        navigate(redirectPath);
      }
    }
    navigate(navigation[role]);
  };

  const onSubmit = async (
    data: AuthRequest,
    setErrors: (errors: { username: string; password: string; }) => void,
  ) => {
    AuthService.loginUser(data)
      .then(({ data: resData }) => {
        localStorage.setItem('token', resData.jwtToken);
        redirectToRolePage(resData.role, fromPage, fromRole);
      })
      .catch((err) => {
        if (err.response.status === 403) {
          setErrors({ username: 'Invalid email or password', password: 'Invalid email or password' });
        }
      });
  };

  return (
    <div className={classes.container}>
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
          <Form className={classes.form}>
            <div>
              <h4 className={classes.form_title}>Sign-in</h4>
              <div className={classes.input_wrapper}>
                <label htmlFor="email">
                  Email adress
                  <Field
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    type="text"
                    name="username"
                    placeholder="Email adress"
                    className={classes.input}
                  />
                  {touched.username && errors.username && <span className={classes.input_wrapper__error}>{errors.username}</span>}
                </label>
              </div>
              <div className={classes.input_wrapper}>
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
                    className={classes.input}
                  />
                  {touched.password && errors.password && <span className={classes.input_wrapper__error}>{errors.password}</span>}
                </label>
              </div>
              <button
                className={classes.auth_form__btn}
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

type LocationProps = {
  state: {
    from: Location ;
    role:Role | null
  };
};
export default SignIn;
