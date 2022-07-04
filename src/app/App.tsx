import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegPage from '../pages/reg-page/RegPage';
import AuthPage from '../pages/auth-page/AuthPage';
import MainPage from '../pages/main-page/MainPage';
import Footer from '../components/footer/Footer';
import 'antd/dist/antd.css';

function App () {
  return (
    <Router>
      <h2>Header</h2>
      <div className="main-content-wrapper">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/auth-page" element={<AuthPage />} />
        </Routes>
        <Footer />
      </div>
      <Routes>
        <Route path="/" element={<h2>Main</h2>} />
        <Route path="/sign-up" element={<RegPage />} />
        <Route path="/auth-page" element={<AuthPage />} />
      </Routes>
      <h2>Footer</h2>
    </Router>
  );
}

export default App;
