import React from 'react';
import { connect } from 'react-redux';
import {logoutUser, loginUser, getUserStatus} from '../actions/sessionsActions';
import {signupUser, updateUser, deleteUser} from '../actions/userActions';
import {URL} from '../App';
import LoggedInBar from '../components/LoggedInBar';
import LoggedOutBar from '../components/LoggedOutBar';

class NavBar extends React.Component {

    componentDidMount() {
        this.props.getUserStatus(URL)
    };

    render() {
        return (
            <div>
                <h1 className="heading">Airport Trip Planner</h1>
                {(this.props.sessions.loggedIn) ? 
                    <LoggedInBar loggedIn={this.props.sessions.loggedIn} user={this.props.sessions.user} logoutUser={this.props.logoutUser} deleteUser={this.props.deleteUser} updateUser={this.props.updateUser} url={URL} /> : 
                    <LoggedOutBar />
                }
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
      logoutUser: (url) => dispatch(logoutUser(url)),
      loginUser: (user, url) => dispatch(loginUser(user, url)),
      getUserStatus: (url) => dispatch(getUserStatus(url)),
      signupUser: (user, url) => dispatch(signupUser(user, url)),
      deleteUser: (user, url) => dispatch(deleteUser(user, url)),
      updateUser: (user, url) => dispatch(updateUser(user, url))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(NavBar)