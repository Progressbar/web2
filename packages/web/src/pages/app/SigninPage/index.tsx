import React from "react"
import { connect } from "react-redux"
import { RematchRootState, RematchDispatch } from "@rematch/core"
import { RouteComponentProps } from "@reach/router"

import { select, models } from "../../../store"
import { AppLayout } from "../../../layouts"

export interface OwnProps {}

export interface OwnState {}

interface StateProps extends ReturnType<typeof mapState> {}

interface DispatchProps extends ReturnType<typeof mapDispatch> {}

type Props = RouteComponentProps & StateProps & DispatchProps & OwnProps

class SigninPageRenderer extends React.Component<Props, OwnProps> {
  login = () => {
    // this.props.setUser(null)
  }

  fetchUsers = () => {
    this.props.fetchUsers()
  }

  render() {
    return (
      <AppLayout>
        <h1>Signin</h1>
        <div>
          <button onClick={this.login}>Signin</button>
          <button onClick={this.fetchUsers}>Fetch users</button>
          <button
            onClick={() => {
              this.props.signupWithEmailAndPassword({
                email: "aaa@aaa.com",
                password: "aaaaaa",
              })
            }}
          >
            signup
          </button>
          <button
            onClick={() => {
              this.props.signupWithGoogle()
            }}
          >
            google
          </button>
        </div>
        <div>
          {this.props.user ? this.props.user.displayName : 'Logged out'}
          <button onClick={() => {
            this.props.signout()
          }}>signout</button>
        </div>
      </AppLayout>
    )
  }
}

const mapState = (state: RematchRootState<models>, ownProps: OwnProps) => ({
  user: select.session.user(state),
  users: select.users.all(state),
})

const mapDispatch = (dispatch: RematchDispatch<models>, ownProps: OwnProps) => ({
  setUser: dispatch.session.setUser,
  fetchUsers: dispatch.users.fetchAll,
  signupWithEmailAndPassword: dispatch.session.signupWithEmailAndPassword,
  signupWithGoogle: dispatch.session.signupWithGoogle,
  signout: dispatch.session.signout
})

export default connect(
  mapState,
  mapDispatch as any
)(SigninPageRenderer)
