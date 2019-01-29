import React from 'react'
import { Flex } from 'rebass'

import NavLink from '../components/styles/NavLink'

import { Instagram } from 'styled-icons/feather/Instagram'
import { Facebook } from 'styled-icons/feather/Facebook'
import { Twitter } from 'styled-icons/feather/Twitter'
import { MessageCircle } from 'styled-icons/feather/MessageCircle'
import { Heading } from 'rebass'

const Footer = () => (
  <>
    <Flex
      flexDirection={['column', 'row']}
      style={{ height: '40vh' }}
      bg="black"
      color="white"
    >
      <Flex
        className="footer-links"
        width={[1, 1 / 2]}
        flexDirection={['column', 'row']}
        alignItems="center"
        justifyContent="space-around"
        py={[4]}
        px={[5]}
      >
        <NavLink>
          <Heading fontSize={[1]} mb={[1, 0]} fontWeight="lighter">
            CONTACT
          </Heading>
        </NavLink>
        <NavLink>
          <Heading fontSize={[1]} mb={[1, 0]} fontWeight="lighter">
            ABOUT
          </Heading>
        </NavLink>
        <NavLink>
          <Heading fontSize={[1]} mb={[1, 0]} fontWeight="lighter">
            FAQ
          </Heading>
        </NavLink>
        <NavLink>
          <Heading fontSize={[1]} fontWeight="lighter">
            FRIENDS
          </Heading>
        </NavLink>
      </Flex>

      <Flex
        className="footer-social"
        width={[1, 1 / 2]}
        justifyContent="space-around"
        alignItems="center"
        py={[4]}
        px={[5]}
      >
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
      </Flex>
    </Flex>

    <Flex
      className="footer-legal"
      bg="black"
      color="white"
      width={1}
      justifyContent="center"
      alignItems="center"
      style={{ height: '10vh' }}
    >
      <Heading
        m={[2]}
        color="grey"
        style={{ fontSize: '10px', fontWeight: 'lighter' }}
      >
        &#169; Some Company
      </Heading>
    </Flex>
  </>
)

export default Footer
