// Dependencies
import React from "react";

// Components
import Carrousel from "../carousel/carousel.component";

// Styles
import { Container } from "./exclusivities.styles";

const Exclusivities: React.FC = () => {
	return (
		<Container>
			<div className="container">
				<div className="content">
					<h2>Quer mais? Temos muito mais exclusividades</h2>
				</div>

				<div className="carousel">
					<Carrousel />
				</div>
			</div>
		</Container>
	);
};

export default Exclusivities;
