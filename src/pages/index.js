import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Card from '../components/Card'
import NewsletterForm from '../components/NewsletterForm'

import Link from '../components/styles/Link'
import Icon from '../components/styles/Icon'

import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import twitter from '../images/twitter.svg'
import mail from '../images/mail.svg'

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
    h1 {
      font-weight: 300;
    }
    h3 {
      font-weight: lighter;
    }
  }

  main {
    margin-top: 6rem;
  }

  .section-title {
    text-align: center;
  }

  .index-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
    margin-left: ${props => props.theme.spacing};
    margin-right: ${props => props.theme.spacing};
  }

  .social {
    margin-left: ${props => props.theme.spacing};
    margin-right: ${props => props.theme.spacing};
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .social-icons {
    margin-left: 2em;
    margin-right: 2em;
    display: flex;
    justify-content: space-around;
  }

  .newsletter {
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: papayawhip;
    margin-bottom: 57.6px;
  }
`

const IndexPage = ({ data }) => {
  const { heroImage } = data.homepage

  const { edges } = data.indexCards

  return (
    <Layout>
      <Styled>
        <header className="banner">
          <Img
            fluid={heroImage.fluid}
            style={{
              height: 'calc(100vh - 50px - 57.6px)',
              filter: 'brightness(70%)',
            }}
          />
          <div className="banner-text">
            <h1>Untrip</h1>
            <h3>What's Happening in KL</h3>
          </div>
        </header>

        <main>
          <h3 className="section-title">Guide</h3>
          <section className="index-cards">
            {edges.map(post => {
              console.log('post', post)
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

          <div className="social">
            <h3>Follow Untrip</h3>
            <div className="social-icons">
              <Icon src={facebook} />
              <Icon src={instagram} />
              <Icon src={twitter} />
            </div>
          </div>

          <div className="newsletter">
            <Icon src={mail} />
            <h3>Stay in the Loop</h3>
            <NewsletterForm />
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
      heroImage {
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
