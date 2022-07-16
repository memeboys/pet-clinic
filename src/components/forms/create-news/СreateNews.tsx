import { Formik, Form, Field } from 'formik';
import React from 'react';
import * as yup from 'yup';
import NewsService from '../../../services/NewsServise';
import { NewsDTO } from '../../../types/NewsDTO';
import classes from './СreateNews.module.scss';

function СreateNews (): JSX.Element {
  const validationsSchema = yup.object().shape({
    Title: yup.string().required('Title is required'),
    Content: yup.string().required('Content is required'),
  });

  const onSubmit = async (
    data:NewsDTO,
  ) => {
    NewsService.createNews(data);
  };

  return (
    <div className={classes.container}>
      <Formik
        initialValues={{
          Title: '', Content: '', Type: 'UPDATING', isImportant: false, EndTime: '2022-07-16T21:01:46.729Z',
        }}
        onSubmit={(values) => { onSubmit(values); }}
        validationSchema={validationsSchema}
      >
        {({
          handleChange, handleBlur, values, isValid, dirty, touched, errors,
        }) => (
          <Form className={classes.form}>
            <div>
              <h4 className={classes.form_title}>Create new news</h4>
              <div className={classes.input_wrapper}>
                <label htmlFor="Title">
                  Title
                  <Field
                    id="Title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Title}
                    type="text"
                    name="Title"
                    className={classes.input}
                  />
                  {touched.Title && errors.Title && <span className={classes.input_wrapper__error}>{errors.Title}</span>}
                </label>
              </div>
              <div className={classes.input_wrapper}>
                <label htmlFor="Content">
                  Content
                  <textarea
                    id="Content"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Content}
                    name="Content"
                    className={classes.input}
                  />
                  {touched.Content && errors.Content && <span className={classes.input_wrapper__error}>{errors.Content}</span>}
                </label>
              </div>
              <div>
                <label htmlFor="isImportant">
                  <Field id="isImportant" type="checkbox" name="isImportant" className={classes.checkbox} />
                  is this important news?
                  {}
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

export default СreateNews;
