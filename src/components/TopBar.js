import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Link from '../components/styles/Link'

import activity from '../images/activity.svg'
import tag from '../images/tag.svg'
import map from '../images/map.svg'

const Styled = styled.nav`
  height: 60px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  h6 {
    margin: 0;
    font-size: 21px;
    font-weight: lighter;
    margin-left: 0.5em;
  }
  @media (min-width: 750px) {
    display: none;
  }
`

const Icon = styled.img`
  margin-right: ${props => props.theme.spacing};
`

const TopBar = props => (
  <Styled>
    <h6>Untrip</h6>
    <div className="icons">
      <Link to="/">
        <Icon src={activity} />
      </Link>

      <Link to="/">
        <Icon src={tag} />
      </Link>
      <Link to="/">
        <Icon src={map} />
      </Link>
    </div>
  </Styled>
)

export default TopBar
