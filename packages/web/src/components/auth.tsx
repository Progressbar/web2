import * as React from "react"
import { navigate, RouterProps } from "@reach/router"
import { connect } from "react-redux"
import { RematchRootState } from "@rematch/core"

import { TUserRole, IUser } from "../../../common/types/User"
import { select, models } from "../store"

const mapState = (state: RematchRootState<models>, ownProps: AuthStateProps) => ({
  user: select.session.user(state),
  isAuthenticated: select.session.isAuthenticated(state)
})

interface AuthStateProps extends Partial<ReturnType<typeof mapState>>, RouterProps {
  roles?: TUserRole[]
  component: React.ReactNode
  user?: IUser | null
  isAuthenticated?: boolean
  path: string
}

function hasSession(props: AuthStateProps) {
  const { user, isAuthenticated } = props

  return user !== null && isAuthenticated === true
}

function hasRole(props: AuthStateProps) {
  const { roles, user } = props

  if (!roles || roles.length === 0) {
    return true
  }

  if (!user) {
    return false
  }

  return roles.includes(user.role)
}

function PrivateRouteRenderer(props: AuthStateProps) {
  const isOnLoginPage = location.pathname === `/app/login`
  const isAuthorized = hasSession(props) && hasRole(props)

  console.log(isOnLoginPage, isAuthorized)

  if (!isOnLoginPage && !isAuthorized) {
    navigate(`/app/login`)
    return null
  }

  // @ts-ignore
  return <Component {...rest} />
}

const PrivateRoute = connect(mapState)(PrivateRouteRenderer)

export default PrivateRoute
