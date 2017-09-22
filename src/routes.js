import React from 'react';
import { Route } from 'react-router';

import Home from './modules/pages/Home';

const Routes = () => (
  <Route path="home" component={Home} />
);

export default Routes;
