import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Home from '../pages/Home';
import Teste from '../pages/Helloworld';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/app" exact component={Teste}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;