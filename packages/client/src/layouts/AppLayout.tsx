import * as React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Navbar, Alignment, NavbarDivider, ProgressBar, Text } from '@blueprintjs/core'

import { IsAuthenticated } from '../components/Auth'
import { NavbarLink } from '../components/NavbarLink'
class Renderer extends React.Component<any> {
  renderMainButtons = () => (
    <React.Fragment>
      <NavbarLink to="/cowork" title="❤️ Cowork" />
      <NavbarLink to="/donate" title="💸 Donate" />
      <NavbarLink to="/lab" title="⚡️ Lab" />
      {/* <NavbarLink to="/jobs" title="🔥 Jobs" /> */}
      <NavbarLink to="/events" title="📅 Events" />
    </React.Fragment>
  )

  renderInfoButtons = () => (
    <React.Fragment>
      {/* <NavbarLink to="/presskit" title="📰 Presskit" /> */}
      <NavbarLink to="/contact" title="🛰 Contact" />
      <NavbarLink to="/about" title="🤔 About" />
    </React.Fragment>
  )

  renderSessionButtons = () => (
    <React.Fragment>
      <IsAuthenticated
        NotAllowed={<NavbarLink to="/login" title="👋 Login" />}
        Allowed={
          <React.Fragment>
            <NavbarLink to="/add-credits" title="💦 Add credits" />
            <NavbarLink to="/order" title="⛩ Buy" />
            <NavbarLink to="/me" title="🎧 Me" />
          </React.Fragment>
        }
      />
    </React.Fragment>
  )

  renderFooter1 = () => (
    <React.Fragment>
      <Row>
        <Col xs={4}>
          <Text>Footer 1</Text>
        </Col>
        <Col xs={4}>
          <Text>Footer 1</Text>
        </Col>
        <Col xs={4}>
          <Text>Footer 1</Text>
        </Col>
      </Row>
    </React.Fragment>
  )

  renderFooter2 = () => (
    <React.Fragment>
      <Row>
        <Col xs={8}>
          <Text>Progressbar, Dunajska 14, Bratislava</Text>
          <Text>info@progressbar.sk</Text>
        </Col>
        <Col xs={4}>
          <a href="https://www.facebook.com/progressbar/">Facebook</a>
          <a href="https://www.instagram.com/progressbar_sk/">Instagram</a>
        </Col>
      </Row>
    </React.Fragment>
  )

  renderHeader = () => (
    <Row>
      <Col className="hidden-xs hidden-sm" xs={12}>
        <Navbar>
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>
              Progressbar
              <ProgressBar />
            </Navbar.Heading>
            <NavbarDivider />
            {this.renderMainButtons()}
          </Navbar.Group>
          <Navbar.Group align={Alignment.RIGHT}>
            {this.renderInfoButtons()}
            <NavbarDivider />
            {this.renderSessionButtons()}
          </Navbar.Group>
        </Navbar>
      </Col>
      <Col className="hidden-md hidden-lg hidden-xl" xs={12}>
        {this.renderMainButtons()}
        {this.renderInfoButtons()}
        {this.renderSessionButtons()}
      </Col>
    </Row>
  )

  renderContent = () => (
    <React.Fragment>
      <Row>
        <Col xs={12}>{this.props.children}</Col>
      </Row>
    </React.Fragment>
  )

  render() {
    return (
      <Grid fluid>
        {this.renderHeader()}
        {this.renderContent()}
        {this.renderFooter1()}
        {this.renderFooter2()}
      </Grid>
    )
  }
}

export const AppLayout = Renderer
