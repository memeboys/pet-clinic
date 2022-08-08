import React, { useEffect, useState } from 'react';
import {
  Outlet, Navigate, useLocation,
} from 'react-router-dom';
import 'antd/dist/antd.css';
import { Spin } from 'antd';
import classes from './PrivateRoute.module.scss';
import { Role } from '../../types/AuthDTO';

// import AuthService from '../../services/AuthService'; //импортировать нужный сервис

const PrivateRoute = ({
  role,
}: {
  role: Role;
}) => {
  const [incomeRole, setIncomeRole] = useState<string | undefined>('');
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setIncomeRole(role);
    }, 1000);
    // Когда появится нужный запрос раскомментировать и пофиксить
    // AuthService.getCurrentClient() // Сюда нужно будет добавить правильный запрос на получение роли
    //   .then(({ data }) => {
    //     if (data.role!==role) {// Случай, если роли не сходятся
    //       setIncomeRole(data.role); // Уточнить поле, в которое придут данные
    //       AuthService.logOutUser() // Запрос на разлогинивание юзера
    //         .then(() => localStorage.clear()); //Очистка токена
    //     }
    //     setIncomeRole(data.role); //Если роли сходятся
    //   });
  }, [role]);

  return (
    <div>
      {!incomeRole && (<Spin className={classes.spinner} size="large" />)}
      {(incomeRole && (role === incomeRole)) && <Outlet />}
      {(incomeRole && (role !== incomeRole)) && <Navigate to="/sign-in" state={{ from: location, role }} />}
    </div>
  );
};

export default PrivateRoute;
