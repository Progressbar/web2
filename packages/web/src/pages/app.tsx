import * as React from "react"
import { Router } from "@reach/router"

import PrivateRoute from "../components/auth"

// import Purchase from "../private-pages/purchase"
import Me from "../private-pages/me"
// import Order from "../private-pages/order"

const AppPage: React.SFC = () => (
  <Router>
    {/* <Purchase path="/purchase" component={Purchase} /> */}
    <PrivateRoute path="/me" component={Me} />
    {/* <Order path="/order" component={Order} /> */}
  </Router>
)

export default AppPage
