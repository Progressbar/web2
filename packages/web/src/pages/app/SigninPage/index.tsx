import React from "react"
import { connect } from "react-redux"
import { RematchRootState, RematchDispatch } from "@rematch/core"
import { RouteComponentProps } from "@reach/router"

import { select, models } from "../../../store"
import { AppLayout } from "../../../layouts"

interface IProps
  extends RouteComponentProps,
    Partial<ReturnType<typeof mapState>>,
    Partial<ReturnType<typeof mapDispatch>> {}

class SigninPageRenderer extends React.Component<IProps> {
  login = () => {
    this.props.setFakeLogin(true)
    this.props.setFakeUser(true)
  }

  render() {
    return (
      <AppLayout>
        <h1>Signin</h1>
        <div>
          <button onClick={this.login}>Signin</button>
        </div>
      </AppLayout>
    )
  }
}

const mapState = (state: RematchRootState<models>) => ({
  user: select.session.user(state),
})

const mapDispatch = (dispatch: RematchDispatch<models>) => ({
  setFakeLogin: dispatch.session.setIsAuthenticated,
  setFakeUser: dispatch.session.setUser,
})

const SigninPage = connect(
  mapState,
  mapDispatch as any
)(SigninPageRenderer)

export default SigninPage
