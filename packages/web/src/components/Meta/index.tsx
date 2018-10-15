import * as React from "react"
import Helmet from "react-helmet"

export const Meta: React.SFC = () => (
  <Helmet>
    <meta charSet={`utf-8`} />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <title>Progressbar</title>
    <meta name="description" content="Progressbar" />
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Titillium+Web" rel="stylesheet" />
  </Helmet>
)
