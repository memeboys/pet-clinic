import React from 'react';
import clsx from 'clsx';
import { Outlet, NavLink } from 'react-router-dom';
import classes from './Manager.module.scss';

const Manager:React.FC = () => {
  const activeClass = ({ isActive }:{ isActive:boolean }) => (clsx(classes.link, { [classes.active]: isActive }));

  const categories = [
    { name: 'Новости', pathName: 'news' },
    { name: 'Лекарства', pathName: 'medicine' },
    { name: 'Контакты', pathName: 'contacts' },
  ];

  return (
    <div className={classes.manager_page}>
      <aside className={classes.navbar}>
        <header className={classes.list_header}>Категории</header>
        <ul className={classes.menu_list}>
          {categories.map((category) => (
            <li key={category.name}>
              <NavLink
                to={category.pathName}
                className={activeClass}
              >
                {category.name}
              </NavLink>
            </li>
          ))}

        </ul>
      </aside>
      <main className={classes.manager_content}><Outlet /></main>

    </div>

  );
};

export default Manager;
