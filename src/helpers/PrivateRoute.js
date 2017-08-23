import React, { Component } from 'react';
import { Redirect, Route } from 'react-router';
// import { connect } from 'react-redux';


function PrivateRoute({ component: Component, user, ...rest}){
  console.log("private route. user:",user);
  
  return (
    <Route {...rest} render={props => (
      user.user !== "" ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }}/>
      )
    )}/>  
  );
}

/*
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    props.loggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)
*/
// function mapStateToProps(state){
//   return {
//     user: state.user
//   };
// }

// export default connect(mapStateToProps, null)(PrivateRoute);

export default PrivateRoute;