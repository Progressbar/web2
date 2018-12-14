import * as React from "react"
import "modern-normalize"

import "../../scss/app.scss"

export const ThemeProvider: React.SFC = ({ children }) => (
  <React.Fragment>{children}</React.Fragment>
)
