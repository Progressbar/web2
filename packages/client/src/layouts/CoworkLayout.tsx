import * as React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Navbar, Alignment, Classes } from '@blueprintjs/core'

import { NavbarLink } from '../components/NavbarLink'

export function CoworkLayout(props: any) {
  return (
    <React.Fragment>
      <Row>
        <Col xs={12}>
          <Navbar className={Classes.DARK}>
            <Navbar.Group align={Alignment.LEFT}>
              <NavbarLink to="/cowork/how" title="How It Works" />
              <NavbarLink to="/cowork/desks" title="Desks" />
              <NavbarLink to="/cowork/plans" title="Plans" />
              <NavbarLink to="/cowork/amenities" title="Amenities" />
              <NavbarLink to="/cowork/directions" title="Directions" />
              <NavbarLink to="/cowork/nearby" title="Places Around Our Cowork" />
              <NavbarLink to="/cowork/faq" title="Frequently Asked Questions" />
            </Navbar.Group>
          </Navbar>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>{props.children}</Col>
      </Row>
    </React.Fragment>
  )
}
