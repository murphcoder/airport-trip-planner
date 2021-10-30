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

export const URL = 'http://localhost:3001/';
class App extends React.Component {

  render() {
    return (
      <div>
         <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/settings' component={UserSettings} />
            <Route exact path='/trips/new' component={TripInput} />
            <Route exact path='/trips' component={TripContainer} />
            <Route exact path='/trips/new' component={TripLoader} />
            <Route exact path='/trips/:tripId' component={TripLoader} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

};

export default App;