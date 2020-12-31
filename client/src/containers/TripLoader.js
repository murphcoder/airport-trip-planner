import React from 'react';
import TripDisplay from '../components/TripDisplay';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getTripData, saveTrip, deleteTrip } from '../actions/tripActions';

class TripLoader extends React.Component {
    constructor(props) {
        super(props)
        if (!!this.props.trip) {
            this.state = {
                trip: this.props.trip,
                message: null,
                redirect: false
            }
        } else {
            this.state = {
                trip: this.props.trips.list.find(t => {return t.jid === this.props.match.params.tripId}),
                message: null,
                redirect: false
            }
        }
    };

    componentDidMount() {
        this.props.getTripData(this.state.trip)
    };

    delete = () => {
        this.props.deleteTrip(this.state.trip, this.props.sessions.user);
        this.setState({...this.state, message: 'Trip Deleted', redirect: true})
    };

    save = () => {
        this.props.saveTrip(this.state.trip, this.props.sessions.user);
        this.setState({...this.state, message: 'Trip Saved', redirect: true})
    }

    render() {
        if (this.state.redirect) {
            return ( <Redirect to={{pathname: "/", message: this.state.message}} />)
        } else if (this.props.sessions.loggedIn) {
            if (!!this.state.trip && this.props.trips.list.includes(this.state.trip) && !!this.state.trip.flightData && !!this.state.trip.drivingData) {
                return (
                    <div className="main">
                        <div className="buttons">
                            <button onClick={this.save}>Save This Trip</button>
                            <button onClick={this.delete}>Delete This Trip</button>
                        </div>
                        <TripDisplay trip={this.state.trip} />
                    </div>
                )
            } else {
                console.log(this.state.trip);
                return (
                    <h2 className="main">Loading...</h2>
                )
            }
        } else {
            <Redirect to="/" />
        }
    }

};

const mapStateToProps = state => {
    return {
        sessions: state.sessions,
        trips: state.trips
    }
};
  
const mapDispatchToProps = dispatch => {
    return {
        getTripData: (trip) => dispatch(getTripData(trip)),
        saveTrip: (trip, user) => dispatch(saveTrip(trip, user)),
        deleteTrip: (trip, user) => dispatch(deleteTrip(trip, user))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TripLoader)