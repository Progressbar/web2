import * as React from "react"
// @ts-ignore
// import { rhythm } from "../utils/typography"
import Helmet from "react-helmet"
import { ThemeProvider, theme } from "@hackclub/design-system"

import { Link } from "../components/Link"
import * as routes from "../constants/routes"

// import Header from "./header"
// import "./layout.css"

export const StaticLayout: React.SFC = ({ children }) => (
  <div
    // style={{
    //   margin: `0 auto`,
    //   marginBottom: rhythm(1.5),
    //   marginTop: rhythm(1.5),
    //   maxWidth: 650,
    //   paddingLeft: rhythm(3 / 4),
    //   paddingRight: rhythm(3 / 4),
    // }}
  >
    <div>
      <h1>StaticLayoutNav</h1>
      <div>
        <Link to={routes.COWORK}>Cowork</Link>
        <Link to={routes.DONATE}>Donate</Link>
        <Link to={routes.CONTACT}>Contact</Link>
      </div>
      <div>
        <Link to={routes.APPHOME}>App Home</Link>
      </div>
    </div>
    <div>{children}</div>
  </div>
)
