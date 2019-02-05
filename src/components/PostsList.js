import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Card from './Card'

const Styled = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: ${props => props.theme.spacing};

  .posts-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
    margin-left: ${props => props.theme.spacing};
    margin-right: ${props => props.theme.spacing};
    margin-bottom: ${props => props.theme.spacing};
  }
`

const PostsList = ({ posts }) => {
  return (
    <Styled>
      <div className="posts-list">
        {posts.map(post => {
          const { title, category, cardImage, slug } = post.node
          return (
            <Link to={`/guide/${slug}`} key={slug}>
              <Card title={title} category={category} fluid={cardImage.fluid} />
            </Link>
          )
        })}
      </div>
    </Styled>
  )
}

export default PostsList
