// Dependencies
import React from "react";

// Utils
import { ICardEvaluation } from "../../utils/models/card-evaluation.model";

// Styles
import { Container } from "./card-evaluation.styles";

//Assets
import iconGray from "../../assets/gray-icon-blur.jpg";
import iconRed from "../../assets/red-icon-blur.jpg";

const CardEvaluation: React.FC<ICardEvaluation> = ({
  description,
  name,

  profession,
  thumbnail,
}) => {
  return (
    <Container>
      <img src={thumbnail} alt="" />

      <div className="content">
        <img className="icon-red" src={iconRed} alt="" />

        <h2>{name}</h2>

        <span>{profession}</span>

        <p>{description}</p>
      </div>
      <img className="icon-gray" src={iconGray} alt="" />
    </Container>
  );
};

export default CardEvaluation;
