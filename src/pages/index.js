import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Manifesto from '../components/manifesto'

const IndexPage = ({ data }) => (
  <Layout>
    <section className="section">
      <Manifesto values={data.allValuesYaml.edges}></Manifesto>
      <div className="container">
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
