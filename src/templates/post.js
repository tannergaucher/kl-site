import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

import Img from 'gatsby-image'

const Styled = styled.div`
  .banner {
    position: relative;
  }

  .banner-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-shadow: black 5px 5px 15px;
    color: white;
  }

  article {
    padding-left: ${props => props.theme.spacing};
    padding-right: ${props => props.theme.spacing};
  }
`

const post = ({ data }) => {
  const { title, author, category, tags, featuredImage } = data.contentfulPost
  // prettier-ignore
  const { html } = data.contentfulPost.childContentfulPostArticleTextNode.childMarkdownRemark

  return (
    <Layout>
      <Styled>
        <header className="banner">
          <Img fluid={featuredImage.fluid} style={{ height: '60vh' }} />
          <div className="banner-text">
            <h1>{title}</h1>
            <h5>{category}</h5>
            <h6>{tags}</h6>
            <h6>By {author}</h6>
          </div>
        </header>
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
    }
  }
`
