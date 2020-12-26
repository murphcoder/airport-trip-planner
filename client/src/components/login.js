import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import loginUser from '../actions/loginUser';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            email: '',
            password: '',
            errors: ''
        };
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    };

    componentDidMount() {
        if (this.state.isLoggedIn) {
            this.props.history.push('/')
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {username, email, password} = this.state;
        let user = {
            username: username,
            email: email,
            password: password
        };
        loginUser(user, this.props.url);
    };

    showErrors = () => {
        return (
            <div>
                <h3>Errors</h3>
                <ul>
                    {this.state.errors.map(error => <li>{error}</li>)}
                </ul>
            </div>
        )
    };

    render() {
        const {username, email, password} = this.state
        return (
        <div>
            <h1>Log In</h1>  
            {!!this.state.errors ? this.showErrors() : null}      
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
                    <button placeholder="submit" type="submit">
                        Log In
                    </button>          
                    <div>
                        or <Link to='/signup'>Sign Up</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;