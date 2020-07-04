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
    .required("Tell me the name or nick you used on signup =)")
    .min(3, "Are you sure? That one is so short =(")
    .max(20, "Woow, so long! tell me just your first name or nickname")
    .notOneOf(["admin", "administrador"], "Thats me ¬¬"),
  password: Yup.string()
    .required("Write your password that I hope isn't your name")
    .min(6, "Hmm, try again with 6/more characters"),
})

export default function Login() {
  const history = useHistory()
  // const [name, setName] = useState("");
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
            <Button
              id="login-btn"
              type="submit"
              backgroundColor="#D3CE3D"
              fontColor="#574437"
            >
              Entrar
            </Button>
          </form>
        </section>
      </div>
    </>
  )
}
