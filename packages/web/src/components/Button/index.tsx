import * as React from "react"

interface IProps {
}

export const Button: React.SFC<IProps> = ({ children, ...rest }) => (
  <React.Fragment>
    <a className="site-button" {...rest}>
      {children}
    </a>
  </React.Fragment>
)
