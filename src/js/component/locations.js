import React, { useEffect, useState } from "react";
import { LocationCard } from "./locationCard";

export const Locations = () => {
    const [ locations, setLocations ] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/location')
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            setLocations(data.results);
        })
    }, [])

    return (
        <div className="m-3">
        <div className="container">
            <div className="row">
                <h1>Locations</h1>
            </div>
        </div>
        <div id="characters-container" className="container">
        <div id="characters-row" className="row d-flex flex-nowrap overflow-x-auto">
            {locations && locations.map((location) => {
                return (
                    <LocationCard 
                    key={location.id}
                    location={location}
                    />
                )
            })}

                </div>
        </div>
        </div>

    )
}