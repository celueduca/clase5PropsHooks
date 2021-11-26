import "./App.css";
import "bootstrap";
import "boxicons";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Products from "./components/pages/Products";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Cart from "./components/pages/Cart";
function App() {
  return (
    <>
    <div className="App ">

      <BrowserRouter>
        <Switch>
          <PrivateRoute exact  path="/" component={Home}/>
          <PrivateRoute path="/Products" component={Products}/> 
          <Route path="/Login" component={Login}/>
          <PrivateRoute path="/Cart" component={Cart}/>
        </Switch>
      </BrowserRouter>
    </div>

    </>
  );
}
export default App;
