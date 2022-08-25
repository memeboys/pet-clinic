import React from 'react';
import clsx from 'clsx';
import { Outlet, NavLink } from 'react-router-dom';
import NewsService from '../../services/manager/NewsService';
import classes from './Manager.module.scss';

const Manager: React.FC = () => {
  const activeClass = ({ isActive }: { isActive: boolean }) => (clsx(classes.link, { [classes.active]: isActive }));

  const categories = [
    { name: 'Новости', pathName: 'news' },
    { name: 'Лекарства', pathName: 'medicine' },
    { name: 'Контакты', pathName: 'contacts' },
  ];

  const publishNews = (id: number) => {
    NewsService.publishNews([id]).then(() => {
      // Здесь мы изменяем поле published у нужной новости в массиве
    });
  };

  const unpublishNews = (id: number) => {
    NewsService.unpublishNews([id]).then(() => {
      // Здесь мы изменяем поле published у нужной новости в массиве
    });
  };

  const onTogglePublishNews = (event: React.ChangeEvent<HTMLInputElement>, id: number) => (
    event.target.checked ? publishNews(id) : unpublishNews(id)
  );

  console.log(() => onTogglePublishNews);

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
