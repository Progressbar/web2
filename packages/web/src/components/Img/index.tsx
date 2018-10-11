import * as React from "react"
// import * as GatsbyImg from "gatsby-image"

import Image, { ImageProps } from "react-bootstrap/lib/image"

interface IProps extends React.SFC, ImageProps {}

export const Img: IProps = props => <Image {...props} />
