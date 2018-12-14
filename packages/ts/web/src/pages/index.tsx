import { Link } from "gatsby"
import React from "react"

import { StaticLayout } from "../layouts"

const IndexPage = () => (
  <StaticLayout>
    <h1>Welcome</h1>
    <Link to="/app">Go to App</Link>
  </StaticLayout>
)

export default IndexPage
