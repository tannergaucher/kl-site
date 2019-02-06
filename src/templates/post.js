import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Link from 'gatsby-link'

import Avatar from '../components/Avatar'
import Social from '../components/Social'
import Card from '../components/Card'

const Styled = styled.div`
  display: grid;
  margin-bottom: 5em;
  grid-template-columns: ${props => props.theme.spacing} 1fr ${props =>
      props.theme.spacing};

  header {
    grid-column: 2;
    h1 {
      line-height: 1;
    }
    p {
      margin: 0;
      margin-bottom: ${props => props.theme.spacing};
    }
  }
  .featured-image {
    grid-column: 1 / -1;
  }

  article {
    margin-top: ${props => props.theme.spacing};
    grid-column: 2;
  }
`

const post = ({ data }) => {
  const { post } = data
  const { featuredPosts } = data.featuredPosts.edges[0].node

  // prettier-ignore
  const { html } = post.childContentfulPostArticleTextNode.childMarkdownRemark

  return (
    <Layout>
      <Styled>
        <header>
          <h4>{post.postSubcategory.subcategory}</h4>
          <h1>{post.title} </h1>

          <Avatar
            author={post.postAuthor.name}
            authorImage={post.postAuthor.avatarImage.fluid}
            datePublished={post.createdAt}
          />

          <p>{post.introSentence}</p>
          <Social className="social" />
        </header>

        <Img
          className="featured-image"
          fluid={post.featuredImage.fluid}
          style={{ height: '300px' }}
        />

        <article>
          <div
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
          <h3>Share the article</h3>
          <Social />
          <div className="post-links">
            <h3>Similar</h3>
            {/* {similarPosts.map(similarPost => (
              <div style={{ marginBottom: '1em' }}>
                <Link to={`/guide/${similarPost.slug}`} key={similarPost.slug}>
                  <Card
                    title={similarPost.title}
                    category={similarPost.category}
                    fluid={similarPost.cardImage.fluid}
                  />
                </Link>
              </div>
            ))} */}
            <h3>Featured (will change to popular with more content added)</h3>
            {featuredPosts.map(featuredPost => (
              <div style={{ marginBottom: '1em' }}>
                <Link to={`/guide/${featuredPost.slug}`}>
                  <Card
                    title={featuredPost.title}
                    subcategory={featuredPost.postSubcategory.subcategory}
                    fluid={featuredPost.featuredImage.fluid}
                  />
                </Link>
              </div>
            ))}
          </div>
        </article>
      </Styled>
    </Layout>
  )
}

export default post

export const pageQuery = graphql`
  query($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      postSubcategory {
        subcategory
      }
      postAuthor {
        name
        avatarImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
      introSentence
      createdAt(formatString: "MM.DD.YYYY")
      childContentfulPostArticleTextNode {
        childMarkdownRemark {
          html
        }
      }
      featuredImage {
        fluid(maxWidth: 1400) {
          ...GatsbyContentfulFluid
        }
      }
    }

    featuredPosts: allContentfulFeaturedPosts {
      edges {
        node {
          featuredPosts {
            title
            slug
            postSubcategory {
              subcategory
            }
            featuredImage {
              fluid(maxWidth: 800) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  }
`
