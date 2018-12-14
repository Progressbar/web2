import * as React from "react"
import { navigate, RouteComponentProps } from "@reach/router"
import { connect } from "react-redux"
import { RematchRootState } from "@rematch/core"

import { TUserRole } from "../../../common/types/User"
import { select, models } from "../store"

function isAllowed(props: AuthorizationStateProps) {
  const { roles, user } = props

  if (!roles || roles.length === 0) {
    return true
  }

  if (!user) {
    return false
  }

  return roles.includes(user.role)
}

const mapState = (state: RematchRootState<models>) => ({
  user: select.session.user(state),
})

interface AuthorizationStateProps extends Partial<ReturnType<typeof mapState>> {
  roles?: TUserRole[]
  component: React.ReactNode
  path: string
}

const AuthorizationState = connect(mapState)(function AuthorizationStateRenderer(props: AuthStateProps) {
  return props.render(isAllowed(props))
})

export interface WithAuthorizationProps {
  roles: TUserRole[]
  component: React.ReactNode
}

export function WithAuthorization(props: WithAuthorizationProps) {
  return <AuthorizationState roles={props.roles} component={props.component} />
}
