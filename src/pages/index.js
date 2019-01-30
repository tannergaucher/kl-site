import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Mail } from 'styled-icons/feather/Mail'

import Layout from '../components/layout'
import Card from '../components/Card'
import NewsletterForm from '../components/NewsletterForm'

import Link from '../components/styles/Link'

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

  .description,
  .product {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .index-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
  }

  .newsletter {
    h3 {
      text-transform: uppercase;
      font-weight: lighter;
    }
  }
`

const IndexPage = ({ data }) => {
  const {
    slug,
    heroHeader,
    heroSubheader,
    heroImage,
    descriptionHeader,
    descriptionSubheader,
    descriptionText,
    productHeader,
    productSubheader,
    productText,
    newsletterHeader,
    newsletterImage,
  } = data.homepage

  const { edges } = data.indexCards

  return (
    <Layout>
      <Styled>
        <header className="banner">
          <Img
            fluid={heroImage.fluid}
            style={{ height: '100vh', filter: 'brightness(70%)' }}
          />
          <div className="banner-text">
            <h1>{heroHeader}</h1>
            <h3>{heroSubheader}</h3>
          </div>
        </header>

        <main>
          <section className="description">
            <h3>{descriptionHeader}</h3>
            <h5>{descriptionSubheader}</h5>
            <p>{descriptionText}</p>
            <br />
          </section>

          <section className="index-cards">
            {edges.map(post => {
              const { title, category, cardImage, slug } = post.node
              return (
                <Link to={`/guide/${slug}`} key={slug}>
                  <Card
                    title={title}
                    category={category}
                    fluid={cardImage.fluid}
                  />
                </Link>
              )
            })}
          </section>

          <section className="product">
            <h3>{productHeader}</h3>
            <h5>{productSubheader}</h5>
            <p>{productText}</p>
            <br />
          </section>
        </main>

        <section className="newsletter banner">
          <Img
            style={{ height: '50vh', filter: 'brightness(95%)' }}
            fluid={newsletterImage.fluid}
          />
          <div className="banner-text">
            <Mail size={25} />
            <h3>{newsletterHeader}</h3>
            <NewsletterForm />
          </div>
        </section>
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
      heroImage {
        fluid(maxWidth: 1400) {
          ...GatsbyContentfulFluid
        }
      }
      descriptionHeader
      descriptionSubheader
      descriptionText
      productHeader
      productSubheader
      productText
      newsletterHeader
      newsletterImage {
        fluid(maxWidth: 1400) {
          ...GatsbyContentfulFluid
        }
      }
    }

    indexCards: allContentfulPost {
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
