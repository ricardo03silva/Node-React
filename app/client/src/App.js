import { React, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const trip = {
    origins: {
        lat: 41.36625,
        lng: -8.391306,
    },
    destinations: {
        lat: 41.35777,
        lng: -8.369203,
    },
};

const App = () => {
    const [data, setData] = useState(null);

    //this only renders once, when the pade loads for first time
    useEffect(() => {
        fetch(`/busInfo/${trip.origins.lat}%2C${trip.origins.lng}&${trip.destinations.lat}%2C${trip.destinations.lng}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.status === 'OK') {
                    setData(data);
                    data.rows.map((el) => {
                        el.elements.map((el) => {
                            console.log(el.distance.text);
                            console.log(el.duration.text);
                        });
                    });
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>{!data ? 'Loading...' : 'Data Fetched'}</p>
            </header>
        </div>
    );
};

export default App;
