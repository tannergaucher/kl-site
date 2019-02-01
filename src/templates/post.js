import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import PostCredit from '../components/PostCredit'

const Styled = styled.div`
  display: grid;
  margin-bottom: 5em;
  grid-template-columns: ${props => props.theme.spacing} 1fr ${props =>
      props.theme.spacing};

  header {
    grid-column: 2;
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
  const {
    title,
    author,
    category,
    tags,
    featuredImage,
    authorImage,
  } = data.contentfulPost
  // prettier-ignore
  const { html } = data.contentfulPost.childContentfulPostArticleTextNode.childMarkdownRemark

  return (
    <Layout>
      <Styled>
        <header>
          <h1>{title}</h1>
          <PostCredit
            author={author}
            authorImage={authorImage.fixed}
            datePublished="10/29/2019"
          />
        </header>
        <Img
          className="featured-image"
          fluid={featuredImage.fluid}
          style={{ height: '30vh' }}
        />
        <article>
          <div
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
        </article>
      </Styled>
    </Layout>
  )
}

export default post

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      author
      category
      tags
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
      authorImage {
        fixed(width: 50) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`
