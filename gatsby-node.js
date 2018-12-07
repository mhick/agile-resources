/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
var path = require('path')

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Create slug for each Value
  if (node.internal.type === `ValuesYaml`) {
    const slug = createFilePath({ node, getNode, basePath: `data` })
    createNodeField({
      node,
      name: `slug`,
      value: slug + node.value,
    })
  }
  // Create slug for each Principle
  if (node.internal.type === `PrinciplesYaml`) {
    const slug = createFilePath({ node, getNode, basePath: `data` })
    createNodeField({
      node,
      name: `slug`,
      value: slug + node.principle,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
      const valueTemplate = path.resolve('./src/pages/values.js')
      graphql(`
      {allValuesYaml {
        edges {
          node {
            value
            fields {
              slug
            }
          }
        }
      }}
      `).then(result => {
        result.data.allValuesYaml.edges.forEach(({ node }) => {
          createPage({
            path: node.fields .slug,
            component: valueTemplate,
            context: {
              valueId: node.value,
            },
          })
        })
        resolve()
      })
    })
  }