import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegPage from '../pages/reg-page/RegPage';
import AuthPage from '../pages/auth-page/AuthPage';
import { Header } from '../components/header/Header';
import MainPage from '../pages/main-page/MainPage';
import Footer from '../components/footer/Footer';
import 'antd/dist/antd.css';

const App: FC = () => (
  <Router>
    <Header />
    <div className="main-content-wrapper">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sign-up" element={<RegPage />} />
        <Route path="/auth-page" element={<AuthPage />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
