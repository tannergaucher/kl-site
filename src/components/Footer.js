import React from 'react'
import styled from 'styled-components'
import NavLink from '../components/styles/NavLink'

import { Instagram } from 'styled-icons/feather/Instagram'
import { Facebook } from 'styled-icons/feather/Facebook'
import { Twitter } from 'styled-icons/feather/Twitter'
import { MessageCircle } from 'styled-icons/feather/MessageCircle'

const Styled = styled.div``

const Footer = () => (
  <Styled>
    <div className="footer-links">
      <NavLink>
        <h6>CONTACT</h6>
      </NavLink>
      <NavLink>
        <h6>ABOUT</h6>
      </NavLink>
      <NavLink>
        <h6>FAQ</h6>
      </NavLink>
      <NavLink>
        <h6>FRIENDS</h6>
      </NavLink>
    </div>

    <div className="footer-social">
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
    </div>

    <div className="footer-legal">
      <h6>&#169; Some Company</h6>
    </div>
  </Styled>
)

export default Footer
