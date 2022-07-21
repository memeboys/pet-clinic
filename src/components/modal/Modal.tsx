import React, { useState } from 'react';
import {
  Formik, Form, Field,
} from 'formik';
import * as yup from 'yup';
import { Modal, Spin } from 'antd';
import { PetContactDto } from '../../types/PetContactDTO';

import styles from './Modal.module.scss';
import PetContactQrCode from '../../services/PetContactQrCode';

interface ModalProps {
  active: boolean;
  onClose: () => void;
}

const ModalQR = ({ active, onClose }: ModalProps): JSX.Element => {
  const [qrCode, setQrCode] = useState('');
  const [loading, setLoading] = useState(false);
  const id = 1; // TODO:Изменить как будет роут на id из него
  const initialValues = {
    ownerName: '',
    address: '',
    phone: '',
  };
  const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  const validationsSchema = yup.object().shape({
    ownerName: yup.string().required('Field is required'),
    address: yup.string().required('Field is required'),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Field is required'),
  });

  const onSubmit = async (data: PetContactDto) => {
    setLoading(true);
    const { phone } = data;
    const newData = { ...data, phone: +phone };
    try {
      const response = await PetContactQrCode.createPetContact(id, newData);

      if (response.status === 200) {
        PetContactQrCode.encodeQrCode(id).then((res) => {
          const blob = new Blob(
            [res.data],
            { type: res.headers['content-type'] },
          );
          const image = URL.createObjectURL(blob);

          setQrCode(image);
          setLoading(false);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal visible={active} footer={null} onCancel={onClose}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationsSchema}>
        {({
          handleChange, handleBlur, values, touched, errors,
        }) => (
          <Form className={styles.form}>
            <div>
              <h4 className={styles.form_title}>Создание QR-адресника</h4>
              <div className={styles.input_wrapper}>
                <label htmlFor="ownerName">
                  Владелец
                  <Field
                    id="ownerName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.ownerName}
                    type="text"
                    name="ownerName"
                    placeholder="Введите имя владельца"
                    className={styles.input}
                  />
                  {touched.ownerName && errors.ownerName
                  && <span className={styles.input_wrapper__error}>{errors.ownerName}</span>}
                </label>
              </div>
              <div className={styles.input_wrapper}>
                <label htmlFor="address">
                  Адрес проживания питомца
                  <Field
                    id="address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                    type="text"
                    name="address"
                    placeholder="Введите адрес проживания питомца"
                    className={styles.input}
                  />
                  {touched.address && errors.address && (
                  <span className={styles.input_wrapper__error}>
                    {errors.address}
                  </span>
                  )}
                </label>
              </div>
              <div className={styles.input_wrapper}>
                <label htmlFor="phone">
                  Номер телефона владельца
                  <Field
                    id="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    type="tel"
                    name="phone"
                    placeholder="Введите номер телефона владельца"
                    className={styles.input}
                  />
                  {touched.phone && errors.phone && (
                  <span className={styles.input_wrapper__error}>
                    {errors.phone}
                  </span>
                  )}
                </label>
              </div>
              <input type="submit" value="Создать" />
            </div>
          </Form>
        )}
      </Formik>
      {qrCode ? (
        <div className={styles['code-wrapper']}>

          {loading ? <Spin size="large" /> : (
            <div>
              <h4>Ваш QR-адресник</h4>
              <img src={`${qrCode}`} alt="qrcode" />
            </div>
          )}
        </div>
      ) : null}

    </Modal>
  );
};

export { ModalQR };
