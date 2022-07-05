import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegPage from '../pages/reg-page/RegPage';
import AuthPage from '../pages/auth-page/AuthPage';
import SidebarInfoPage from '../pages/sidebar-info/SidebarInfo';

function App () {
  return (
    <Router>
      <h2>Header</h2>
      <Routes>
        <Route path="/" element={<SidebarInfoPage />} />
        <Route path="/sign-up" element={<RegPage />} />
        <Route path="/auth-page" element={<AuthPage />} />
      </Routes>
      <h2>Footer</h2>
    </Router>
  );
}

export default App;
