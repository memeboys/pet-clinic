import React, { useEffect, useState } from 'react';
import { Collapse } from 'antd';
import PetService from '../../services/petService';
import AuthService from '../../services/AuthService';
import './PanelList.scss';

const PanelList: React.FC = () => {
  const { Panel } = Collapse;
  const [petData, setPetData] = useState({
    id: 0,
    name: '',
    avatar: '',
    birthDay: '',
    notificationCount: 0,
    petType: '',
  });
  const [clientData, setClientData] = useState({
    firstname: '',
    lastname: '',
    avatar: '',
    email: '',
    pets: [{}],
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState({ pet: true, client: true });
  const id = '1'; // Позже id должен быть в props

  useEffect(() => {
    setLoading({ pet: true, client: true });
    PetService.getPet(id)
      .then(({ data }) => {
        setPetData(data);
        setLoading((prevState) => ({ ...prevState, pet: false }));
      });

    AuthService.getCurrentClient()
      .then(({ data }) => {
        setClientData(data);
        setLoading((prevState) => ({ ...prevState, client: false }));
      });
  }, []);

  return (
    <Collapse defaultActiveKey={['1']}>
      <Panel className="panel" showArrow={false} header="Подробная информация" key="1">
        <div className="panel__container">
          <div className="panel__info">
            <h3 className="panel__title">Информация о питомце:</h3>
            <ul className="panel__list">
              <li>
                <b>Кличка:</b>
                {' '}
                {petData.name}
              </li>
              <li>
                <b>Дата рождения:</b>
                {' '}
                {petData.birthDay}
              </li>
              <li>
                <b>Вид:</b>
                {' '}
                {petData.petType}
              </li>
            </ul>
          </div>
          <div className="panel__info">
            <h3 className="panel__title">Информация о хозяине:</h3>
            <ul className="panel__list">
              <li>
                <b>Имя:</b>
                {' '}
                {clientData.firstname}
              </li>
              <li>
                <b>Фамилия:</b>
                {' '}
                {clientData.lastname}
              </li>
              <li>
                <b>Email:</b>
                {' '}
                {clientData.email}
              </li>
            </ul>
          </div>
        </div>
      </Panel>
    </Collapse>
  );
};

export default PanelList;
