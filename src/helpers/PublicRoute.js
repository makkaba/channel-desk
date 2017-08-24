import React, { Component } from 'react';
import { Redirect, Route } from 'react-router';
import Landing from '../components/Landing';

function PrivateRoute({ component: Component, user, ...rest}){
  return (
    <Route {...rest} render={props => (
      user.user !== "" ? (
        <Component {...props}/>
      ) : (
        <Landing />
      )
    )}/>  
  );
}


export default PrivateRoute;