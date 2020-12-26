import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Signup extends Component {
    constructor(props) {
    super(props);
        this.state = { 
            username: '',
            email: '',
            password: '',
            password_confirmation: '',
            errors: ''
        };
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    };

    handleResponse = (info) => {
        if (info.data.status === 'created') {
            this.props.handleLogin(info);
            this.props.history.push('/')
        } else {
            this.setState({errors: info.data.errors})
        }
    };

    sendSignup = (user) => {
        let configObj = {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(user)
        };
        fetch(`${this.props.url}/users`, configObj)
        .then(response => response.json())
        .then(info => this.handleResponse(info))
        .catch(error => console.log('api errors:', error))
    };

    handleSubmit = (event) => {
        event.preventDefault()
        const {username, email, password} = this.state
        let user = {
            username: username,
            email: email,
            password: password
        };
        this.sendSignup(user)
    };

    render() {
        const {username, email, password, password_confirmation} = this.state;
        return (
            <div>
                <h1>Sign Up</h1>        
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="username"
                        type="text"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                    />
                    <input
                        placeholder="email"
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <input 
                        placeholder="password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />          
                    <input
                        placeholder="password confirmation"
                        type="password"
                        name="password_confirmation"
                        value={password_confirmation}
                        onChange={this.handleChange}
                    />
              
                    <button placeholder="submit" type="submit">
                        Sign Up
                    </button>
                    <div>
                        or <Link to='/login'>Login</Link>
                    </div>
                </form>
            </div>
        );
    }
};

export default Signup;