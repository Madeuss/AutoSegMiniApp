import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

// Pages import
import Home from "./pages/Home"

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
