import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import classes from './ManagerList.module.scss';

const Manager:React.FC = () =>

// const activeStyle = ( isActive ) =>  isActive ? {classes.active} : ''

  (
    <aside className={classes.navbar}>
      <ul className={classes.menu}>
        <li><NavLink to="/" className={classes.link}> Категории</NavLink></li>
        <li><NavLink to="news" className={classes.link}>Новости</NavLink></li>
        <li><NavLink to="medicine" className={classes.link}>Лекарства</NavLink></li>
        {/* <li><NavLink to="news" className="link">Лекарства</NavLink></li>
      <li><NavLink to="medicine" className="link">Лекарства</NavLink></li>
      <li><NavLink to="news" className="link">Лекарства</NavLink></li>
      <li><NavLink to="medicine" className="link">Лекарства</NavLink></li> */}
      </ul>
      <main className="content"><Outlet /></main>

    </aside>
  );
export default Manager;
