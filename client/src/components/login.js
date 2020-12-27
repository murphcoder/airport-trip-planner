import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/sessionsActions';
import { URL } from '../App';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: ''
        };
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    };

    componentDidUpdate() {
        console.log(this.props.sessions.loggedIn)
        if (this.props.sessions.loggedIn) {
            this.props.history.push('/')
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.loginUser(this.state, URL)
    };

    render() {
        return (
        <div>
            <h1>Log In</h1>   
                <form onSubmit={this.handleSubmit}>
                    <p><input
                        placeholder="email"
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    /></p>
                    <p><input
                        placeholder="password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    /></p>         
                    <button placeholder="submit" type="submit">
                        Log In
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
      loginUser: (user, url) => dispatch(loginUser(user, url))
    }
};

export default connect (mapStateToProps, mapDispatchToProps)(Login);