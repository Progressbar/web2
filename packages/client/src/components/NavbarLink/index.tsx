import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@blueprintjs/core'
import { withRouter, RouteComponentProps } from 'react-router'

export interface Props extends RouteComponentProps {
  to: string
  title: string
}

export function Renderer(props: Props) {
  const selected = props.location.pathname === props.to
  return (
    <Link to={props.to}>
      <Button minimal active={selected}>
        {props.title}
      </Button>
    </Link>
  )
}

export const NavbarLink = withRouter(Renderer)
