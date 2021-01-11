import React from 'react';
import { Redirect } from 'react-router-dom';

class UserSettings extends React.Component {
    state = {
        user: {
            id: this.props.location.user.id,
            email: this.props.location.user.email,
            password: '',
            password_confirmation: ''
        },
        message: '',
        redirect: false
    };

    handleUpdate = event => {
        event.preventDefault();
        this.props.location.updateUser(this.state.user, this.props.location.url);
        this.setState({
            ...this.state,
            message: 'User Updated.',
            redirect: true
        })
    };

    handleDelete = event => {
        this.props.location.deleteUser(this.props.location.user, this.props.location.url),
        his.setState({
            ...this.state,
            message: 'User Deleted.',
            redirect: true
        })
    };

    handleChange = event => {
        this.setState({
            user: {
                ...this.state.user,
                [event.target.name]: event.target.value
            }
        })
    };

    render() {
        if (this.state.redirect) {
            return ( <Redirect to={{pathname: "/", message: this.state.message}} />)
        } else if (this.props.location.loggedIn) {
            return (
                <div className="main">
                    <h2>Change Your email address or password below.</h2>
                    <form onSubmit={this.handleUpdate}>
                        <div className="form">
                            <label>Email Address : </label>
                            <input type="text" name="email" onChange={this.handleChange} value={this.state.email} />
                            <label>Password : </label>
                            <input type="password" name="password" onChange={this.handleChange} value={this.state.password} />
                            <label>Password Confirmation : </label>
                            <input type="password" name="password_confirmation" onChange={this.handleChange} value={this.state.password_confirmation} />
                        </div>
                        <p><input type="submit" value="Update User" /></p>
                    </form>
                    <p><button onClick={this.handleDelete}>Delete User</button></p>
                </div>
            )
        } else {
            return(
                <Redirect to="/" />
            )
        }
    };

};

export default UserSettings;