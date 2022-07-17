import React, { useEffect, useState } from 'react';
import { Collapse } from 'antd';
import './AntdStyle.scss';
import classes from './SidebarPet.module.scss';
import PetService from '../../services/PetServices';
import { PetDTO } from '../../types/PetsDTO';
import Star_Platinum from '../../assets/images/StarPlatinum.png'; // пока нету картинки питомца

const SidebarPet: React.FC = () => {
  const { Panel } = Collapse;
  const [petData, setPetData] = useState<PetDTO | null>(null);

  const id = '1'; // Позже id должен быть в props

  useEffect(() => {
    PetService.getPet(id)
      .then(({ data }) => {
        setPetData(data);
      });
  }, []);

  const genExtra = () => (
    <img src={Star_Platinum} alt="img" className={classes.img} />
  );

  return (
    <Collapse className={classes.container} expandIconPosition="end">
      <Panel className={classes.panel} header={petData?.name} key="1" extra={genExtra()}>
        <div>
          <p>
            Тут будет какой-то функционал, наверное
          </p>
        </div>
      </Panel>
      <Panel className={classes.panel} header="Killer Queen" key="2" extra={genExtra()}>
        <div>
          <p>
            а тут будет что то классное, наверное
          </p>
        </div>
      </Panel>
      <Panel className={classes.panel} header="King Crimson" key="3" extra={genExtra()}>
        <div>
          <p>
            ту нибудет ничего, наверное
          </p>
        </div>
      </Panel>
      <Panel className={classes.panel} header="Crazy Diamond" key="4" extra={genExtra()}>
        <div>
          <p>
            а тут будет много много много много много много много много много много много много много много
            много много много много много много много много много много
            много много много много много много много много много много много много много много много много
            много много много много много много много много, наверное
          </p>
        </div>
      </Panel>
    </Collapse>
  );
};

export default SidebarPet;
