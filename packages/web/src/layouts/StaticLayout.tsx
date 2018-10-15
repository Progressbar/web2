import * as React from "react"

import { ThemeProvider } from "../components/ThemeProvider"
// import { Link } from "../components/Link"
import { Meta } from "../components/Meta"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
// import * as routes from "../constants/routes"

export const StaticLayout: React.SFC = ({ children }) => (
  <ThemeProvider>
    <Meta />
    <Header />
    <main>
      <div className="">
        {/* <div>
          <h1>StaticLayoutNav</h1>
          <div>
            <Link to={routes.COWORK}>Cowork</Link>
            <Link to={routes.DONATE}>Donate</Link>
            <Link to={routes.CONTACT}>Contact</Link>
          </div>
          <div>
            <Link to={routes.APPHOME}>App Home</Link>
          </div>
        </div> */}
        <div>{children}</div>
      </div>
    </main>
    <Footer />
  </ThemeProvider>
)
