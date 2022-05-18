import React from "react";
import collage from "../images/collage.jpg";

function Collage() {
	return (
		<div>
			
			<div className="collage-div">
				
				<img src={collage} className="collage" alt="collage" />
			</div>
			<div className="collage-text">
				<h1>Online Experiences</h1>
				<p>
					Join unique interactive activities led by one-of-a-kind hosts—all
					without leaving home.
				</p>
			</div>
		</div>
	);
}

export default Collage;
