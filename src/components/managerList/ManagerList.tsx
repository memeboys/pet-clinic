import React from 'react';
import clsx from 'clsx';
import { Outlet, NavLink } from 'react-router-dom';
import classes from './ManagerList.module.scss';

const Manager:React.FC = () => {
  const activeClass = ({ isActive }:{ isActive:boolean }) => (clsx(classes.link, { [classes.active]: isActive }));

  return (
    <div className={classes.manager_page}>
      <aside className={classes.navbar}>
        <header className={classes.list_header}>Категории</header>
        <ul className={classes.menu_list}>

          <li>
            <NavLink
              to="news"
              className={activeClass}
            >
              Новости
            </NavLink>
          </li>
          <li>
            <NavLink
              to="medicines"
              className={activeClass}
            >
              Лекарства
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contacts"
              className={activeClass}
            >
              Контакты
            </NavLink>
          </li>
        </ul>
      </aside>
      <main className={classes.manager_content}><Outlet /></main>

    </div>

  );
};

export default Manager;
