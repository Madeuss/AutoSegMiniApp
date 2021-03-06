import React from "react"
import { Link } from "react-router-dom"

import { Nav } from "./styles"

//images
import marca_header from "../../assets/marca_app_header.png"
import avatar from "../../assets/avatar.png"

function Header() {
  const userName = localStorage.getItem("userName")

  return (
    <Nav>
      <div>
        <Link to="/profile">
          <img id="profile-marca-img" src={marca_header} alt="marca" />
        </Link>
        <section className="profile-info-section">
          <Link to="/profile">
            <img src={avatar} alt="Default profile avatar" />
          </Link>
          <p>{userName}</p>
        </section>
      </div>
    </Nav>
  )
}

export default Header
