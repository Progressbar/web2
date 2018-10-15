import * as React from "react"

interface IProps {
  href: string
}

export const ExternalLink: React.SFC<IProps> = ({ href, children }) => (
  <React.Fragment>
    <a target="_blank" href={href}>
      {children}
    </a>
  </React.Fragment>
)
