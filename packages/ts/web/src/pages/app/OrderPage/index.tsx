import * as React from "react"
import { RouteComponentProps } from "@reach/router"

import { AppLayout } from "../../../layouts"

interface IProps extends RouteComponentProps {}

export default class OrderPage extends React.Component<IProps> {
  render() {
    return (
      <AppLayout>
        <h1>OrderPage</h1>
      </AppLayout>
    )
  }
}
