import * as React from "react"
import { RouteComponentProps } from "@reach/router"

import { AppLayout } from "../../../layouts"

interface IProps extends RouteComponentProps {}

export default class SignupPage extends React.Component<IProps> {
  render() {
    return (
      <AppLayout>
        <h1>SignupPage</h1>
      </AppLayout>
    )
  }
}
