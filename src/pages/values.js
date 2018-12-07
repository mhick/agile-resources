// TODO: Display resources as cards
// TODO: Style value
// TODO: insert value variable into page context
// TODO: create route for resources e.g. `/resources/value/:value`

import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const Value = ({ data }) => (
  <Layout>
    {data.values.edges.map(({ node }, index) => (
        <div className="section">
          <h1 className="title">Value {node.value}</h1>
          <h2 key={node.id} className="subtitle">{node.greaterValue} over {node.lesserValue}</h2>
        </div>
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
query ResourceQuery($valueId: Int = 1)
{resources:allResourcesYaml(filter: {values: {in: [$valueId]}}) {
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
  values:allValuesYaml(filter: {value: {eq:$valueId} },limit:1) {
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

export default Value
