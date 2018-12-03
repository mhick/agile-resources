import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Manifesto from '../components/manifesto'
import Signers from '../components/signers'

const IndexPage = ({ data }) => (
  <Layout>
    <section className="section">
      <Manifesto values={data.allValuesYaml.edges}></Manifesto>
      <Signers signers={data.allSignersYaml.edges}></Signers>
      <Link to="/principles/">Twelve Principles of Agile Software</Link>
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
