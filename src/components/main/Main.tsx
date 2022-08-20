import React from 'react';
import Footer from '../footer/Footer';
import PanelList from '../panel-list/PanelList';
import SidebarPet from '../sidebar-pet/SidebarPet';
import SidebarInfo from '../sidebar-info/SidebarInfo';
import classes from './Main.module.scss';
import EditPet from "../forms/edit-pet/EditPet";
import { PetType, PetSize, PetGender } from "../../types/PetsDTO";

const Main: React.FC = () => (
  <div className={classes.main_window}>
    <SidebarPet />
    <main className={classes.main}>
      <PanelList />
      <EditPet pet={{
        id: 1,
        name: 'Барсик',
        avatar: 'https://avatars.mds.yandex.net/get-pdb/1605843/c9f9f8f5-f8c1-4b8e-b9c8-f8f8f8f8f8f8/s1200?webp=false',
        birthDay: '2020-01-01',
        notificationCount: 0,
        petType: PetType.CAT,
        breed: "Белый бордюр",
        color: "Белый",
        description: "Белый бордюр котик",
        weight: 5,
        size: PetSize.SMALL,
        gender: PetGender.FEMALE
      }} />
      <Footer />
    </main>
    <SidebarInfo />
  </div>
);

export default Main;
