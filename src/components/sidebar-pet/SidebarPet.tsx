import React, { useEffect, useState } from 'react';
import { Collapse } from 'antd';
import './AntdStyle.scss';
import { Link, useNavigate } from 'react-router-dom';
import classes from './SidebarPet.module.scss';
import AuthService from '../../services/AuthService';
import { ClientDto } from '../../types/ClientDTO';
import Star_Platinum from '../../assets/images/StarPlatinum.png'; // пока нету картинки питомца

const SidebarPet: React.FC = () => {
  let i = 1;
  const { Panel } = Collapse;
  const [clientData, setClientData] = useState<ClientDto | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    AuthService.getCurrentClient()
      .then(({ data }) => {
        setClientData(data);
      });
  }, []);

  const habdleChange = (event:any) => {
    if (event) {
      navigate(`/pet/${event}`);
    }
  };

  function generatePet () {
    return clientData?.pets.map((pet) => (
      <Panel
        className={classes.panel}
        header={pet.name}
        // eslint-disable-next-line no-plusplus
        key={i++}
        extra={<img src={Star_Platinum /* pet.avatar */} alt="avatar" className={classes.img} />}
      >
        <div>
          <p>
            <Link to={`/pet/${pet.id}`}> Тут будет какой-то функционал, наверное </Link>
          </p>
        </div>
      </Panel>
    ));
  }

  return (
    <Collapse expandIconPosition="end" className={classes.container} onChange={habdleChange} accordion>
      {generatePet()}
    </Collapse>
  );
};

export default SidebarPet;
