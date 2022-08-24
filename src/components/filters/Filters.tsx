import {
  Field, Form, Formik, useFormikContext,
} from 'formik';
import { debounce } from 'lodash';
import React, { useMemo } from 'react';

const SubmitOnChangeToken: React.FC = () => {
  const { values, submitForm } = useFormikContext();
  const debounceSubmit = useMemo(() => debounce(submitForm, 1000), [submitForm]);
  React.useEffect(() => {
    debounceSubmit();
  }, [values, debounceSubmit]);

  return null;
};

export interface FilterFormProps<T> {
  initialValues: T;
  onChange: (value: T) => void;
  children: React.ReactNode;
}

export default function FilterForm<T> ({ initialValues, onChange, children }: FilterFormProps<T>): JSX.Element {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onChange}
    >
      {() => (
        <Form>
          {children}
          <SubmitOnChangeToken />
        </Form>
      )}
    </Formik>
  );
}

export interface FilterFormFieldProps {
  readonly title: string;
  readonly type: string;
  readonly name: string;
}

export const FilterFormField: React.FC<FilterFormFieldProps> = ({ title, type, name }) => (
  <label htmlFor={name}>
    {title}
    <Field type={type} name={name} id={name} />
  </label>
);
