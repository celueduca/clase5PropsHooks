import React, { useState, useEffect,  } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Market from "./components/Market";
import NotFound from "./components/NotFound";
import Login from "./components/Login"
import { NumericLiteral } from 'typescript';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/lux/bootstrap.min.css";
import PrivateRoute from './components/PrivateRoute';

const NoFoundRedirect = () => (<Redirect to="/not-found" />)
const App = () => {

  

  return (
    <>
      <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <PrivateRoute exact path="/Market" component={Market}></PrivateRoute>
        <Route component={NotFound}></Route>
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
