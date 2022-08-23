import React from 'react';
import Footer from '../footer/Footer';
import PanelList from '../panel-list/PanelList';
import SidebarPet from '../sidebar-pet/SidebarPet';
import SidebarInfo from '../sidebar-info/SidebarInfo';
import classes from './Main.module.scss';

const Main: React.FC = () => (
  <div className={classes.main_window}>
    <SidebarPet />
    <main className={classes.main}>
      <PanelList />
      <Footer />
    </main>
    <SidebarInfo />
  </div>
);

export default Main;
