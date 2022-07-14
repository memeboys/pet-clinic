import React, { useState } from 'react';
import { ModalQR } from '../modal/Modal';
import classes from './Footer.module.scss';

const Footer: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <footer className={classes.footer}>
        <div className={classes.footer__btns}>
          <button type="button" className={classes.footer__btn}>Записаться на приём</button>
          <button
            type="button"
            className={classes.footer__btn}
            onClick={showModal}
          >
            Сгенерировать QR-адресник
          </button>
        </div>
      </footer>
      {isModalVisible ? <ModalQR active={isModalVisible} onClose={closeModal} /> : null}
    </>
  );
};

export default Footer;
