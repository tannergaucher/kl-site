import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'

import Footer from '../components/Footer'

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

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
