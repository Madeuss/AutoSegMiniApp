import React from "react"
import { Link } from "react-router-dom"

import { Button } from "../../components/Button"
import "./styles.css"

//Assets
import home_img from "../../assets/img_responsive.png"
import marca from "../../assets/marca_mini_app.png"

export default function Home() {
  return (
    <>
      <div className="background-opacity" />
      <div className="home-container">
        <section className="home-images-section">
          <img src={home_img} alt="Devices example" />
          <img src={marca} alt="Devices example" />
        </section>

        <section className="home-buttons-section">
          <Link to="/signup">
            <Button backgroundColor="#EF7734" fontColor="#F9F4C2">
              Criar Conta
            </Button>
          </Link>
          <Link to="/login">
            <Button backgroundColor="#D3CE3D" fontColor="#574437">
              Entrar
            </Button>
          </Link>
        </section>
      </div>
    </>
  )
}
