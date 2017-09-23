import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Box, Split } from 'grommet';
import Sidebar from 'components/Sidebar';
import LoadBoard from 'components/LoadBoard';
import LoginView from 'components/LoginView';
import SignupView from 'components/SignUpView';
import CarrierView from 'components/CarrierView';
import ShipperView from 'components/ShipperView';
import ProfileView from 'components/ProfileView';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="App">
          <Split flex="right">
            <Sidebar fixed />
            <Box full id="main">
              <Route path="/login" component={LoginView} />
              <Route path="/signup" component={SignupView} />
              <Route path="/loadboard" component={LoadBoard} />
              <Route path="/carriers" component={CarrierView} />
              <Route path="/shippers" component={ShipperView} />
              <Route path="/profile" component={ProfileView} />
            </Box>
          </Split>
        </div>
      </Router>
    );
  }
}

export default App;
