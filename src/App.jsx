import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/utils/ScrollToTop';
import Operator from './Routing/Operator';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Operator />
    </Router>
  );
}