import React from 'react';
import classes from './Footer.module.scss';

const Footer: React.FC = () => (
  <footer className={classes.footer}>
    <div className={classes.footer__btns}>
      <button type="button" className={classes.footer__btn}>Записаться на приём</button>
      <button type="button" className={classes.footer__btn}>Сгенерировать QR-адресник</button>
    </div>
  </footer>
);

export default Footer;
