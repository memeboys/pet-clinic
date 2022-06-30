import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from '../pages/auth-page/AuthPage';
import MainPage from '../pages/main-page/MainPage';
import 'antd/dist/antd.css';

function App () {
  return (
    <Router>
      <h2>Header</h2>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth-page" element={<AuthPage />} />
      </Routes>
      <h2>Footer</h2>
    </Router>
  );
}

export default App;
