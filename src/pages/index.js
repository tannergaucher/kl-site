import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Heading } from 'rebass'
import { space } from 'styled-system'

import Banner from '../components/Banner'
import Newsletter from '../components/Newsletter'

import Card from '../components/Card'

const StyledIndex = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1em;
`

const CardsContainer = styled.div`
  ${space};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`

const IndexPage = ({ data }) => (
  <Layout>
    <Banner
      title="KL Inside Guide"
      subtitle="We do cool things, wow"
      fluid={data.bannerImage1.childImageSharp.fluid}
      brightness={70}
    />

    <StyledIndex>
      <Heading fontSize={[4, 5]} mt={[5, 6, 7]} textAlign="center">
        Insider's Guide
      </Heading>
      <Heading
        fontSize={[3, 4]}
        fontWeight="lighter"
        textAlign="center"
        mt={[3, 4]}
      >
        Find out what's happening
      </Heading>
      <Heading mb={[5, 6, 7]} textAlign="center" mt={[3, 4]}>
        👩‍🎨 🍲 🍾 👨‍🎤
      </Heading>
      <br />

      <CardsContainer mb={[5, 6]}>
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
      </CardsContainer>

      <Heading fontSize={[4, 5]} mt={[5, 6, 7]} textAlign="center">
        Our Service
      </Heading>
      <Heading
        fontSize={[3, 4]}
        fontWeight="lighter"
        textAlign="center"
        mt={[3, 4]}
        mb={[6]}
      >
        Some Product Info Here
      </Heading>

      <br />
    </StyledIndex>

    <Newsletter />
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
    bannerImage2: file(relativePath: { eq: "towers.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
