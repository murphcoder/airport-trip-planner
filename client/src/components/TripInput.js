import React from 'react';
import Trip from '../classes/Trip';
import TripLoader from '../containers/TripLoader';
import { Redirect } from 'react-router-dom';

class TripInput extends React.Component {
    state = {
        newTrip: {
            nickname: '',
            departureDate: '',
            flightNumber: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            id: null
        },
        trip: null
    };

    handleSubmit = event => {
        event.preventDefault();
        let trip = new Trip(this.state.newTrip);
        this.setState({
            trip: trip
        })
    };

    handleChange = event => {
        this.setState({
            ...this.state,
            newTrip: {
                ...this.state.newTrip,
                [event.target.name]: event.target.value
            }
        })
    };

    render() {
        if (this.props.location.loggedIn) {
            if (!!this.state.trip) {
                return (<TripLoader trip={this.state.trip} />)
            } else {
                return (
                    <div className="main">
                        <h2>Input Your Trip Data Below</h2>
                        <form className="form" onSubmit={this.handleSubmit}>
                            <label>Trip Nickname : </label>
                            <input type="text" name="nickname" placeholder="Trip Nickname" onChange={this.handleChange} value={this.state.nickname} />
                            <label>Departure Date : </label>
                            <input type="text" name="departureDate" placeholder="Departure Date" onChange={this.handleChange} value={this.state.departureDate} />
                            <label>Flight Number : </label>
                            <input type="text" name="flightNumber" placeholder="Flight Number" onChange={this.handleChange} value={this.state.flightNumber} />
                            <label>Street Address : </label>
                            <input type="text" name="address" placeholder="Street Address" onChange={this.handleChange} value={this.state.address} />
                            <label>City : </label>
                            <input type="text" name="city" placeholder="City" onChange={this.handleChange} value={this.state.city} />
                            <label>State : </label>
                            <input type="text" name="state" placeholder="State" onChange={this.handleChange} value={this.state.state} />
                            <label>Zip Code : </label>
                            <input type="text" name="zip" placeholder="Zip Code" onChange={this.handleChange} value={this.state.zip} />
                            <p><input type="submit" /></p>
                        </form>
                    </div>
                )
            }
        } else {
            return(
                <Redirect to="/" />
            )
        }
    }

};
  
export default TripInput;