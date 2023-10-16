import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export const LocationPage = () => {

    const [ location, setLocation ] = useState([]);
    const { locationID } = useParams();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/location/${locationID}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => setLocation(data))
        .catch((err) => console.log(err))
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src="https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2018/11/location-tech.jpg" style={{maxWidth: '100%'}}></img>
                </div>
                <div className="col-6 d-flex flex-column align-items-center justify-content-center">
                    <h1>{location && location.name}</h1>
                    <p>Type: {location && location.type}</p>
                    <p>Dimension: {location && location.dimension}</p>
                    <h3>Important Residents:</h3>
                    <p></p>

                </div>

            </div>
        </div>
    )
}