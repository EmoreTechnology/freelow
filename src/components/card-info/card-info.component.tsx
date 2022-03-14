// Dependencies
import React from "react";

// Styles
import { Container } from "./card-info.styles";

// Utils
import { ICardInfoProps } from "../../utils/models/card-info.model";

const CardInfo: React.FC<ICardInfoProps> = ({ icon, title, description }) => {
  return (
    <Container>
      <div className="container">
        <div className="radio-icon">
          <img src={icon} alt="" />
        </div>

        <div>
          <h2>{title}</h2>

          <div className="divider">
            <span className="line" />

            <span />
          </div>

          <p>{description}</p>
        </div>
      </div>
    </Container>
  );
};

export default CardInfo;
