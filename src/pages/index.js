import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <section className="section">
      <div className="container">
      <h1 className="title">Manifesto for Agile Software Development</h1>
      <h2 className="subtitle">
        Reprinted from{' '}
        <a href="https://agilemanifesto.org">AgileManifesto.org</a>.
      </h2>
      <div className="content">
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
      </div>
      <ul>
        {data.allSignersYaml.edges.map(({ node }, index) => (
          <li>{node.name}</li>
        ))}
      </ul>
      <Link to="/principles/">Twelve Principles of Agile Software</Link>
      </div>
    </section>
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
    }
  }
`

export default IndexPage
