import React from 'react'
import styled from 'styled-components'
import Link from '../components/styles/Link'

const Styled = styled.div`
  margin-top: ${props => props.theme.spacing};
  display: flex;
  h3 {
    margin-right: ${props => props.theme.spacing};
  }
`

// todo: lodash toCamelCase for sanitizing category

const FilterLinks = ({ category, subcategories }) => {
  return (
    <Styled>
      {subcategories.map(subcategory => (
        <Link to={`/guide/${category}/${subcategory}`}>
          <h3>{subcategory}</h3>
        </Link>
      ))}
    </Styled>
  )
}

export default FilterLinks
