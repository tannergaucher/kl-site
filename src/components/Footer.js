import React from 'react'
import styled from 'styled-components'
import NavLink from '../components/styles/NavLink'

import { Instagram } from 'styled-icons/feather/Instagram'
import { Facebook } from 'styled-icons/feather/Facebook'
import { Twitter } from 'styled-icons/feather/Twitter'
import { MessageCircle } from 'styled-icons/feather/MessageCircle'

const Styled = styled.footer`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-top: ${props => props.theme.spacing};
  padding-bottom: ${props => props.theme.spacing};

  background: black;
  color: white;

  h5 {
    margin: 0;
  }
`

const Footer = () => (
  <Styled>
    <NavLink>
      <Instagram size={25} />
    </NavLink>
    <NavLink>
      <Facebook size={25} />
    </NavLink>
    <NavLink>
      <Twitter size={25} />
    </NavLink>
    <NavLink>
      <MessageCircle size={25} />
    </NavLink>

    <NavLink>
      <h5>CONTACT</h5>
    </NavLink>
    <NavLink>
      <h5>ABOUT</h5>
    </NavLink>
    <NavLink>
      <h5>FAQ</h5>
    </NavLink>
    <NavLink>
      <h5>FRIENDS</h5>
    </NavLink>

    {/* <div className="footer-legal">
      <h6>&#169; Some Company</h6>
    </div> */}
  </Styled>
)

export default Footer
