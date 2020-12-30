import React from 'react';

const TripDisplay = (props) => {

    return (
        <div>
            <h2>Trip : {props.trip.nickname}</h2>
            <p>Your flight is leaving from {props.trip.airportName} Airport at {props.trip.flightTimeFormatted}.</p>
            <p>You should leave {props.trip.fullAddress} at {props.trip.departureTime} in order to make your flight.</p>
            <p>This includes a driving time of {props.trip.drivingTime} and arriving at the airport 2 hours early for delays.</p>
            <iframe title={props.trip.nickname} width="600" height="400" src={props.trip.mapURL} />
        </div>
    )

};

export default TripDisplay;