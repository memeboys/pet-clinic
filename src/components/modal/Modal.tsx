import React, { useState } from 'react';
import {
  Formik, Form, Field,
} from 'formik';
import * as yup from 'yup';
import { Modal } from 'antd';
import { PetContactDto } from '../../types/PetContactDTO';

import styles from './Modal.module.scss';
import PetContactQrCode from '../../services/PetContactQrCode';
import { ModalProps } from '../../types/ModalProps';

const ModalQR = ({ active, onClose }: ModalProps): JSX.Element => {
  const [qrCode, setQrCode] = useState('');
  const id = 1; // TODO:Изменить как будет роут на id из него
  const initialValues = {
    ownerName: '',
    address: '',
    phone: 0,
  };

  const validationsSchema = yup.object().shape({
    ownerName: yup.string().required('Поле обязательно к заполнению'),
    address: yup.string().required('Поле обязательно к заполнению'),
    phone: yup.number().required('Поле обязательно к заполнению'),
  });

  const onSubmit = async (data: PetContactDto) => {
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
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => () => { setQrCode(''); }, [active]);

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
          <h4>Ваш QR-адресник</h4>
          <img src={`${qrCode}`} alt="qrcode" />
        </div>
      ) : null}

    </Modal>
  );
};

export { ModalQR };
