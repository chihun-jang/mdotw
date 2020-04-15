/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createFilePath } = require(`gatsby-source-filesystem`)

const path = require(`path`)



exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions


    const blogTemplate = path.resolve('./src/templates/blog-post.js')
    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    const result = await graphql(
        `
          query {
            allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      )
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: blogTemplate,
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.fields.slug,
            },
        })
    })
    console.log(JSON.stringify(result, null, 4))
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `posts` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}