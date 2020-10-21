import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MainPage from './pages/MainPage';
import Sobre from './pages/Sobre';

function Routes () {
  return (
    <BrowserRouter>
      <Route path='/' component={MainPage} exact />
      <Route path='/sobre' component={Sobre} exact />
    </BrowserRouter>
  )
}

export default Routes;