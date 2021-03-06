import React from 'react';
import { Route } from 'react-router-dom';

// pages component
import Home from './modules/pages/Home';

const App = () => (
  <div>
    <Route path="/home" component={Home} />
  </div>
);

export default App;
