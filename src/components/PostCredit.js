import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Styled = styled.div`
  display: flex;
  margin-bottom: 2em;
  .post-info {
    h6 {
      margin: 0;
      font-weight: lighter;
      color: #696969;
    }
  }
`

const PostCredit = ({ author, datePublished, authorImage }) => (
  <Styled>
    <Img
      fixed={authorImage}
      style={{
        height: '30px',
        width: '30px',
        borderRadius: '50%',
        marginRight: '.5em',
      }}
    />
    <div className="post-info">
      <h6>{author}</h6>
      <h6>{datePublished}</h6>
    </div>
  </Styled>
)

export default PostCredit
