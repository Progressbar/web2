import * as React from "react"
import { RouteComponentProps } from "@reach/router"

import { AppLayout } from "../../../layouts"

interface IProps extends RouteComponentProps {}

export default class AccountPage extends React.Component<IProps> {
  render() {
    return (
      <AppLayout>
        <h1>AccountPage</h1>
      </AppLayout>
    )
  }
}
