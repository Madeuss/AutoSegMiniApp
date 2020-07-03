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
    .required("How may I call you? =)")
    .min(3, "So short =(")
    .max(20, "Woow, so long! tell me just your first name or nickname")
    .notOneOf(["admin", "administrador"], "'-'"),
  email: Yup.string()
    .required("Email is required")
    .email("A valid email, please"),
  password: Yup.string()
    .required("Choose a strong password with 6 characters min ;)")
    .min(6, "Hmm, try again with 6/more characters"),
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
      console.log(values)
      history.push("/profile")
    },
  })

  return (
    <>
      <div className="background-opacity" />
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
            {/* <Link > */}
            <Button
              id="sign-btn"
              backgroundColor="#EF7734"
              fontColor="#F9F4C2"
              type="submit"
            >
              Criar Conta
            </Button>
            {/* </Link> */}
          </form>
        </section>
      </div>
    </>
  )
}
