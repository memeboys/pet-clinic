import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from '../pages/auth-page/AuthPage';

const App:FC = () => (
  <Router>
    <h2>Header</h2>
    <Routes>
      <Route path="/" element={<h2>Main</h2>} />
      <Route path="/auth-page" element={<AuthPage />} />
    </Routes>
    <h2>Footer</h2>
  </Router>
);

export default App;
