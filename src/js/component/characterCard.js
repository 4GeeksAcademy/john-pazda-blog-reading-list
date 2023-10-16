import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const CharacterCard = (props) => {
    const { store, actions } = useContext(Context);
    const [ bookmarkColor, setBookmarkColor ] = useState('gold');

    return (
                    <div key={props.characters.id} className="card m-2 p-2" style={{width: '25rem'}}>
                    <img className="card-img-top w-100 rounded" src={props.characters.image} alt="..." />
                        <div className="card-body m-2 border border-2 rounded">
                            <h5 className="card-title mb-3">{props.characters.name}</h5>
                            <p className="card-text">Species: {props.characters.species}</p>
                            <p className="card-text">Gender: {props.characters.gender}</p>
                            <p className="card-text">Origin: {props.characters.origin.name} </p>
                            <div className='row d-flex flex-row justify-content-between'>
                                <div className='col-6'>
                                <Link 
                                to={`/character-info/${props.characters.id}`}
                                className="btn btn-primary btn-md"
                                >
                                    More info
                                </Link>
                                </div>
                                <div className='col-6 d-flex justify-content-end align-items-center'>
                                <a 
                                href="#" 
                                onClick={(e) => {
                                    actions.updateFavoritesList(props.characters, "character-info");
                                    setBookmarkColor(bookmarkColor === 'gold' ? 'blue' : 'gold')
                                    
                                }}>
                                    <i 
                                    style={{fontSize: '40px', color: `${bookmarkColor}`}} 
                                    className="fa-regular fa-bookmark">
                                        
                                    </i>

                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

CharacterCard.propTypes = {
   characters: PropTypes.object,
   onFind: PropTypes.func

}

CharacterCard.defaultProps = {
    onFind: null,
    characters: {
        name: "",
        species: "",
        gender: "",
        origin: {
            name: ""
        }
    }
}


