import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App () {
  return (
    <Router>
      <h2>Header</h2>
      <Routes>
        <Route path="/" element={<h2>Main</h2>} />
      </Routes>
      <h2>Footer</h2>
    </Router>
  );
}

export default App;
