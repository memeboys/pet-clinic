import React from 'react';
import PanelList from '../panel-list/PanelList';
import classes from './Main.module.scss';

const Main: React.FC = () => (
  <main className={classes.main}>
    <PanelList />
  </main>
);

export default Main;
