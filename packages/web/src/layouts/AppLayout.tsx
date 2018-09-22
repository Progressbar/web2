import * as React from "react"
// @ts-ignore
import { rhythm } from "../utils/typography"
import Helmet from "react-helmet"

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
    {children}
  </div>
)
