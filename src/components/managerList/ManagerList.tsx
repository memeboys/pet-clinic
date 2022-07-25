import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import classes from './ManagerList.module.scss';

const Manager:React.FC = () => {
  const activeClass = ({ isActive }:{ isActive:boolean }) => (

    isActive
      ? `${classes.link} ${classes.active}`
      : `${classes.link}`
  );

  return (
    <aside className={classes.navbar}>
      <ul className={classes.menu}>
        <li>
          <NavLink to="categories" className={activeClass}>Категории</NavLink>
        </li>
        <li>
          <NavLink to="news" className={activeClass}>Новости</NavLink>
        </li>
        <li>
          <NavLink to="medicine" className={activeClass}>Лекарства</NavLink>
        </li>
      </ul>
      <main className={classes.content}><Outlet /></main>

    </aside>
  );
};

export default Manager;
