// Dependencies
import React from "react";

// Styles
import { Container } from "./card-player.styles";

// Model
import { ICardPlayerProps } from "../../utils/models/card-player.model";

// Assets
import iconBlurRed from "../../assets/red-icon-blur.jpg";
import iconBlurGray from "../../assets/gray-icon-blur.jpg";

const CardPlayer: React.FC<ICardPlayerProps> = ({ title, description }) => {
  return (
    <Container>
      <img src={iconBlurRed} alt="" className="icon-red" />

      <div>
        <h2>{title}</h2>

        <p>{description}</p>

        <button>
          <p>Saiba mais</p>
        </button>
      </div>

      <img src={iconBlurGray} alt="" className="icon-gray" />
    </Container>
  );
};

export default CardPlayer;
