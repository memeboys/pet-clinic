import React from 'react';
import { Link } from 'react-router-dom';

const Client:React.FC = () => (
  <div>
    <h1>Client-Page</h1>
    <Link to="/client/clientPage2">clientPage2</Link>
  </div>
);

export default Client;
