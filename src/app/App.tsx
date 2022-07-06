import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegPage from '../pages/reg-page/RegPage';
import AuthPage from '../pages/auth-page/AuthPage';
import { Header } from '../components/header/Header';

const App:FC = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<h2>Main</h2>} />
      <Route path="/sign-up" element={<RegPage />} />
      <Route path="/sign-in" element={<AuthPage />} />
    </Routes>
    <h2>Footer</h2>
  </Router>
);

export default App;
