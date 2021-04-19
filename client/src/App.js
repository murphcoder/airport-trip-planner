import React from 'react';
import Login from './components/login';
import Signup from './components/signup';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './containers/navBar';
import TripContainer from './containers/TripContainer';
import TripLoader from './containers/TripLoader';
import TripInput from './components/TripInput';
import UserSettings from './components/UserSettings';
import Home from './components/Home';

export const URL = 'https://https://airport-trip-planner.herokuapp.com/';

class App extends React.Component {

  render() {
    return (
      <div>
         <BrowserRouter>
          <NavBar />
          <Switch>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

};

export default App;