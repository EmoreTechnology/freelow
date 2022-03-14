// Dependencies
import React from "react";

// Styles
import { Container } from "./navbar.styles";

// Assets
import logo from "../../assets/logo.jpg";

// Utils
import { INavbarProps } from "../../utils/models/navbar.model";

const Navbar: React.FC<INavbarProps> = ({
  assessments,
  contact,
  exclusivities,
  hrefAssessments,
  hrefContact,
  hrefExclusivities,
  hrefRegister,
  hrefUs,

  register,
  us,
}) => {
  return (
    <Container>
      <img src={logo} alt="" />

      <div className="section">
        <div className="links">
          <a href={hrefUs}>{us}</a>
          <a href={hrefExclusivities}>{exclusivities}</a>
          <a href={hrefAssessments}>{assessments}</a>
          <a href={hrefContact}>{contact}</a>
          <a href={hrefRegister}>{register}</a>
        </div>

        <button>Login</button>
      </div>
    </Container>
  );
};

export default Navbar;
