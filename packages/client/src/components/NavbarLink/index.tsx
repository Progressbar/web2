import * as React from 'react'
import { Button } from '@blueprintjs/core'
import { withRouter, RouteComponentProps } from 'react-router'

export interface Props extends RouteComponentProps {
  to: string
  title: string
}

export function Renderer(props: Props) {
  const { location, to, history, title } = props
  const selected = location.pathname === to

  return (
    <Button minimal active={selected} onClick={() => history.push(to)}>
      {title}
    </Button>
  )
}

export const NavbarLink = withRouter(Renderer)
