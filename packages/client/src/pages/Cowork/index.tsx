import * as React from 'react'
import { Navbar, Alignment, Button } from '@blueprintjs/core'

export function Cowork() {
  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Button minimal>How It Works</Button>
        <Button minimal>Desks</Button>
        <Button minimal>Plans</Button>
        <Button minimal>Amenities</Button>
        <Button minimal>Directions</Button>
        <Button minimal>Places Around Our Cowork</Button>
        <Button minimal>Frequently Asked Questions</Button>
      </Navbar.Group>
    </Navbar>
  )
}
