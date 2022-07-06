import React from 'react';
import Footer from '../footer/Footer';
import PanelList from '../panel-list/PanelList';
import classes from './Main.module.scss';

const Main: React.FC = () => (
  <>
    <main className={classes.main}>
      <PanelList />
    </main>
    <Footer />
  </>
);

export default Main;
