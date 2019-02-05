import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import BottomBar from './BottomBar'

import theme from '../theme'

const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Karla:400,700|Noto+Serif');
  *, *:before, *:after {
	box-sizing: border-box;
}


  html {
    min-height: 100vh;
    margin: 0;
  }
  body {
    margin: 0;
    min-height: 100vh;
    font-family: 'Karla', sans-serif;
    font-size: 18px;
  }

  p {
    font-family: 'Noto Serif', serif;
    letter-spacing: 0.015em;
    line-height: 1.5;
  }

  h1,h2,h3,h4,h5,h6 {
    letter-spacing: -0.03rem;
  }
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      {children}
      <BottomBar />
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
