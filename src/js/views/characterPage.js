import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";




export const CharacterPage = () => {

    const [ character, setCharacter ] = useState();

    const { characterID } = useParams();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${characterID}`)
        .then((resp) => resp.json())
        .then((data) => setCharacter(data))
    }, [])

    return (
        <div className="container">
            <div className="row m-5 d-flex flex-nowrap">
                <div className="col-6 d-flex justify-content-center m-3">
                    <img src={character && character.image} className="border border-3 rounded" style={{minWidth: '100%', minHeight: '100%'}}></img>
                </div>
                <div className="col-6 d-flex flex-column align-items-center justify-content-center border border-3 m-3 rounded">
                    <h3>{character && character.name}</h3>
                    <p>gender: {character && character.gender} </p>
                    <p>Species: {character && character.species} </p>
                    <p>Status: {character && character.status}</p>
                    <p>Origin: {character && character.origin.name}</p>
                    <p>Last known Location: {character && character.location.name} </p>
                </div>
            </div>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-4 d-flex justify-content-center">
                        <Link to="/" className="btn btn-primary">
                            Return to home
                        </Link>
                    </div>
                </div>
        </div>
    )
}