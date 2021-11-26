import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingPages from "./pages/ShoppingPages"
import LoginPage from './pages/LoginPage';
import NoFound from './pages/NoFound'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';



function App() {

  //ref.current.value;


  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage}></Route>
          <Route exact path="/" component={ShoppingPages}></Route>
          <Route component={NoFound}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;