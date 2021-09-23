import React from "react";
import { Route, Link } from "react-router-dom";
import UsersList from "./UsersList";
import { useState, useEffect } from "react";

function Users() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/usuarios/api/usuarios")
      .then((response) => response.json())
      .then((data) => setUsers(data.meta)); // verificar en controlador si es en meta donde se guarda el resultado de total, primero y ultimo
  }, []);

  useEffect(() => {
    console.log("Me modifique");
  }, [users]);

  return (
    <React.Fragment>
      <div className="caja">
        <main>
          <Link to={"/usersList"}>
            <h2 className="link"> Usuario</h2>
          </Link>

          <p>Total: </p>
          {users.length === 0 && <p className='cargando'>Cargando información...</p>}
        {users.map(user =><li>{user.total}</li>)}
          <p>Primer agregado: </p>
          {users.length === 0 && <p className='cargando'>Cargando información...</p>}
        {users.map(user =><li>{user.primer}</li>)} 

          <p>Último agregado: </p>
          {users.length === 0 && <p className='cargando'>Cargando información...</p>}
        {users.map(user =><li>{user.ultimo}</li>)}

          <Route exact path="/usersList" component={UsersList} />
        </main>
      </div>
    </React.Fragment>
  );
}

export default Users;
