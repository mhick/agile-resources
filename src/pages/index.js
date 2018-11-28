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
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const query = graphql`
  query ValuesQuery {
    allValuesYaml {
      edges {
        node {
          value
          greaterValue
          lesserValue
        }
      }
    }
  }
`

export default IndexPage
