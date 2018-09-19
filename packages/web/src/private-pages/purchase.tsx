import React from "react"

import Layout from "../components/layout"

const PurchasePage: React.SFC = () => (
  <Layout>
    <h1>Purchase</h1>
    <div>
    <div>Meeting room #1, pass, space</div>
      <div>On this screen admin, can purchase for someone else</div>
      <div>On this screen company, can purchase for users</div>
      <div>Active purchases, historical</div>
    </div>
  </Layout>
)

export default PurchasePage
