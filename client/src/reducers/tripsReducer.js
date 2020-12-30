import Trip from '../classes/Trip';

const tripsReducer = (state = {list: [], loading: false}, action) => {
    switch(action.type) {
        case 'GATHERING_TRIP_DATA':
            return {
                ...state,
                loading: true
            };
        case 'UPDATED_TRIP':
            let trip = action.trip;
            trip.flightData = action.flightData;
            trip.drivingData = action.drivingData;
            return {
                ...state,
                list: [...state.list, trip],
                loading: false
            };
        case 'SAVING_TRIP':
            return {
                ...state,
                loading: true
            };
        case 'SAVING_ALL_TRIPS':
            return {
                ...state,
                loading: true
            };
        case 'UPLOADED_TRIP':
            return {
                ...state,
                list: [...state.list.filter(t => {return t.jid !== action.oldTrip.jid}), action.newTrip]
            };
        case 'SAVING_FINISHED':
            return {
                ...state,
                loading: false
            };
        case 'DOWNLOADING_TRIPS':
            return {
                ...state,
                loading: true
            };
        case 'TRIPS_DOWNLOADED':
            let tripArray = [];
            action.trips.forEach(tripObj => {
                let trip = new Trip(tripObj);
                tripArray.push(trip)
            });
            return {
                ...state,
                list: tripArray,
                loading: false
            };
        case 'DELETING_TRIP':
            return {
                ...state,
                loading: true
            };
        case 'TRIP_DELETED':
            return {
                ...state,
                list: state.list.filter(f => {return f.id !== action.trip.id}),
                loading: false
            }
        default:
            return state;
    }
};

export default tripsReducer