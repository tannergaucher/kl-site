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
        const posts = result.data.posts.edges
        const categories = result.data.categories.edges

        posts.forEach(post => {
          createPage({
            path: `/post/${post.node.slug}`,
            component: path.resolve(`./src/templates/post.js`),
            context: {
              slug: post.node.slug,
            },
          })
        })

        categories.forEach(node => {
          const { category } = node.node
          // activity template page
          createPage({
            path: `${_.kebabCase(category)}/activity`,
            component: path.resolve(`./src/templates/activity.js`),
            context: {
              category: category,
              all: false,
            },
          })

          //tags template page
          createPage({
            path: `${_.kebabCase(category)}/tags`,
            component: path.resolve(`./src/templates/tags.js`),
            context: {
              category: category,
              all: false,
            },
          })

          //places template page
          createPage({
            path: `${_.kebabCase(category)}/places`,
            component: path.resolve(`./src/templates/places.js`),
            context: {
              category: category,
              all: false,
            },
          })

          //map template page
          createPage({
            path: `${_.kebabCase(category)}/map`,
            component: path.resolve(`./src/templates/map.js`),
            context: {
              category: category,
              all: false,
            },
          })
        })

        // create ALL pages
        createPage({
          path: `/all/activity`,
          component: path.resolve(`./src/templates/activity.js`),
          context: {
            all: true,
          },
        })

        createPage({
          path: `/all/tags`,
          component: path.resolve(`./src/templates/tags.js`),
          context: {
            all: true,
          },
        })

        resolve()
      })
      .catch(error => console.log(error))
  })
}
