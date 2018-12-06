import React from 'react'
import { render } from 'react-dom'
import { Link, graphql } from 'gatsby'
import { Router } from '@reach/router'
import 'bulma/css/bulma.css'

import Layout from '../components/layout'
import Manifesto from '../components/manifesto'
import Signers from '../components/signers'
import Principles from './principles'
import Value from './values'

const App = ({ children }) => <Layout children={children} />

const Home = ({ data }) => (
  <Layout>
    <section className="section">
      <Manifesto values={data.allValuesYaml.edges} />
      <div className="section">
        <Signers signers={data.allSignersYaml.edges} />
      </div>
      <Link to="principles">Twelve Principles of Agile Software</Link>
    </section>
  </Layout>
)

// TODO: Do I even need @reach/router? 
render(
  <Router>
    <App path="/">
      <Home path="/" />
      <Principles path="principles" />
      <Value path="values">
        <Value path=":valueId" />
      </Value>
    </App>
  </Router>,
  document.getElementById('___gatsby')
)

export const query = graphql`
  query HomePageQuery {
    allSignersYaml {
      edges {
        node {
          id
          name
          twitter
          website
          amazon
          wikipedia
        }
      }
    }
    allValuesYaml {
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

export default Home
