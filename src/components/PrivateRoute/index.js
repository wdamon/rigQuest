import {
  Route,
  Redirect,
} from 'react-router-dom';
import Auth from '../../helpers.js';
import React from 'react';

const PrivateRoute  = ({ Component, ...rest }) => {
 console.log("Auth", Auth.isAuthenticated)
  if (Auth.isAuthenticated) {
    return  <Route {...rest} component= { Component } />
  } else {
    return <Redirect to={'/login'} />
  }
}

export default PrivateRoute 