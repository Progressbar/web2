import * as React from "react"
import { Router } from "@reach/router"

import * as routes from "../constants/routes"
import HomePage from "./app/HomePage"
import AccountPage from "./app/AccountPage"
import SigninPage from "./app/SigninPage"
import NotFoundPage from "./app/NotFoundPage"

class AppPage extends React.Component {
  render() {
    return (
      <Router>
        <HomePage path={routes.APPHOME} />
        <AccountPage path={routes.ACCOUNT} />
        <SigninPage path={routes.SIGNIN} />
        <NotFoundPage default={true} />
      </Router>
    )
  }
}

export default AppPage
