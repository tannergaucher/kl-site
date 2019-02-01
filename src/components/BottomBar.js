import React from 'react'
import styled from 'styled-components'

import Link from 'gatsby-link'

import salad from '../images/salad.svg'
import bottle from '../images/bottle.svg'
import confetti from '../images/confetti.svg'

const Icon = styled.img`
  height: 25px;
  width: 25px;
  margin-top: 0.5em;
`

const IconLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  h6 {
    margin-top: 0.01em;
    margin-bottom: 0.5em;
    font-weight: lighter;
    font-size: 10px;
    letter-spacing: -3%;
  }
`

const Styled = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  background: #ffffff;
  border-top: 1px solid lightgrey;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);

  .nav-icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

class BottomBar extends React.Component {
  render() {
    return (
      <Styled>
        <div className="nav-icon">
          <IconLink to="/food">
            <Icon src={salad} />
            <h6>Food</h6>
          </IconLink>
        </div>

        <div className="nav-icon">
          <IconLink to="/drink">
            <Icon src={bottle} />
            <h6>Drink</h6>
          </IconLink>
        </div>
        <div className="nav-icon">
          <IconLink to="/events">
            <Icon src={confetti} />
            <h6>Events</h6>
          </IconLink>
        </div>
      </Styled>
    )
  }
}

export default BottomBar
