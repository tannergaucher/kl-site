const path = require('path')
const _ = require('lodash')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        posts: allContentfulPost {
          edges {
            node {
              title
              slug
              category {
                category
              }
            }
          }
        }
        categories: allContentfulCategoryPage {
          edges {
            node {
              category
              subcategories {
                subcategory
              }
            }
          }
        }
      }
    `)
      .then(result => {
        const posts = result.data.posts.edges
        const categories = result.data.categories.edges

        posts.forEach(post => {
          createPage({
            path: post.node.slug,
            component: path.resolve(`./src/templates/post.js`),
            context: {
              slug: post.node.slug,
            },
          })
        })

        categories.forEach(node => {
          console.log(node)
          const category = node.node.category
          createPage({
            path: `/${_.kebabCase(category)}`,
            component: path.resolve(`./src/templates/category.js`),
            context: {
              category: category,
            },
          })

          const subcategories = node.node.subcategories
          subcategories.forEach(node => {
            console.log('SUBCATEGORY', node.subcategory)
            createPage({
              path: `/${_.kebabCase(category)}/${_.kebabCase(
                node.subcategory
              )}`,
              component: path.resolve(`./src/templates/subcategory.js`),
              context: {
                category: category,
                subcategory: node.subcategory,
              },
            })
          })
        })
        resolve()
      })
      .catch(error => console.log(error))
  })
}
