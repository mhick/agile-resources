// TODO: Display resources as cards
// TODO: Style value
// TODO: insert value variable into page context
// TODO: create route for resources e.g. `/resources/value/:value`

import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const ValueResources = ({ data }) => (
  <Layout>
    <h1>Resources</h1>
    {data.values.edges.map(({ node }, index) => (
        <p key={node.id}>{node.greaterValue}</p>
      ))}
    <ol>
      {data.resources.edges.map(({ node }, index) => (
        <li key={node.id}>{node.name}</li>
      ))}
    </ol>
    <Link to="/">Return to Agile Manifesto</Link>
  </Layout>
)

export const query = graphql`
query ResourceQuery($searchValue: Int = 1)
{resources:allResourcesYaml(filter: {values: {in: [$searchValue]}}) {
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
  values:allValuesYaml(filter: {value: {eq:$searchValue} },limit:1) {
    edges {
      node {
        id
        value
        greaterValue
        lesserValue
      }
    }
  }
}
`

export default ValueResources