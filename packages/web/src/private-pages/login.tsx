import * as React from "react"
import { connect } from "react-redux"
import { RematchRootState, RematchDispatch } from "@rematch/core"
import { Button } from "@blueprintjs/core"

import { select, models } from "../store"

export class Renderer extends React.Component<Props> {
  render() {
    return (
      <div>
        <div>Login</div>
        <div>
          <Button
            intent="success"
            onClick={() => {
              this.props.setFakeLogin(true)
              this.props.setFakeUser(true)
            }}
          >
            Login
          </Button>
        </div>
      </div>
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

interface Props extends Partial<ReturnType<typeof mapState>>, ReturnType<typeof mapDispatch> {}

export const Login = connect(
  mapState,
  mapDispatch as any
)(Renderer)
