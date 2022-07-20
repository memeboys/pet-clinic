import React from 'react';
import classes from './SidebarInfo.module.scss';
import SidebarBlock from './SidebarBlock';

const SidebarInfo: React.FC = () => {
  const header = {
    news: 'Новости',
    discounts: 'Скидки!',
    stocks: 'Акции!',
  };

  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est...`;

  return (
    <div className={classes.container}>
      <SidebarBlock header={header.news} text={text} />
      <SidebarBlock header={header.discounts} text={text} />
      <SidebarBlock header={header.stocks} text={text} />
    </div>
  );
};

export default SidebarInfo;
