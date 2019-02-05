import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/Hero'
import PostsList from '../components/PostsList'

const Styled = styled.div``

const culture = ({ data }) => {
  const { heroHeader, heroSubheader } = data.pageInfo
  const posts = data.pagePosts.edges

  return (
    <Layout>
      <Styled>
        <Hero
          fluid={data.pageHeroImage.childImageSharp.fluid}
          header={heroHeader}
          subHeader={heroSubheader}
        />
        <PostsList posts={posts} />
      </Styled>
    </Layout>
  )
}

export default culture

export const query = graphql`
  query {
    pageInfo: contentfulCulturePage {
      heroHeader
      heroSubheader
    }
    pageHeroImage: file(relativePath: { eq: "culture.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1400
          duotone: { shadow: "#407ea1", highlight: "#dc773a" }

          toFormat: PNG
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pagePosts: allContentfulPost(filter: { category: { eq: "Culture" } }) {
      edges {
        node {
          title
          slug
          category
          cardImage {
            fluid(maxWidth: 800) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
