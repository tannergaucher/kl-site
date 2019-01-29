import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { Heading, Box } from 'rebass'

const StyledCard = styled.div`
  display: grid;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.25);
  transition: all 0.2s ease-in-out;
  border-radius: 4px;

  :hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.02);
  }
`

const Card = ({ fluid, category, title }) => (
  <StyledCard>
    <Img
      fluid={fluid}
      style={{ height: '200px', borderRadius: '4px 4px 0 0' }}
    />
    <Box p={[3]}>
      <Heading
        fontSize={[1, 2]}
        fontWeight="lighter"
        mt={[2]}
        color="darkgrey"
        style={{ textTransform: 'uppercase', letterSpacing: '1.4px' }}
      >
        {category}
      </Heading>
      <Heading fontSize={[3, 4]} mt={[2]} fontWeight="lighter">
        {title}
      </Heading>
    </Box>
  </StyledCard>
)

export default Card
