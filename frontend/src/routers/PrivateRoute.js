import React from "react";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = null;
  //const user = {id: 1, username: "luis"}
  return (
    // <Route {exact={props.exact} path={props.path} component={props.component}} />
    <Route {...rest}>{user ? <Component /> : <Redirect to="/login" />}</Route>
  );
};

export default PrivateRoute;
