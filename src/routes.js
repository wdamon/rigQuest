import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';

export default funciton Routes() {
  return (
    <Router>
      <Route path="/" component={App} />
      <Route path="/login" component={About} />
      <Route path="*" component={NotFound} />
    </Router>
  );
}
