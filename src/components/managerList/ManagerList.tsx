import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import classes from './ManagerList.module.scss';

const Manager:React.FC = () => (
  <div className={classes.wrapper}>
    <ul className={classes.menu}>
      <li className={classes.menu__item}><Link to="/manager" className={classes.link}>Категории</Link></li>
      <li className={classes.menu__item}><Link to="news" className={classes.link}>Новости</Link></li>
      <li className={classes.menu__item}><Link to="medicine" className={classes.link}>Лекарства</Link></li>
    </ul>
    <main className={classes.content}><Outlet /></main>

  </div>

);

export default Manager;
