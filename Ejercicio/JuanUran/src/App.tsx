import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import NoFound from './components/NoFound';
import Login from './components/Login';
import Marketplace from './components/Marketplace';

function App() {



  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <PrivateRoute path="/marketplace" component={Marketplace}></PrivateRoute>
          <Route component={NoFound}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
