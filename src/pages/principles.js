import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const PrinciplesPage = ({ data }) => (
  <Layout>
    <h1>Twelve Principles of Agile Software</h1>
    <p>
      Reprinted from <a href="https://agilemanifesto.org">AgileManifesto.org</a>
      .
    </p>
    <ol>
      {data.allPrinciplesYaml.edges.map(({ node }, index) => (
        <li>{node.text}</li>
      ))}
    </ol>
    <Link to="/">Return to Agile Manifesto</Link>
  </Layout>
)

export const query = graphql`
  query PrinciplesQuery {
    allPrinciplesYaml {
      edges {
        node {
          text
        }
      }
    }
  }
`

export default PrinciplesPage
