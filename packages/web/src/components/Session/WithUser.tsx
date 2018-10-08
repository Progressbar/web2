import * as React from "react"
import { connect } from "react-redux"
import { RematchRootState, RematchDispatch } from "@rematch/core"

import { select, models } from "../../store"
import { firebase } from "../../firebase"

export interface OwnProps {
  children?: React.ReactNode
}

export interface OwnState {}

interface StateProps extends Partial<ReturnType<typeof mapState>> {}

interface DispatchProps extends Partial<ReturnType<typeof mapDispatch>> {}

type Props = StateProps & DispatchProps & OwnProps

class WithUserRenderer extends React.Component<Props, OwnState> {
  unsubscribe: () => void | undefined

  componentDidMount() {
    // const { setUser, reset } = this.props

    if (typeof window !== "undefined") {
      this.unsubscribe = firebase.auth.onAuthStateChanged(async (user) => {
        if (user) {
          this.props.setUser(user)
          this.props.setAccessToken(await user.getIdToken())
        } else {
          this.props.reset()
        }
      })
    }
  }

  componentWillUnmount() {
    if (typeof this.unsubscribe === "function") {
      this.unsubscribe()
    }
  }

  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>
  }
}

const mapState = (state: RematchRootState<models>) => ({
  user: select.session.user(state),
})

const mapDispatch = (dispatch: RematchDispatch<models>) => ({
  setUser: dispatch.session.setUser,
  setAccessToken: dispatch.session.setAccessToken,
  reset: dispatch.session.reset,
})

export default connect(
  mapState,
  mapDispatch as any
)(WithUserRenderer)
