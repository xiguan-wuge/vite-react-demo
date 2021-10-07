import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import HomePage from "../pages/home/home";

import Home from '../pages/home/home';
import Login from '../pages/login/login'

const RouterPage = () => {
  return (
    <div>
      {/* routerPage */}
    <HashRouter>
      <Switch>
        <Route path={'/login'} component={Login}/>
        <Route 
          path='/'
          component={HomePage}
          // render={() => {
          //   <HomePage></HomePage>
          // }}
        >

        </Route>
      </Switch>
    </HashRouter>
    </div>
  )
  
}

export default RouterPage
