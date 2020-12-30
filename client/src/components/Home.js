import React from 'react';

const Home = (props) => {
    console.log(props);
    return (
        <div className="welcome">
            <h3>{props.location.message}</h3>
            <h2>Welcome To The Airport Trip Planning App</h2>
            <p>Hello! This app does exactly what it says on the tin.
                If you click on 'New Trip' and input your departure date, 
                flight number, and home address, the app will tell you when 
                you should leave your home in order to get to your flight on time.
                <br /><br />
                You can also save the trips for the future. Just click on 'Trips' to 
                access saved trips.
            </p>
        </div>
    )
}

export default Home