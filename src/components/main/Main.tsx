import React from 'react';
import Footer from '../footer/Footer';
import PanelList from '../panel-list/PanelList';
import SidebarPet from '../sidebar-pet/SidebarPet';
import SidebarInfo from '../sidebar-info/SidebarInfo';
import classes from './Main.module.scss';
import FilterForm, { FilterFormField } from '../filters/Filters';

const Main: React.FC = () => (
  <div className={classes.main_window}>
    <SidebarPet />
    <main className={classes.main}>
      <PanelList />
      <FilterForm initialValues={{ email: '', login: '' }} onChange={(value) => console.log(value)}>
        <FilterFormField type="text" name="email" title="Email" />
        <FilterFormField type="text" name="login" title="Login" />
      </FilterForm>

      <FilterForm initialValues={{ manufacturer: '', isLegal: true }} onChange={(value) => console.log(value)}>
        <FilterFormField type="text" name="manufacturer" title="Manufacturer" />
        <FilterFormField type="checkbox" name="isLegal" title="Is legal" />
      </FilterForm>
      <Footer />
    </main>
    <SidebarInfo />
  </div>
);

export default Main;
