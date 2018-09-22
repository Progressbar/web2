import * as React from "react"
import { RouteComponentProps } from "@reach/router"

import { AppLayout } from "../../../layouts"

interface IProps extends RouteComponentProps {}

export default class PurchasePage extends React.Component<IProps> {
  render() {
    return (
      <AppLayout>
        <h1>PurchasePage</h1>
        <div>
          <p>Meeting room #1, pass, space</p>
          <p>On this screen admin, can purchase for someone else</p>
          <p>On this screen company, can purchase for users</p>
          <p>Active purchases, historical</p>
        </div>
      </AppLayout>
    )
  }
}
