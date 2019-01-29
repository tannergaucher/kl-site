import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'
import { Grommet } from 'grommet'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { BlackTie } from 'styled-icons/fa-brands'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Karla:100,400,700');

  html {
    min-height: 100vh;
    margin: 0;
    box-sizing: border-box;

  }
  body {
    margin: 0;
    min-height: 100vh;
    font-family: 'Karla', sans-serif;
    letter-spacing: -0.3px;
    box-sizing: inherit;
  }
`

const hpeTheme = {
  button: {
    border: {
      radius: '4px',
    },
    colors: {
      accent: '#ff8d6d',
      primary: 'blue',
      secondary: 'rgba(51,51,51,0.6)',
    },
    extend: 'letter-spacing: 0.04167em;',
  },
}

const Layout = ({ children }) => (
  <>
    <Grommet theme={hpeTheme}>
      <GlobalStyles />
      <Nav />
      {children}
      <Footer />
    </Grommet>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
