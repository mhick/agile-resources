import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Manifesto for Agile Software Development</h1>
    <p>
      Reprinted from <a href="https://agilemanifesto.org">AgileManifesto.org</a>
      .
    </p>
    <p>
      We are uncovering better ways of developing software by doing it and
      helping others do it.
    </p>
    <p>Through this work we have come to value:</p>
    <ul>
      {data.allValuesYaml.edges.map(({ node }, index) => (
        <li>
          <strong>{node.greaterValue}</strong> over {node.lesserValue}
        </li>
      ))}
    </ul>
    <p>
      That is, while there is value in the items on the right, we value the
      items on the left more.
    </p>
    <ul>
    {data.allSignersYaml.edges.map(({ node }, index) => (
        <li>{node.name}</li>
      ))}
    </ul>
    <Link to="/principles/">Twelve Principles of Agile Software</Link>
  </Layout>
)

export const query = graphql`
query HomePageQuery {
  allSignersYaml {
  edges {
    node {
      id
      name
    }
  }
}
allValuesYaml {
  edges {
    node {
      id
      greaterValue
      lesserValue
    }
  }
}}
`

export default IndexPage
