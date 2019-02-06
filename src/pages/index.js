import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Hero from '../components/Hero'
import PostsList from '../components/PostsList'
import Instagram from '../components/Instagram'
import Newsletter from '../components/Newsletter'

import NavLink from '../components/styles/NavLink'

const Styled = styled.div`
  text-align: center;

  .newsletter-footer {
    height: calc(35vh + 47.5px);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .more {
    display: flex;
    justify-content: center;
    align-items: center;

    > * {
      margin-right: ${props => props.theme.spacing};
    }
  }
`

const IndexPage = ({ data, pageContext }) => {
  console.log(pageContext)
  const posts = data.indexPosts.edges
  const images = data.instagramFeed.edges
  const { heroHeader, heroSubheader, newsletterText } = data.homepage
  return (
    <Layout>
      <Styled>
        <Hero
          fluid={data.heroImage.childImageSharp.fluid}
          header={heroHeader}
          subHeader={heroSubheader}
          newsletter={true}
        />
        <main>
          <h3>Latest</h3>
          <PostsList posts={posts} />

          <h3>More</h3>
          <div className="more">
            <NavLink to="#">
              <h4>Food & Drink</h4>
            </NavLink>
            <NavLink to="#">
              <h4>Entertainment</h4>
            </NavLink>
            <NavLink to="#">
              <h4>Culture</h4>
            </NavLink>
          </div>

          <h3>Untrip on Instagram</h3>
          <Instagram images={images} />

          <NavLink to="#">
            <h3>More Instagram</h3>
          </NavLink>

          <div className="newsletter-footer">
            <div>
              <p>{newsletterText}</p>
              <Newsletter />
            </div>
          </div>
        </main>
      </Styled>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    homepage: contentfulHomePage {
      heroHeader
      heroSubheader
      newsletterText
    }
    heroImage: file(relativePath: { eq: "towers.jpg" }) {
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

    indexPosts: allContentfulPost(limit: 9) {
      edges {
        node {
          title
          slug
          postSubcategory {
            subcategory
          }
          cardImage {
            fluid(maxWidth: 800) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }

    instagramFeed: allInstaNode(limit: 9) {
      edges {
        node {
          id
          caption
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
