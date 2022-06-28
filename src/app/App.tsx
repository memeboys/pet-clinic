import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from '../components/forms/sign-up';

function App () {
  return (
    <Router>
      <h2>Header</h2>
      <Routes>
        <Route path="/" element={<h2>Main</h2>} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <h2>Footer</h2>
    </Router>
  );
}

export default App;
