import * as React from "react"
import { RouteComponentProps, Link, LinkProps, LinkGetProps } from "@reach/router"

interface IState {}

interface IProps extends LinkProps {}

export class AppNavLink extends React.Component<IProps, IState> {
  getProps = (linkProps: LinkGetProps) => ({
    className: linkProps.isPartiallyCurrent ? "active" : "",
  })

  render() {
    return (
      <Link
        getProps={this.getProps}
        {...this.props}
      />
    )
  }
}
