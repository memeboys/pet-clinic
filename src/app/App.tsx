import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegPage from '../pages/reg-page/RegPage';
import AuthPage from '../pages/auth-page/AuthPage';
import SidebarInfoPage from '../pages/sidebar-info/SidebarInfo';
import { Header } from '../components/header/Header';
import MainPage from '../pages/main-page/MainPage';
import 'antd/dist/antd.css';

const App: FC = () => (
  <Router>
    <Header />
    <div className="main-content-wrapper">
      <Routes>
        <Route path="/" element={<SidebarInfoPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/sign-up" element={<RegPage />} />
        <Route path="/sign-in" element={<AuthPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
