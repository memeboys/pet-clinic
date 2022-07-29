import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegPage from '../pages/reg-page/RegPage';
import AuthPage from '../pages/auth-page/AuthPage';
import { Header } from '../components/header/Header';
import MainPage from '../pages/main-page/MainPage';
import ManagerPage from '../pages/manager-page/ManagerPage';
import 'antd/dist/antd.css';

const App: FC = () => (
  <Router>
    <Header />
    <div className="main-content-wrapper">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sign-up" element={<RegPage />} />
        <Route path="/sign-in" element={<AuthPage />} />
        <Route path="manager/*" element={<ManagerPage />}>
          <Route index element={<h3>Главная страница менеджера</h3>} />
          <Route path="categories" element={<h3>Категории</h3>} />
          <Route path="News" element={<h3>Новости</h3>} />
          <Route path="Medicine" element={<h3>Лекарства</h3>} />
        </Route>
      </Routes>
    </div>
  </Router>
);

export default App;
