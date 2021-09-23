
import React from "react";
import { useState, useEffect } from "react";
import {Route, Link} from 'react-router-dom';
import Products from "./Products";



function ProductsList() {
let [products, setProduct] = useState ([])

useEffect(()=>{
  fetch('http://localhost:3003/api/products')
 .then(response => response.json())
 .then(data => setProduct(data.data));
},[])


useEffect(()=>{
  console.log('Me modifique');
},[products])

  return (
    <React.Fragment>
    <div className="caja">
      <main>
        <h2>Lista de Productos</h2>
    {products.length ===0 && <li>Cargando información...</li>}
        {products.map( product => <li>{product.name}</li>)}
        </main>
    </div>
    </React.Fragment>
  );
}
export default ProductsList;
