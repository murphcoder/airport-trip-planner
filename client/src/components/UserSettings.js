import React from 'react';
import { Redirect } from 'react-router-dom';

class UserSettings extends React.Component {
    state = {
        id: this.props.location.user.id,
        email: this.props.location.user.email,
        password: '',
        password_confirmation: ''
    };

    handleUpdate = event => {
        event.preventDefault();
        this.props.location.updateUser(this.state, this.props.location.url)
    };

    handleDelete = event => {
        this.props.location.deleteUser(this.props.location.user, this.props.location.url)
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render() {
        if (this.props.location.loggedIn) {
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