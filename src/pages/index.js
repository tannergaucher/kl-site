import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import FullCard from '../components/FullCard'
import NewsletterForm from '../components/NewsletterForm'
import Link from '../components/styles/Link'
import Instagram from '../components/Instagram'

import mail from '../images/mail.svg'

const Styled = styled.div`
  display: grid;
  grid-template-columns: 1em 1fr 1em;

  .hero {
    position: relative;
    grid-column: 1 / -1;
    text-align: center;
    position: relative;
    color: white;

    .hero-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
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

  .instagram-gallery {
    h3 {
      margin-left: ${props => props.theme.spacing};
    }
    grid-column: 1 / -1;
  }

  .newsletter {
    grid-column: 1 / -1;
    position: relative;
    margin-bottom: 47.5px;
    height: 35vh;
    background: black;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
  }
`

const IndexPage = ({ data }) => {
  const { edges } = data.indexCards
  const { heroHeader, heroSubheader, newsletterText } = data.homepage

  return (
    <Layout>
      <Styled>
        <header className="hero">
          <Img
            fluid={data.heroImage.childImageSharp.fluid}
            style={{ height: 'calc(100vh - 47.5px)' }}
          />

          <div className="hero-text">
            <h1>{heroHeader}</h1>
            <h3>{heroSubheader}</h3>

            <form>
              <input />
              <button>Get Newsletter</button>
            </form>
            <button>Sign in</button>
          </div>
        </header>

        <main>
          <h3>Latest</h3>
          <section className="index-cards">
            {edges.map(post => {
              const { title, category, cardImage, slug } = post.node
              return (
                <Link to={`/guide/${slug}`} key={slug}>
                  <FullCard
                    title={title}
                    category={category}
                    fluid={cardImage.fluid}
                  />
                </Link>
              )
            })}
          </section>
        </main>

        <section className="instagram-gallery">
          <h3>Untrip on Instagram</h3>
          <Instagram />
        </section>

        <div className="newsletter">
          <img src={mail} style={{ height: '35px', width: '35px' }} />
          <h6>{newsletterText}</h6>
          <NewsletterForm />
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
      newsletterText
    }

    heroImage: file(relativePath: { eq: "towers.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1400
          duotone: { shadow: "#665f52", highlight: "#5f00c9", opacity: 46 }
          toFormat: PNG
        ) {
          ...GatsbyImageSharpFluid
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
