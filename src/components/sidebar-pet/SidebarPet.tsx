import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Collapse, Row, Col, Space, Button, Dropdown,
} from 'antd';
import { CollapseProps } from 'antd/lib/collapse/Collapse';
import { EditOutlined, DeleteOutlined, InfoCircleFilled } from '@ant-design/icons';
import AuthService from '../../services/AuthService';
import { ClientDto } from '../../types/ClientDTO';
import addBtnIcon from '../../assets/icons/plus-svgrepo-com.svg';
import Star_Platinum from '../../assets/images/StarPlatinum.png'; // пока нету картинки питомца
import './AntdStyle.scss';
import classes from './SidebarPet.module.scss';
import PetServices from '../../services/PetServices';
import { PetDTO } from '../../types/PetsDTO';

interface DeletePetProps {
  onDelete: () => void;
}

const DeletePet: React.FC<DeletePetProps> = ({ onDelete }) => (
  <div className={classes.deletePet}>
    <Row>
      <InfoCircleFilled />
      <p>Are you sure to delete this pet?</p>
    </Row>
    <Row justify="end">
      <Space>
        <Button size="small">No</Button>
        <Button type="primary" size="small" onClick={onDelete}>
          Yes
        </Button>
      </Space>
    </Row>
  </div>
);

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

  const handlePetDelete = (pet: PetDTO) => {
    PetServices.deletePet(pet.id)
      .then(() => {
        if (!clientData) return;
        setClientData({
          ...clientData,
          pets: clientData.pets.filter((currentPet) => currentPet.id !== pet.id),
        });
      });
  };

  function generatePet () {
    return clientData?.pets.map((pet) => (
      <Panel
        className={classes.panel}
        header={pet.name}
        key={pet.id}
        extra={<img src={Star_Platinum /* pet.avatar */} alt="avatar" className={classes.img} />}
      >
        <Row justify="center">
          <Col>
            <Space>
              <Button type="primary">
                Редактировать
                <EditOutlined />
              </Button>
              <Dropdown
                overlay={<DeletePet onDelete={() => handlePetDelete(pet)} />}
                trigger={['click']}
                placement="bottomLeft"
                arrow
              >
                <Button type="primary">
                  Удалить
                  <DeleteOutlined />
                </Button>
              </Dropdown>
            </Space>
          </Col>
        </Row>
      </Panel>
    ));
  }

  return (
    <Collapse expandIconPosition="end" className={classes.container} onChange={handleChange} accordion>
      <div className={classes.add}>
        <h3>Ваши питомцы</h3>
        <button className={classes.add__btn} type="button">
          <img src={addBtnIcon} alt="кнопка добавить" />
        </button>
      </div>
      {generatePet()}
    </Collapse>
  );
};

export default SidebarPet;
