import * as React from "react"
import cx from "classnames"

import { ThemeProvider } from "../components/ThemeProvider"
import { Meta } from "../components/Meta"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export const StaticLayout: React.SFC = ({ children }) => (
  <ThemeProvider>
    <Meta />
    <Header />
    <main role="main" aria-label="content" className={cx("site-main")}>
      {children}
    </main>
    <Footer />
  </ThemeProvider>
)
