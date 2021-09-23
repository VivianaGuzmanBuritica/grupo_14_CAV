import React from "react";
import { Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductsList from "./ProductsList";


function Products() {

  let [products, setProduct] = useState ([])

useEffect(()=>{
  fetch('http://localhost:3003/api/products')
 .then(response => response.json())
 .then(data => setProduct(data.meta));
},[])


useEffect(()=>{
  console.log('Me modifique');
},[products])

  return (
    <div className="caja">
       <Link to={"/productList"}>
        <h2 className="link">Producto</h2>
      </Link>
      <main>
      <p>Total: </p>
      {products.length ===0 && <p className='cargando'>Cargando información...</p>}
        {products.map( product => <li>{product.total}</li>)}
      
      <p>Primer agregado: </p>
      {products.length ===0 && <p className='cargando'>Cargando información...</p>}
        {products.map( product => <li>{product.primero}</li>)}
      <p>Último agregado: </p>
      {products.length ===0 && <p className='cargando'>Cargando información...</p>}
        {products.map( product => <li>{product.ultimo}</li>)}
      </main>
    </div>
  );
}
export default Products;
