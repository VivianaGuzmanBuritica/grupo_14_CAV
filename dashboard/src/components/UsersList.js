import React from "react";
import { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";

function UsersList() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/usuarios/api/usuarios")
      .then((response) => response.json())
      .then((data) => setUsers(data.data));
  },[]);

  useEffect(() => {
    console.log("Me modifique");
  },[users]);

  return (
    <React.Fragment>
      <div className="caja">
        <main>
        <h2>Lista de Usuarios</h2>
        
        {users.length === 0 && <p className='cargando'>Cargando información...</p>}
        {users.map(user =><li>{user.name}</li>)}
        </main>
      </div>
    </React.Fragment>
  );
}
export default UsersList;
