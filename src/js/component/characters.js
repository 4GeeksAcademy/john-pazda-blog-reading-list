import React, { useEffect, useState} from "react";
import { CharacterCard } from "./characterCard";
import { Navigate, useNavigate } from "react-router";

export const Characters = () => {

    const navigate = useNavigate('');
    const  [ characters, setCharacters ] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then((resp) =>  {
               return resp.json();
            })
            .then((data) => {
                setCharacters(data.results); 
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className="m-3">
        <div className="container">
            <div className="row">
                <h1>Characters</h1>
            </div>
        </div>
        <div id="characters-container" className="container">
        <div id="characters-row" className="row d-flex flex-nowrap overflow-x-auto">
        {characters.map((character)=> {
            return(
        <CharacterCard 
            key={character.id}
            characters={character}
        />
    )})}

                </div>
        </div>
        </div>
    )
}