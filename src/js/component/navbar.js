import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="row">
			<div className="container-fluid d-flex justify-content-between align-items-center bg-light px-5 py-3">
				<Link to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMfsOio-gsDrxwPoJz51NqAFOrb2hOkWt4vQ&usqp=CAU" style={{height: '5rem', width:'5rem'}}/></Link>
				<div className="dropdown">
					<button 
					className="btn btn-secondary dropdown-toggle" 
					style={{backgroundColor: 'gold', color: 'black'}} 
					type="button" data-bs-toggle="dropdown" 
					aria-expanded="false">
						Bookmarked Characters/Locations
					</button>
					<ul className="dropdown-menu">
						{store.favoritesList.map((item, index) => {
							return (						
								<li 
								className="dropdown-item d-flex justify-content-between align-items-center"
								key={item.name}>
									<Link  
									to={`/${item.type}/${item.id}`}
									style={{color: 'black'}}
									>
										{item.name} 
								
										</Link>
										<i 
									className="fa-solid fa-trash"
									onClick={(() => actions.removeFavorites(item))}
									>
										</i>
										</li>
													
							)
					})}
					</ul>
				</div>
			</div>

		</div>
	)
};
