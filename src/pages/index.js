import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Manifesto for Agile Software Development</h1>
    <p>Reprinted from <a href="https://agilemanifesto.org">AgileManifesto.org</a>.</p>
    <p>We are uncovering better ways of developing software by doing it and helping others do it.</p>
    <p>Through this work we have come to value:</p>
    <ul>
      <li><strong>Individuals and interactions</strong> over processes and tools</li>
      <li><strong>Working software</strong> over comprehensive documentation</li>
      <li><strong>Customer collaboration</strong> over contract negotiation</li>
      <li><strong>Responding to change</strong> over following a plan</li>
    </ul>
    <p>That is, while there is value in the items on the right, we value the items on the left more.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
