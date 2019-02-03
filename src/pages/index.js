import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Card from '../components/Card'
import NewsletterForm from '../components/NewsletterForm'
import Link from '../components/styles/Link'
import Social from '../components/Social'

import Button from '../components/styles/Button'
import mail from '../images/mail.svg'

const Styled = styled.div`
  display: grid;
  grid-template-columns: 1em 1fr 1em;

  header {
    grid-column: 1 / -1;
    text-align: center;
    position: relative;

    .header-text {
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
    }

    h3 {
      font-weight: lighter;
    }
  }
  main {
    margin-top: 1em;
    grid-column: 2;
  }

  .index-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
    margin-bottom: ${props => props.theme.spacing};
  }

  .instagram-feed {
    grid-column: 2;
  }

  .newsletter {
    grid-column: 1 / -1;
    position: relative;
    margin-bottom: 47.5px;
  }

  /* TODO refactor into 1 hero banner class */
  .newsletter-text {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }
`

const IndexPage = ({ data }) => {
  const { edges } = data.indexCards
  const {
    heroHeader,
    heroSubheader,
    heroImage,
    newsletterText,
    newsletterImage,
  } = data.homepage

  return (
    <Layout>
      <Styled>
        <header>
          <Img
            fluid={heroImage.fluid}
            style={{ height: '35vh', filter: 'brightness(60%)' }}
          />
          <div className="header-text">
            <h1>{heroHeader}</h1>
            <h3>{heroSubheader}</h3>
            <Button>SIGN UP</Button>
            <Button>NEWSLETTER</Button>
          </div>
        </header>

        <main>
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
          {/* <Social /> */}
        </main>

        <div className="newsletter">
          <Img
            fluid={newsletterImage.fluid}
            style={{ height: '35vh', filter: 'brightness(60%)' }}
          />
          <div className="newsletter-text">
            <img src={mail} style={{ height: '35px', width: '35px' }} />
            <p>{newsletterText}</p>
            <NewsletterForm />
          </div>
        </div>
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
      newsletterText
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
