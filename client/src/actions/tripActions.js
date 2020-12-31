import { URL } from '../App';

export function getTripData(trip) {
    return (dispatch) => {
        dispatch({ type: 'GATHERING_TRIP_DATA' });
        let configObj = {
            method: "GET",
            headers: {
                "x-rapidapi-key": "51322cd9bfmsh4796a8fe5d913a5p1cde75jsnf295deab96e2",
		        "x-rapidapi-host": "aerodatabox.p.rapidapi.com",
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        };
        fetch(`https://aerodatabox.p.rapidapi.com/flights/number/${trip.flightNumber}/${trip.departureDate}`, configObj)
        .then(resp => resp.json())
        .then(flightData => (fetch(`http://open.mapquestapi.com/directions/v2/route?key=GQ9IAjrMjq3TgirjdQGfC8jxYBQMKGiB&from=${trip.address},${trip.city},${trip.state},${trip.zip}&to=${flightData[0].departure.airport.location.lat},${flightData[0].departure.airport.location.lon}`)
        .then(resp => resp.json())
        .then(drivingData => dispatch({type: 'UPDATED_TRIP', trip: trip, drivingData: drivingData, flightData: flightData}))));
    };
};

function tripSaver(trip, user, dispatch) {
    let configObj = {
        method: trip.uploadPrep.uploadData.method,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({trip: trip.uploadPrep.prepedTrip})
    };
    fetch(`${URL}/users/${user.id}/${trip.uploadPrep.uploadData.path}`, configObj)
    .then(resp => resp.json())
    .then(newTrip => dispatch({type: 'UPLOADED_TRIP', oldTrip: trip, newTrip: newTrip}))
    .catch(error => console.log('api errors:', error))
};

export function saveTrip(trip, user) {
    return (dispatch) => {
        dispatch({ type: 'SAVING_TRIP' });
        tripSaver(trip, user, dispatch);
        dispatch({ type: 'SAVING_FINISHED' })
    }
};

export function saveAllTrips(trips, user) {
    return (dispatch) => {
        dispatch({ type: 'SAVING_ALL_TRIPS' });
        trips.forEach(trip => {
            tripSaver(trip, user, dispatch)
        });
        dispatch({ type: 'SAVING_FINISHED' })
    }
};

export function downloadTrips(user) {
    return (dispatch) => {
        dispatch({ type: 'DOWNLOADING_TRIPS' });
        fetch(`${URL}/users/${user.id}/trips`)
        .then(resp => resp.json())
        .then(info => dispatch({type: 'TRIPS_DOWNLOADED', trips: info.trips}))
        .catch(error => console.log('api errors:', error))
    }
};

export function deleteTrip(trip, user) {
    return (dispatch) => {
        dispatch({ type: 'DELETING_TRIP' });
        let configObj = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({trip: trip.uploadPrep.prepedTrip})
        };
        fetch(`${URL}/users/${user.id}/trips/${trip.id}`, configObj)
        .then(resp => resp.json())
        .then(oldTrip => dispatch({ type: 'TRIP_DELETED', trip: oldTrip }))
        .catch(error => console.log('api errors:', error))
    }
}