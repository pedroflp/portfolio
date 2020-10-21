import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MainPage from './pages/MainPage';

function Routes () {
  return (
    <BrowserRouter>
      <Route path='/' component={MainPage} exact />
    </BrowserRouter>
  )
}

export default Routes;