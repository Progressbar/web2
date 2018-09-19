import * as React from "react"
import { Router } from "@reach/router"

import Purchase from "../private-pages/purchase"
import Me from "../private-pages/me"
import Order from "../private-pages/order"

const AppPage: React.SFC = () => (
  <Router>
    {/* <Purchase path="/purchase" component={Purchase} />
    <Me path="/me" component={Me} />
    <Order path="/order" component={Order} /> */}
  </Router>
)

export default AppPage
