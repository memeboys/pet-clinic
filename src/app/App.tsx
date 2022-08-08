import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegPage from '../pages/reg-page/RegPage';
import AuthPage from '../pages/auth-page/AuthPage';
import CreateNewsPage from '../pages/create-news-page/CreateNewsPage';
import { Header } from '../components/header/Header';
import MainPage from '../pages/main-page/MainPage';
import PrivateRoute from '../components/private-route/PrivateRoute';
import ClientPage from '../pages/client-page/ClientPage';
import ManagerPage from '../pages/manager-page/ManagerPage';
// import DoctorPage from '../pages/doctor-page/DoctorPage';
// import AdminPage from '../pages/admin-page/AdminPage';
import { Role } from '../types/AuthDTO';
import 'antd/dist/antd.css';

const App: FC = () => (
  <Router>
    <Header />
    <div className="main-content-wrapper">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pet/:petId" element={<MainPage />} />
        <Route path="/sign-up" element={<RegPage />} />
        <Route path="/sign-in" element={<AuthPage />} />
        <Route path="client" element={<PrivateRoute role={Role.CLIENT} />}>
          <Route path="clientPage" element={<ClientPage />} />
        </Route>
        <Route path="manager" element={<PrivateRoute role={Role.MANAGER} />}>
          <Route path="managerPage" element={<ManagerPage />} />
        </Route>
        {/* Приватные роуты админа и доктора для разграничения доступа */}
        {/* <Route path="admin" element={<PrivateRoute role={Role.ADMIN} />}>
          <Route path="adminPage" element={<AdminPage />} />
        </Route>
        <Route path="doctor" element={<PrivateRoute role={Role.DOCTOR} />}>
          <Route path="doctorPage" element={<DoctorPage />} />
        </Route>
         */}
        <Route path="/create-news" element={<CreateNewsPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
