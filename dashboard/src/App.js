import React from "react";
import logo from "./logoCav.png";
import "./App.css";
import Products from "./components/Products";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="" />
        <main>
          <p>Compra Alimentos Virtual</p>
          <Products />
          <Users />
        </main>
      </header>
    </div>
  );
}

export default App;
