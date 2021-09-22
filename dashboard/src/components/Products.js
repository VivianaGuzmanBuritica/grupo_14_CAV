import React from "react";
import {Route, Link} from 'react-router-dom';



function Products() {
  return (
    <div className="caja">
  
  <Link to={'/productList'}> <h2>Producto</h2></Link>
    <p>Total: </p>
    <p>Primer agregado: </p>
    <p>Último agregado: </p>
    </div>
  );
}
export default Products;
