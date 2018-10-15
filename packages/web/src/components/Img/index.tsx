import * as React from "react"

// import * as GatsbyImg from "gatsby-image"
// import Image, { ImageProps } from "react-bootstrap/lib/image"
// interface IProps extends ImageProps {}

interface IProps {
  src: string
  alt?: string
}

export const Img: React.SFC<IProps> = ({ src, alt = "" }) => (
  <React.Fragment>
    <img src={src} alt={alt} />
  </React.Fragment>
)
