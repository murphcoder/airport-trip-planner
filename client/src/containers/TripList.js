import React from 'react';
import { Link } from 'react-router-dom';

const TripList = (props) => {
    return (
        <div>
            <h2>Your Saved Trips</h2>
            <ul>
                {props.trips.length !== 0 ? props.trips.map(trip => <li><Link key={trip.jid} to={{pathname: `/trips/${trip.jid}`}}>{trip.nickname}</Link></li>) : <p>You currently have no trips saved.</p>}
            </ul>
            <p><button onClick={props.saveAllTrips}>Save All Trips</button></p>
        </div>
    )
};

export default TripList;