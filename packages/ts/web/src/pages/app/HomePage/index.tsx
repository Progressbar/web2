import * as React from "react"
import { RouteComponentProps } from "@reach/router"

import { AppLayout } from "../../../layouts"

interface IProps extends RouteComponentProps {}

export default class HomePage extends React.Component<IProps> {
  render() {
    return (
      <AppLayout>
        <h1>HomePage</h1>
        <div>Users</div>
      </AppLayout>
    )
  }
}
