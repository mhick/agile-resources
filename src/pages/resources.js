// TODO: Query for resources matching values and principles
// TODO: Display resources as cards

import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const Resources = ({ data }) => (
  <Layout>
    <h1>Resources</h1>
    <p>
      Reprinted from <a href="https://agilemanifesto.org">AgileManifesto.org</a>
      .
    </p>
    <ol>
      {data.allResourcesYaml.edges.map(({ node }, index) => (
        <li key={node.id}>{node.name}</li>
      ))}
    </ol>
    <Link to="/">Return to Agile Manifesto</Link>
  </Layout>
)

export const query = graphql`
  query ResourceQuery {
    allResourcesYaml(filter: { values: { in: [1] } }) {
      edges {
        node {
          id
          name
          author {
            family
            given
          }
          url
          values
          principles
        }
      }
    }
  }
`

export default Resources
