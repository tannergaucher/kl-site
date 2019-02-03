const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPost {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `)
      .then(result => {
        const posts = result.data.allContentfulPost.edges
        posts.forEach(post => {
          createPage({
            path: `/guide/${post.node.slug}`,
            component: path.resolve(`./src/templates/post.js`),
            // gets passed in as variable in graphql page query
            context: {
              slug: post.node.slug,
            },
          })
        })
        resolve()
      })
      .catch(reject => console.log(error(reject)))
  })
}
