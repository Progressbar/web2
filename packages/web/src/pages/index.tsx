import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>Hi peoplee</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/app">Go to App</Link>
  </Layout>
)

export default IndexPage
