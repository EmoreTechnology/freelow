// Dependencies
import React from "react";

// Styles
import { Container } from "./freelow.styles";

// Assets
import firstCard from "../../assets/image-card1.jpg";
import secondCard from "../../assets/image-card2.jpg";

const Freelow: React.FC = () => {
  return (
    <Container>
      <div className="first-section">
        <img src={firstCard} alt="" />
      </div>

      <div className="second-section">
        <span className="Palavra-copiar">Prazer,</span>

        <h1>sou a Freelow!</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          vitae pulvinar ipsum. Praesent eu massa lorem. Phasellus volutpat
          ligula ac nunc maximus ornare. Suspendisse el justo eget odio
          venenatis vehicula eget sit amet ante. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae;Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Pellentesque vitae
          pulvinar ipsum. Praesent eu massa lorem. Phasellus volutpat ligula ac
          nunc maximus ornare. Suspendisse
        </p>
      </div>

      <div className="tird-section">
        <img src={secondCard} alt="" />
      </div>
    </Container>
  );
};

export default Freelow;
