import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Styled = styled.div`
  display: flex;
  margin-bottom: ${props => props.theme.spacing};
  .info {
    h6 {
      margin: 0;
      font-weight: lighter;
      color: #696969;
    }
  }
`

const Avatar = ({ fixed, author, date }) => (
  <Styled>
    <Img
      fixed={fixed}
      style={{
        height: '30px',
        width: '30px',
        borderRadius: '50%',
        marginRight: '.5em',
      }}
    />
    <div className="info">
      <h6>{author}</h6>
      <h6>{date}</h6>
    </div>
  </Styled>
)

export default Avatar
