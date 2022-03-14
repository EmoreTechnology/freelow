// eslint-disable-next-line import/order
// Dependencies
import React from "react";

// Styles
import { Container } from "./audio.styles";

// Assets
import light from "../../assets/ondas-sonoras-light.png";
import medium from "../../assets/ondas-sonoras-medium.png";
import dark from "../../assets/ondas-sonoras-dark.png";

// Utils
import IAudioProps from "../../utils/models/audio.model";

const Audio: React.FC<IAudioProps> = ({ appeareance }) => {
  return (
    <Container appeareance={appeareance}>
      <img className="dark" src={dark} alt="" />

      <img className="medium" src={medium} alt="" />

      <img className="light" src={light} alt="" />
    </Container>
  );
};

export default Audio;
