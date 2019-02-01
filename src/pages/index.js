import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Card from '../components/Card'
import NewsletterForm from '../components/NewsletterForm'

import Link from '../components/styles/Link'
import Icon from '../components/styles/Icon'

import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import twitter from '../images/twitter.svg'
import mail from '../images/mail.svg'

// TODO: change layout to grid-template-colums 1em 1fr(?) 1em. BC can span banners / itens full width if wanted

const Styled = styled.div`
  display: grid;
  grid-template-columns: 1em 1fr 1em;

  header {
    grid-column: 2;
    text-align: center;
    h3 {
      font-weight: lighter;
    }
  }
  main {
    margin-top: 3em;
    grid-column: 2;
  }

  .index-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
  }

  .social {
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .social-icons {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2em;
    > * {
      transition: all 0.2s ease-in-out;
      &:hover {
        transition: all 0.2s ease-in-out;
        transform: scale(1.2);
      }
    }
  }

  .newsletter {
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 57.6px;
  }
`

const IndexPage = ({ data }) => {
  const { edges } = data.indexCards

  return (
    <Layout>
      <Styled>
        <header>
          <h1>Untrip</h1>
          <h3>Inside Guide to What's Happening in KL</h3>
        </header>

        <main>
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
