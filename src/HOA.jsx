import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './HOA/MainLayout';

function HOA() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

export default HOA;