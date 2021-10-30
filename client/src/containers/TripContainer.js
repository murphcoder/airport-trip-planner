import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TripList from './TripList';
import { downloadTrips, saveAllTrips, saveTrip, deleteTrip } from '../actions/tripActions';

class TripContainer extends React.Component {

    componentDidMount() {
        if (!!this.props.sessions.user) {
            this.props.downloadTrips(this.props.sessions.user)
        }
    };

    saveTrips(trips, user) {
        saveAllTrips(trips, user)
    }

    render() {
        if (this.props.sessions.loggedIn) {
            return (
                <div className="main">
                    <TripList user={this.props.sessions.user} loggedIn={this.props.location.loggedIn} trips={this.props.trips.list} saveAllTrips={this.saveTrips} saveTrip={this.props.saveTrip} deleteTrip={this.props.deleteTrip} />
                </div>
            )
        } else {
            return(
                <Redirect to="/" />
            )
        }
    }

};

const mapStateToProps = state => {
    return {
        sessions: state.sessions,
        trips: state.trips
    }
};
  
const mapDispatchToProps = (dispatch)  => {
    return {
        downloadTrips: (user) => dispatch(downloadTrips(user)),
        saveAllTrips: (trips, user) => dispatch(saveAllTrips(trips, user)),
        saveTrip: (trip, user) => dispatch(saveTrip(trip, user)),
        deleteTrip: (trip, user) => dispatch(deleteTrip(trip, user))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TripContainer)