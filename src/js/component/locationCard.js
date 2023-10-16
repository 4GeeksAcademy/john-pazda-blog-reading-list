import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"


export const LocationCard = (props) => {

    const { store, actions } = useContext(Context);

    return (
        <div className="card m-2 p-2" style={{width: '30rem'}}>
        <div className="card-body">
            <h5 className="card-title">{props.location.name}</h5>
            <p className="card-text">Type: {props.location.type}</p>
            <p className="card-text">Type: {props.location.dimension}</p>

            <div className="row d-flex flex-row justify-content-between">
                <div className="col-6">
                    <Link 
                    to={`/location-info/${props.location.id}`} 
                    className="btn btn-primary">
                        More Info
                    </Link>
                </div>

                <div className='col-6 d-flex justify-content-center align-items-center'>
                    <a 
                    href="#" 
                    onClick={() => {
                        actions.updateFavoritesList(props.location, "location-info");
                    }}>
                        <i 
                        style={{fontSize: '40px', color: 'gold',}} 
                        className="fa-regular fa-bookmark">
                            
                        </i>
                     </a>
                    </div>
            </div>
        </div>
        </div>

    )   

}

LocationCard.propTypes = {
    location: PropTypes.object
}

LocationCard.defaultProps = {
    location: {
        id: "",
        name: "",
        type: "",
        dimension: ""
    }
}