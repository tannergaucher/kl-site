import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Mail } from 'styled-icons/feather/Mail'

import Layout from '../components/layout'
import Card from '../components/Card'
import Form from '../components/styles/Form'
import Button from '../components/styles/Button'

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
  }

  main {
    display: flex;
    flex-direction: column;
    padding-left: 1em;
    padding-right: 1em;
  }

  .cards-container {
    display: grid;
    grid-row-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <Styled>
      <div className="banner">
        <Img
          fluid={data.bannerImage1.childImageSharp.fluid}
          style={{ height: '100vh', filter: 'brightness(70%)' }}
        />
        <div className="banner-text">
          <h1>KL Inside Guide</h1>
          <h3>We do cool things, wow</h3>
        </div>
      </div>

      <main>
        <section>
          <h3>Insider's Guide</h3>
          <h5>Find out what's happening</h5>
          <h5>👩‍🎨 🍲 🍾 👨‍🎤</h5>
          <br />
        </section>

        <section>
          <div className="cards-container">
            <Card
              category="food"
              title="Tanner's Pizza Bangsar"
              fluid={data.cardImage1.childImageSharp.fluid}
            />

            <Card
              category="Festivals"
              title="Urbanscapes X Mr. D.I.Y. fest"
              fluid={data.cardImage2.childImageSharp.fluid}
            />

            <Card
              category="Music"
              title="+2b Retirement Show"
              fluid={data.cardImage3.childImageSharp.fluid}
            />

            <Card
              category="Nightlife"
              title="Secret Bars of Jalan Tengirri"
              fluid={data.cardImage4.childImageSharp.fluid}
            />

            <Card
              category="Food"
              title="Baba Low's: Best Nyonya in KL, furriel"
              fluid={data.cardImage5.childImageSharp.fluid}
            />
          </div>
        </section>

        <section>
          <h3>Our Service</h3>
          <h5>Some Product Info Here</h5>
          <h5>👩‍🎨 🍲 🍾 👨‍🎤</h5>
          <br />
        </section>
      </main>

      <div className="banner">
        <Img
          style={{ height: '50vh', filter: 'brightness(50%)' }}
          fluid={data.bannerImage2.childImageSharp.fluid}
        />
        <div className="banner-text">
          <Mail size={25} />
          <h3>Stay In The Loop</h3>
          <Form mb={[5]} onSubmit={e => e.preventDefault()}>
            <input placeholder="Email Address" type="email" name="email" />
            <Button type="submit">SUBMIT</Button>
          </Form>
        </div>
      </div>
    </Styled>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    bannerImage1: file(relativePath: { eq: "towers.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    cardImage1: file(relativePath: { eq: "pizza.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    cardImage2: file(relativePath: { eq: "festival.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    cardImage3: file(relativePath: { eq: "2db.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    cardImage4: file(relativePath: { eq: "bars.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    cardImage5: file(relativePath: { eq: "food.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bannerImage2: file(relativePath: { eq: "drone.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
