import React from "react";
import {Route, Link} from 'react-router-dom';

 function Users(){
    return (<div className="caja">
        <Link to={'/users'}><h2 className='link'> Usuario</h2></Link>
        <Route exact={true} path='/users' component={Users} />
        <p>Total: </p>
        <p>Primer agregado: </p>
    <p>Último agregado: </p>
    </div>);
}

export default Users