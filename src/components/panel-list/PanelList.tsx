import React, { useEffect, useState } from 'react';
import { Collapse } from 'antd';
import { useParams } from 'react-router-dom';
import PetService from '../../services/client/PetService';
import AuthService from '../../services/AuthService';
import { ClientDto } from '../../types/ClientDTO';
import classes from './PanelList.module.scss';
import './AntdStyle.scss';
import { PetDTO } from '../../types/PetsDTO';

const PanelList: React.FC = () => {
  const { Panel } = Collapse;
  const [petData, setPetData] = useState<PetDTO | null>(null);
  const [clientData, setClientData] = useState<ClientDto | null>(null);
  const { petId } = useParams();

  useEffect(() => {
    PetService.getPet(petId || '1')
      .then(({ data }) => {
        setPetData(data);
      });

    AuthService.getCurrentClient()
      .then(({ data }) => {
        setClientData(data);
      });
  }, [petId]);

  const clientInfo = (
    <ul className={classes.panel__list}>
      <li>
        <b>Имя:</b>
        {' '}
        {clientData?.firstname}
      </li>
      <li>
        <b>Фамилия:</b>
        {' '}
        {clientData?.lastname}
      </li>
      <li>
        <b>Email:</b>
        {' '}
        {clientData?.email}
      </li>
    </ul>
  );

  const petInfo = (
    <ul className={classes.panel__list}>
      <li>
        <b>Кличка:</b>
        {' '}
        {petData?.name}
      </li>
      <li>
        <b>Дата рождения:</b>
        {' '}
        {petData?.birthDay}
      </li>
      <li>
        <b>Вид:</b>
        {' '}
        {petData?.petType}
      </li>
    </ul>
  );

  return (
    <Collapse>
      <Panel className={classes.panel} showArrow={false} header="Подробная информация" key="1">
        <div className={classes.panel__container}>
          <div className={classes.panel__info}>
            <h3 className={classes.panel__title}>Информация о питомце:</h3>
            {petData === null ? <span>loading...</span> : petInfo}
          </div>
          <div className={classes.panel__info}>
            <h3 className={classes.panel__title}>Информация о хозяине:</h3>
            {petData === null ? <span>loading...</span> : clientInfo}
          </div>
        </div>
      </Panel>
      <Panel className={classes.panel} showArrow={false} header="Медосмотры" key="2">
        <div className={classes.panel__container}>
          <p>
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Harum minima earum dignissimos sequi aspernatur,
            iure beatae ut sint non laboriosam asperiores pariatur quidem, alias enim, dolor labore tenetur. Tenetur, fuga.
          </p>
        </div>
      </Panel>
      <Panel className={classes.panel} showArrow={false} header="Вакцины против бешенства" key="3">
        <div className={classes.panel__container}>
          <p>
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Harum minima earum dignissimos sequi aspernatur,
            iure beatae ut sint non laboriosam asperiores pariatur quidem, alias enim, dolor labore tenetur. Tenetur, fuga.
          </p>
        </div>
      </Panel>
      <Panel className={classes.panel} showArrow={false} header="Другие вакцинации" key="4">
        <div className={classes.panel__container}>
          <p>
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Harum minima earum dignissimos sequi aspernatur,
            iure beatae ut sint non laboriosam asperiores pariatur quidem, alias enim, dolor labore tenetur. Tenetur, fuga.
          </p>
        </div>
      </Panel>
      <Panel className={classes.panel} showArrow={false} header="Дегельминтизация" key="5">
        <div className={classes.panel__container}>
          <p>
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Harum minima earum dignissimos sequi aspernatur,
            iure beatae ut sint non laboriosam asperiores pariatur quidem, alias enim, dolor labore tenetur. Tenetur, fuga.
          </p>
        </div>
      </Panel>
      <Panel className={classes.panel} showArrow={false} header="Обработка от внешних паразитов" key="6">
        <div className={classes.panel__container}>
          <p>
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Harum minima earum dignissimos sequi aspernatur,
            iure beatae ut sint non laboriosam asperiores pariatur quidem, alias enim, dolor labore tenetur. Tenetur, fuga.
          </p>
        </div>
      </Panel>
      <Panel className={classes.panel} showArrow={false} header="Записи о репродукции" key="7">
        <div className={classes.panel__container}>
          <p>
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Harum minima earum dignissimos sequi aspernatur,
            iure beatae ut sint non laboriosam asperiores pariatur quidem, alias enim, dolor labore tenetur. Tenetur, fuga.
          </p>
        </div>
      </Panel>
    </Collapse>
  );
};

export default PanelList;
