import React from "react";
import logo from "./logoCav.png";
import "./App.css";
import Products from "./components/Products";
import Users from "./components/Users";
import Home from "./components/Home";
import { Route, Link, Switch } from "react-router-dom";
import ProductsList from "./components/ProductsList";
import UsersList from "./components/UsersList";
import Error404 from "./components/404";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="" />
        <main>
          <Link to={"/"}>
            <p className="link">Compra Alimentos Virtual</p>{" "}
          </Link>
        
     <Switch> <Route exact path={"/"} component={Home} />
      <Route path={"/productList"} component={ProductsList} />
      <Route path={"/UsersList"} component={UsersList} />
      <Route component={Error404} />
      </Switch>
      </main>
      </header>
    </div>
  );
}

export default App;
