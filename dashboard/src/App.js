import React from "react";
import logo from "./logoCav.png";
import "./App.css";
import Products from "./components/Products";
import Users from "./components/Users";
import {Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="" />
        <main>
        <Link to={'/'}> <p className='link' >Compra Alimentos Virtual</p> </Link> 
                  
                           
         <Route exact={true} path='/' />
         <Route exact={true} path='/productList'  component={Products} />
         <Route exact={true} path='/users' component={Users} />

          
         <Products/>
          <Users/>    
        </main>
      </header>
    </div>
  );
}

export default App;
