import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Home from '../pages/Home';
import OrphanageMap from '../pages/OrphanageMap';
import Page404 from '../pages/Page404';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/map" component={OrphanageMap}/>
        <Route component={Page404}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;