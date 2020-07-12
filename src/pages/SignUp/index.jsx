import React from "react"
import { Link, useHistory } from "react-router-dom"

import { Button } from "../../components/Button"
import { Span } from "../../components/ErrorSpan"
import "./styles.css"

//Assets
import marca from "../../assets/marca_mini_app.png"
import camera from "../../assets/camera.png"
import backarrow from "../../assets/seta.png"

import { useFormik } from "formik"
import * as Yup from "yup"

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Como eu devo chamá-lo? ")
    .min(3, "Muito curto =(")
    .max(20, "Woow, muito grande, me diga somente seu primeiro nome")
    .notOneOf(["admin", "administrador"], ""),
  email: Yup.string()
    .required("Digite seu email")
    .email("Um email válido, por favor"),
  password: Yup.string()
    .required("Escolha um senha forte com no mínimo 6 caracteres ;)")
    .min(6, "Hmm, tente denovo com 6+ caracteres"),
})

export default function SignUp() {
  const history = useHistory()
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit(values) {
      localStorage.setItem("userName", values.name)
      history.push("/profile")
    },
  })

  return (
    <>
      <div className="background-opacity" />
      <div className="background-div">
        <div className="signup-container">
          <img id="marca-img" src={marca} alt="Devices example" />

          <section className="signup-section">
            <Link id="seta" to="/">
              <img src={backarrow} alt="Back arrow icon" />
            </Link>
            <header className="form-header">
              <img src={camera} alt="Devices example" />
              <h1>Criar Conta</h1>
            </header>

            {/* FORM INPUTS */}
            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="form-item">
                <input
                  cypress-test-id="inputnamesignup"
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
                  cypress-test-id="inputemailsignup"
                  type="text"
                  name="email"
                  className="contact-input email-input"
                  placeholder="Endereço de e-mail"
                  required
                  value={values.email || ""}
                  onChange={handleChange}
                />
                {errors.email ? <Span>{errors.email}</Span> : null}
              </div>
              <div className="form-item">
                <input
                  cypress-test-id="inputpasswordsignup"
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
                  id="sign-btn"
                  backgroundColor="#EF7734"
                  fontColor="#F9F4C2"
                  type="submit"
                >
                  Criar Conta
                </Button>
              </section>
            </form>
          </section>
        </div>
      </div>
    </>
  )
}
