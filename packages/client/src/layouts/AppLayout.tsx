import * as React from 'react'

class Renderer extends React.Component<any> {
  render() {
    return <div>{this.props.children}</div>
  }
}

export const AppLayout = Renderer
