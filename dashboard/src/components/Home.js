import React from "react";
import { Route, Link } from "react-router-dom";
import Products from "./Products";
import Users from "./Users";

function Home() {
  return (
    <React.Fragment>
      <div>
        <Products />
        <Users />
      </div>
    </React.Fragment>
  );
}
export default Home;
