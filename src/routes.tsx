import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import MainPage from './pages/mainpage/MainPage';
import Sobre from './pages/about/Sobre';
import Repositories from './pages/repositories/Repositories'
import MessagePage from './pages/message/MessagePage';

function Routes () {
  return (
    <BrowserRouter>
      <Route path='/' component={MainPage} exact />
      <Route path='/about' component={Sobre} exact />
      <Route path='/repositories' component={Repositories} exact />
      <Route path='/direct-message' component={MessagePage} exact />
    </BrowserRouter>
  )
}

export default Routes;