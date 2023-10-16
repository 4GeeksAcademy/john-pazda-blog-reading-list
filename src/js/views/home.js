import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Characters } from "../component/characters";
import { Locations } from "../component/locations";

export const Home = () => {
	return (
		<div>
		<Characters />
		<Locations />
		</div>
		
	)
}
