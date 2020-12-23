import React from 'react';
import { connect } from 'react-redux';
import NavBar from './components/NavBar'
import './App.css';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route exact path="/trips" render={() => <div>Saved Trips</div>} />
          <Route exact path="/settings" render={() => <div>Account Settings</div>} />
        </div>
      </Router>
    )
  }

}

export default App;
