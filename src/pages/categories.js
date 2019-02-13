import React from 'react'
import { graphql } from 'gatsby'
import { kebabCase } from 'lodash'

import Layout from '../components/layout'
import Link from '../components/styles/Link'

const categories = ({ data }) => {
  const { edges } = data.allContentfulCategory
  return (
    <Layout>
      <h2>Categories</h2>
      {edges.map(edge => {
        const { category } = edge.node
        return (
          <Link to={kebabCase(category)} key={category}>
            <h3>{category}</h3>
          </Link>
        )
      })}
    </Layout>
  )
}

export default categories

export const categoriesQuery = graphql`
  query {
    allContentfulCategory {
      edges {
        node {
          category
        }
      }
    }
  }
`
