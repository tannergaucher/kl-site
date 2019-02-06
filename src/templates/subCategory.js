import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Link from '../components/styles/Link'

import Layout from '../components/layout'
import Hero from '../components/Hero'
import PostsList from '../components/PostsList'

import { kebabCase } from 'lodash'

const Styled = styled.div`
  .filter {
    display: flex;
    justify-content: center;
  }
`

const subcategoryPage = ({ data }) => {
  const { category } = data
  const posts = data.postsBySubcategory.edges

  return (
    <Layout>
      <Styled>
        <Hero
          fluid={category.heroImage.fluid}
          header={category.heroHeader}
          subHeader={category.heroSubheader}
        />

        <div className="filter">
          {category.subcategories.map(subcategory => {
            return (
              <Link
                to={`/${kebabCase(category.category)}/${kebabCase(
                  subcategory.subcategory
                )}`}
              >
                <h3>{subcategory.subcategory}</h3>
              </Link>
            )
          })}
        </div>
        <PostsList posts={posts} />
      </Styled>
    </Layout>
  )
}

export default subcategoryPage

export const query = graphql`
  query($category: String!, $subcategory: String!) {
    category: contentfulCategoryPage(category: { eq: $category }) {
      category
      heroHeader
      heroSubheader
      heroImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      subcategories {
        subcategory
      }
    }
    postsBySubcategory: allContentfulPost(
      filter: { postSubcategory: { subcategory: { eq: $subcategory } } }
    ) {
      edges {
        node {
          title
          postSubcategory {
            subcategory
          }
          cardImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          slug
        }
      }
    }
  }
`
