import * as React from "react"
import Helmet from "react-helmet"
import Container from "react-bootstrap/lib/Container"

// import { rhythm } from "../utils/typography"

import { ThemeProvider } from "../components/ThemeProvider"
import { Link } from "../components/Link"
import * as routes from "../constants/routes"

export const StaticLayout: React.SFC = ({ children }) => (
  <ThemeProvider>
    <Helmet>
      <meta charSet={`utf-8`} />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="format-detection" content="telephone=no" />
    </Helmet>
    <Container fluid={true}>
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
    </Container>
  </ThemeProvider>
)
