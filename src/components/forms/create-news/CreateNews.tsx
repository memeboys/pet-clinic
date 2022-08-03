import { Formik, Form, Field } from 'formik';
import React from 'react';
import * as yup from 'yup';
import NewsService from '../../../services/NewsServiсe';
import { NewsDTO } from '../../../types/NewsDTO';
import classes from './СreateNews.module.scss';

function СreateNews (): JSX.Element {
  const validationsSchema = yup.object().shape({
    title: yup.string().required('Title is required'),
    content: yup.string().required('Content is required'),
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
          title: '', content: '', type: 'UPDATING', isImportant: false, endTime: '2022-07-16T21:01:46.729Z',
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
                <label htmlFor="title">
                  Title
                  <Field
                    id="title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                    type="text"
                    name="title"
                    className={classes.input}
                  />
                  {touched.title && errors.title && <span className={classes.input_wrapper__error}>{errors.title}</span>}
                </label>
              </div>
              <div className={classes.input_wrapper}>
                <label htmlFor="content">
                  Content
                  <textarea
                    id="content"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.content}
                    name="content"
                    className={classes.input}
                  />
                  {touched.content && errors.content && <span className={classes.input_wrapper__error}>{errors.content}</span>}
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
