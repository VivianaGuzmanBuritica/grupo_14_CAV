import React from "react";
import { Route, Link } from "react-router-dom";
import UsersList from "./UsersList";

function Users() {
  return (
    <div className="caja">
      <Link to={"/usersList"}>
        <h2 className="link"> Usuario</h2>
      </Link>
      <p>Total: </p>
      <p>Primer agregado: </p>
      <p>Último agregado: </p>

      <Route exact path="/usersList" component={UsersList}/>
    </div>
  );
}

export default Users;
