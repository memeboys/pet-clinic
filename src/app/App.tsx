import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegPage from '../pages/reg-page/RegPage';

function App () {
  return (
    <Router>
      <h2>Header</h2>
      <Routes>
        <Route path="/" element={<h2>Main</h2>} />
        <Route path="/sign-up" element={<RegPage />} />
      </Routes>
      <h2>Footer</h2>
    </Router>
  );
}

export default App;
