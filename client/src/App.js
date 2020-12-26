import React from 'react';
import Login from './components/login';
import Signup from './components/signup';
import LoginBar from './components/loginBar';
import getUserStatus from './actions/getUserStatus';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';

const URL = 'http://localhost:3001';

class App extends React.Component {

  componentDidMount() {
    getUserStatus(URL)
  };

  render() {
    return (
      <div>
         <BrowserRouter>
         {this.state.isLoggedIn ? <NavBar /> : <LoginBar />}
          <Switch>
            <Route exact path='/' component={App}/>
            <Route exact path='/login' component={<Login url={URL} />} />
            <Route exact path='/signup' component={<Signup url={URL} />} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

}

export default App;