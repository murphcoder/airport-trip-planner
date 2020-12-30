import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../actions/userActions';
import {URL} from '../App';

class Signup extends Component {
    constructor(props) {
    super(props);
        this.state = {
            email: '',
            password: '',
            password_confirmation: ''
        };
    };

    componentDidUpdate() {
        if (this.props.sessions.loggedIn) {
            this.props.history.push('/')
        }
    };

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.signupUser(this.state, URL);
    };

    render() {
        const {email, password, password_confirmation} = this.state;
        return (
            <div className="main">
                <h1>Sign Up</h1>      
                <form onSubmit={this.handleSubmit}>
                    <p><input
                        placeholder="email"
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                    /></p>
                    <p><input 
                        placeholder="password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    /></p>        
                    <p><input
                        placeholder="password confirmation"
                        type="password"
                        name="password_confirmation"
                        value={password_confirmation}
                        onChange={this.handleChange}
                    /></p>
              
                    <button placeholder="submit" type="submit">
                        Sign Up
                    </button>
                </form>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
      sessions: state.sessions
    }
};
  
const mapDispatchToProps = dispatch => {
    return {
        signupUser: (user, url) => dispatch(signupUser(user, url))
    }
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Signup);