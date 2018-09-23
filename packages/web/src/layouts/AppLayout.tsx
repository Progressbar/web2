import * as React from "react"
// @ts-ignore
import { rhythm } from "../utils/typography"
import Helmet from "react-helmet"

import { AppNavLink } from "../components/AppNavLink"
import * as routes from "../constants/routes"
import { StaticLayout } from "./StaticLayout"
import { WithUser } from "../components/Session"

// import Header from "./header"
// import "./layout.css"

export const AppLayout: React.SFC = ({ children }) => (
  <div
    style={{
      margin: `0 auto`,
      marginBottom: rhythm(1.5),
      marginTop: rhythm(1.5),
      maxWidth: 650,
      paddingLeft: rhythm(3 / 4),
      paddingRight: rhythm(3 / 4),
    }}
  >
    <WithUser>
      <div>
        <h1>AppLayoutNav</h1>
        <div>
          <AppNavLink to={routes.APPHOME}>Home</AppNavLink>
        </div>
        <div>
          <AppNavLink to={routes.SIGNIN}>Signin</AppNavLink>
        </div>
        <div>
          <AppNavLink to={routes.ACCOUNT}>Account</AppNavLink>
        </div>
      </div>
      <div>{children}</div>
    </WithUser>
  </div>
)
