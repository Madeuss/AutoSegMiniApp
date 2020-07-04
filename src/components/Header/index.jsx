import React from "react";

import { Nav } from "./styles";

//images
import marca_header from "../../assets/marca_app_header.png";
import avatar from "../../assets/avatar.png";

function Header() {
  const userName = localStorage.getItem("userName");

  return <Nav>
    <img id="profile-marca-img" src={marca_header} alt="marca" />
    <section className="profile-info-section">
      <img src={avatar} alt="Default profile avatar" />
      <p>{userName}</p>
    </section>
  </Nav>;
}

export default Header;