import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Collapse } from 'antd';
import { CollapseProps } from 'antd/lib/collapse/Collapse';
import AuthService from '../../services/AuthService';
import { ClientDto } from '../../types/ClientDTO';
import Star_Platinum from '../../assets/images/StarPlatinum.png'; // пока нету картинки питомца
import './AntdStyle.scss';
import classes from './SidebarPet.module.scss';

const SidebarPet: React.FC = () => {
  const { Panel } = Collapse;
  const [clientData, setClientData] = useState<ClientDto | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    AuthService.getCurrentClient()
      .then(({ data }) => {
        setClientData(data);
      });
  }, []);

  const handleChange: CollapseProps['onChange'] = (value) => {
    if (value !== undefined) {
      navigate(`/pet/${value}`);
    }
  };

  function generatePet () {
    return clientData?.pets.map((pet) => (
      <Panel
        className={classes.panel}
        header={pet.name}
        key={pet.id}
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
    <Collapse expandIconPosition="end" className={classes.container} onChange={handleChange} accordion>
      {generatePet()}
    </Collapse>
  );
};

export default SidebarPet;
