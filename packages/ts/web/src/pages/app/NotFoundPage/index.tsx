import * as React from "react"
import { RouteComponentProps } from "@reach/router"

import { AppLayout } from "../../../layouts"

interface IProps extends RouteComponentProps {}

export default class NotFoundPage extends React.Component<IProps> {
  render() {
    return (
      <AppLayout>
        <h1>NotFoundPage</h1>
      </AppLayout>
    )
  }
}
