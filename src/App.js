import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Box, Split } from 'grommet';
import Sidebar from './components/Sidebar';
import LoadBoard from './components/LoadBoard';
import LoginView from './components/LoginView';
import SignupView from './components/SignUpView';
import CarrierView from './components/CarrierView';
import ShipperView from './components/ShipperView';
import ProfileView from './components/ProfileView';
import PrivateRoute from './components/PrivateRoute';
import Auth from './helpers.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      profile: null
    }
    this.updateUser = this.updateUser.bind(this);
  }

  componentWillMount() {
  fetch('/checkSession', { credentials: 'same-origin' })
    .then(resp => resp.json())
    .then((json) => {
      if (json.success) {
        Auth.isAuthenticated = true;
        this.setState({ profile: json.profile });
      }
    });
  }

  updateUser (profile) {
    this.setState({profile})
    console.log('this.state.profile ', this.state.profile)
  };


  render() {

    const RenderLogin = (props, history) => {
      return (
        <LoginView 
          updateUser={this.updateUser}
          {...props}
        />
      );
    }

    const RenderProfile = (props) => {
      return (
        <ProfileView
          profile={this.state.profile}
          {...props}
        />  
      )
    }

    return (
      <Router>
        <div id="App">
          <Split flex="right">
            <Sidebar fixed />
            <Box full id="main">
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/login" />} />
              <PrivateRoute path="/profile" render={RenderProfile} />
              <Route path="/login" render={RenderLogin} />
              <Route path="/signup" component={SignupView} />
              <Route path="/loadboard" component={LoadBoard} />
              <Route path="/carriers" component={CarrierView} />
              <Route path="/shippers" component={ShipperView} />
            </Switch>  
            </Box>
          </Split>
        </div>
      </Router>
    );
  }
}

export default App;
