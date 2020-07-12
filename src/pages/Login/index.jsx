import React from "react"
import { Link, useHistory } from "react-router-dom"

import { Button } from "../../components/Button"
import { Span } from "../../components/ErrorSpan"
import "./styles.css"

//Assets
import marca from "../../assets/marca_mini_app.png"
import backarrow from "../../assets/seta.png"

import { useFormik } from "formik"
import * as Yup from "yup"

//Yup form validation schema
const validationSchema = Yup.object({
  name: Yup.string()
    .required(
      "Me diga como quer ser chamado =) (tamanho mínimo de 3 caracteres) "
    )
    .min(3, "Você tem certeza? me parece muito pequeno")
    .max(20, "Woow, muito grande, que tal me dizer somente seu primeiro nome")
    .notOneOf(["admin", "administrador"], "Esse sou eu... ¬¬"),
  password: Yup.string()
    .required(
      "Digite sua senha, que eu espero que não seja o seu nome :) (tamanho mínimo de 6 caracteres) "
    )
    .min(6, "Hmm, tente denovo com 6 caracteres"),
})

export default function Login() {
  const history = useHistory()

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema,
    onSubmit(values) {
      console.log(values)
      localStorage.setItem("userName", values.name)
      history.push("/profile")
    },
  })

  return (
    <>
      <div className="background-opacity" />
      <div className="background-div">
        <div className="login-container">
          <img id="marca-img" src={marca} alt="Devices example" />

          <section className="login-section">
            <Link id="seta" to="/">
              <img src={backarrow} alt="Back arrow icon" />
            </Link>
            <header className="form-header">
              <h1>Entrar</h1>
            </header>

            {/* FORM INPUTS */}
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-item">
                <input
                  cypress-test-id="inputnamelogin"
                  type="text"
                  name="name"
                  className="contact-input name-input"
                  required
                  placeholder="Nome"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                {errors.name ? <Span>{errors.name}</Span> : null}
              </div>
              <div className="form-item">
                <input
                  cypress-test-id="inputpasswordlogin"
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  className="contact-input password-input"
                  required
                  placeholder="Senha"
                  value={values.password || ""}
                  onChange={handleChange}
                />
                {errors.password ? <Span>{errors.password}</Span> : null}
              </div>
              <section className="signup-btn-section">
                <Button
                  id="login-btn"
                  type="submit"
                  backgroundColor="#D3CE3D"
                  fontColor="#574437"
                >
                  Entrar
                </Button>
              </section>
            </form>
          </section>
        </div>
      </div>
    </>
  )
}
