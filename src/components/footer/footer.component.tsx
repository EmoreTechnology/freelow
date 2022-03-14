// Dependencies
import React from "react";

// Styles
import { Container } from "./footer.styles";

// Assets
import logo from "../../assets/logo.jpg";
import check from "../../assets/check-footer.png";
import twitter from "../../assets/twitter.png";
import tiktok from "../../assets/tik-tok.png";
import airplane from "../../assets/aviao-de-papel.png";
import instagram from "../../assets/instagram.png";
import discord from "../../assets/discordia.png";
import snapchat from "../../assets/snapchat.png";
import youtube from "../../assets/youtube.png";
import users from "../../assets/users.png";
import email from "../../assets/best-email.png";

// Utils
import { IFooterProps } from "../../utils/models/footer.model";

const Footer: React.FC<IFooterProps> = ({
  title,
  contactUs,
  seeNetwork,
  newsFirst,
  newsLast,
}) => {
  return (
    <Container>
      <div className="container">
        <img src={logo} alt="" />
        <div className="content">
          <div className="first-section">
            <span>{title}</span>

            <button>
              <span className="message">
                <img src={check} alt="" />
              </span>
              {contactUs}
            </button>
          </div>

          <div className="second-section">
            <span>{seeNetwork}</span>

            <div className="redes">
              <img src={twitter} alt="" />
              <img src={tiktok} alt="" />
              <img src={airplane} alt="" />
              <img src={youtube} alt="" />
              <img src={instagram} alt="" />
              <img src={discord} alt="" />
              <img src={snapchat} alt="" />
            </div>
          </div>

          <div className="tird-section">
            <div className="texts">
              <span>{newsFirst} </span>
              <span>{newsLast}</span>
            </div>

            <div className="inputs">
              <img src={users} alt="" />
              <input type="text" placeholder="Como quer ser chamado" />
            </div>

            <div className="inputs">
              <img src={email} alt="" />
              <input type="text" placeholder="Seu melhor e-mail" />
            </div>

            <div className="button">
              <button>Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
