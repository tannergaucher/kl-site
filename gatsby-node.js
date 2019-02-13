const path = require('path')
const _ = require('lodash')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      query {
        posts: allContentfulPost {
          edges {
            node {
              title
              slug
            }
          }
        }
        categories: allContentfulCategory {
          edges {
            node {
              category
            }
          }
        }
      }
    `)
      .then(result => {
        const { data } = result
        const posts = data.posts.edges
        const categories = data.categories.edges

        posts.map(edge => {
          const { slug } = edge.node
          createPage({
            path: `/${slug}`,
            component: path.resolve(`./src/templates/post.js`),
            context: {
              slug,
            },
          })
        })

        categories.map(edge => {
          const { category } = edge.node
          createPage({
            path: `/${_.kebabCase(category)}`,
            component: path.resolve(`./src/templates/category.js`),
            context: {
              category,
            },
          })
        })

        resolve()
      })
      .catch(error => console.log(error))
  })
}
