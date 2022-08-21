import React from 'react';
import Footer from '../footer/Footer';
import FilterForm, { FilterFormField } from '../forms/filters/FilterForm';
import PanelList from '../panel-list/PanelList';
import SidebarInfo from '../sidebar-info/SidebarInfo';
import SidebarPet from '../sidebar-pet/SidebarPet';
import classes from './Main.module.scss';

const Main: React.FC = () => (
  <div className={classes.main_window}>
    <SidebarPet />
    <main className={classes.main}>
      <PanelList />
      <FilterForm initialValues={{ email: "", login: "" }} onChange={(value) => console.log(value)}>
        <FilterFormField type="text" name="email" label="Email" />
        <FilterFormField type="text" name="login" label="Login" />
      </FilterForm>

      <FilterForm initialValues={{ manufacturer: "", isLegal: true }} onChange={(value) => console.log(value)}>
        <FilterFormField type="text" name="manufacturer" label="Manufacturer" />
        <FilterFormField type="checkbox" name="isLegal" label="Is legal" />
      </FilterForm>
      <Footer />
    </main>
    <SidebarInfo />
  </div>
);

export default Main;
