import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NotFound from './pages/notfound/NotFound';
import MainPage from './pages/mainpage/MainPage';
import Sobre from './pages/about/Sobre';
import Repositories from './pages/repositories/Repositories'
import MessagePage from './pages/message/MessagePage';

function Routes () {
  return (
    <Router>
     <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/about' exact component={Sobre} />
        <Route path='/repositories' exact component={Repositories} />
        <Route path='/direct-message' exact component={MessagePage} />
        <Route path='*' component={NotFound} />
     </Switch>
    </Router>
  )
}

export default Routes;