// TODO: Query for resources matching values and principles
// TODO: Display resources as cards

import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const Resources = ({ data }) => (
  <Layout>
    <h1>Twelve Principles of Agile Software</h1>
    <p>
      Reprinted from <a href="https://agilemanifesto.org">AgileManifesto.org</a>
      .
    </p>
    <ol>
      {data.allPrinciplesYaml.edges.map(({ node }, index) => (
        <li key={node.id}>{node.text}</li>
      ))}
    </ol>
    <Link to="/">Return to Agile Manifesto</Link>
  </Layout>
)

export const query = graphql`
  query ResourceQuery {
    allPrinciplesYaml {
      edges {
        node {
          id
          text
        }
      }
    }
  }
`

export default Resources
