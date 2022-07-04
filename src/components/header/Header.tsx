import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

interface DataHeader {
  label: string,
  path: string
}
const dataMenu: DataHeader[] = [{
  label: 'Список докторов',
  path: '/doctors',
}, {
  label: 'Список процедур',
  path: '/procedures',
},
{
  label: 'Список того',
  path: '/path1',
},
{
  label: 'О чем-нибудь',
  path: '/path2',
},
{
  label: 'Список сосисок',
  path: '/path2',
},
{
  label: 'Контакты',
  path: '/contacts',
},
{
  label: 'О нас',
  path: '/about',
},
{
  label: 'Форум',
  path: '/forum',
}];

const Header:FC = () => (
  <header className={styles.header}>
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        {dataMenu.map(({ label, path }) => (
          <li key={label} className={styles.menu__item}>
            <Link to={path}>{label}</Link>
          </li>
        )) }
      </ul>
    </nav>
  </header>
);

export { Header };
