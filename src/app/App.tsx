import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    </Router>
  );
}

export default App;
