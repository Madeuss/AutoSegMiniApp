import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

// Pages import
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import NewList from "./pages/NewList"

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/list/new" exact component={NewList} />
      </Switch>
    </BrowserRouter>
  )
}
