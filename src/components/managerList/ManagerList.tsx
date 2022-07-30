import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Outlet, NavLink } from 'react-router-dom';
import classes from './ManagerList.module.scss';

const Manager:React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    setTimeout(() => setCategories(['News', 'Medicine']), 500);
  }, []);

  const activeClass = ({ isActive }:{ isActive:boolean }) => (clsx(classes.link, { [classes.active]: isActive }));

  return (
    <div className={classes.manager_page}>
      <aside className={classes.navbar}>
        <header className={classes.list_header}>Категории</header>
        <ul className={classes.menu_list}>
          {categories.map((category) => (
            <li key={category}>
              <NavLink
                to={category}
                className={activeClass}
              >
                {category}
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
