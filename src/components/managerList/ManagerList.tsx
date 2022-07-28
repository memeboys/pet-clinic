import React from 'react';
import clsx from 'clsx';
import { Outlet, NavLink } from 'react-router-dom';
import classes from './ManagerList.module.scss';

const Manager:React.FC = () => (
  <aside className={classes.navbar}>
    <ul className={classes.menu}>
      <li>
        <NavLink
          to="categories"
          className={({ isActive }) => clsx(classes.link, { [classes.active]: isActive })}
        >
          Категории
        </NavLink>
      </li>
      <li>
        <NavLink
          to="news"
          className={({ isActive }) => clsx(classes.link, { [classes.active]: isActive })}
        >
          Новости
        </NavLink>
      </li>
      <li>
        <NavLink
          to="medicine"
          className={({ isActive }) => clsx(classes.link, { [classes.active]: isActive })}
        >
          Лекарства
        </NavLink>
      </li>
    </ul>
    <main className={classes.content}><Outlet /></main>

  </aside>
);

export default Manager;
