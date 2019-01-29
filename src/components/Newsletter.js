import React from 'react'
import styled from 'styled-components'
import { Heading, Box } from 'rebass'
import Img from 'gatsby-image'
import { Mail } from 'styled-icons/feather/Mail'

import Form from './styles/Form'
import Button from './styles/Button'
import { StaticQuery } from 'gatsby'

const StyledNewsletter = styled.div`
  position: relative;
  .banner-heading {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-shadow: black 5px 5px 15px;
  }
`

const Newsletter = () => (
  <StaticQuery
    query={graphql`
      query {
        newsletterImg: file(relativePath: { eq: "drone.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <StyledNewsletter>
        <Img
          style={{ height: '50vh', filter: `brightness(${50}%)` }}
          fluid={data.newsletterImg.childImageSharp.fluid}
        />
        <div className="banner-heading">
          <Box mt={[5]} mb={[2]}>
            <Mail size={25} />
          </Box>
          <Heading fontSize={[3, 4, 5]} fontWeight="lighter" mb={[3]}>
            Stay In The Loop
          </Heading>
          <Form mb={[5]} onSubmit={e => e.preventDefault()}>
            <input placeholder="Email Address" type="email" name="email" />
            <Button type="submit">SUBMIT</Button>
          </Form>
        </div>
      </StyledNewsletter>
    )}
  />
)

export default Newsletter
