// Dependencies
import React from "react";

// Styles
import { Container } from "./header.styles";

// Assets
import iconMen from "../../assets/icon-men.jpg";
import iconWoman from "../../assets/icon-woman.jpg";
import check from "../../assets/check.png";
import Audio from "../audio/audio.component";
import email from "../../assets/o-email.png";
import lightBulb from "../../assets/light-bulb.png";

const Header: React.FC = () => {
  return (
    <Container>
      <div className="first-section">
        <div className="retangle">
          <div className="eclipse">
            <img src={email} alt="" />
          </div>
        </div>

        <img src={iconWoman} alt="" />
      </div>

      <div className="second-section">
        <div className="title">
          <p>
            <div className="boll">
              <img src={check} alt="" />
            </div>
            <span>__</span>
            Enconte o <span className="Palavra">projeto perfeito</span> para
            trabalhar e se desenvolver
          </p>
        </div>

        <div className="subtitle">
          <div className="first-line">
            <p>Crescer financeiramente com freelas e</p>

            <span className="boll">
              <img src={lightBulb} alt="" />
            </span>
          </div>

          <p>ainda se atualizar em uma mesma plataforma?</p>

          <div className="buttons">
            <button>Sou Feelancer</button>
            <button>Quero contratar</button>
          </div>
        </div>
      </div>

      <div className="third-section">
        <img src={iconMen} alt="" />

        <Audio appeareance="80px 0 0 80px" />
      </div>
    </Container>
  );
};

export default Header;
