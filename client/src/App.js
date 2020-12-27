import React from 'react';
import { connect } from 'react-redux';
import Login from './components/login';
import Signup from './components/signup';
import LoginBar from './components/loginBar';
import Start from './containers/Start';
import { getUserStatus } from './actions/sessionsActions';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

export const URL = 'http://localhost:3001';

class App extends React.Component {

  componentDidMount() {
    this.props.getUserStatus(URL)
  };

  render() {
    return (
      <div>
         <BrowserRouter>
         {console.log(this.props)}
         {this.props.sessions.loggedIn ? <Start /> : <LoginBar />}
          <Switch>
            <Route exact path='/' />
            <Route exact path='/home' component={App} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

};

const mapStateToProps = state => {
  return {
    sessions: state.sessions
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getUserStatus: (url) => dispatch(getUserStatus(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)