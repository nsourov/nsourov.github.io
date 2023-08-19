import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import "fontsource-roboto/400.css"
import "fontsource-roboto/700.css"

import { darkTheme } from "../styles/theme"
import GlobalStyle from "../styles/globalStyle"
import Header from "./header"
import CookieBar from "../components/cookieBar"
import { useCookieBar } from "../../config"

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]')
}

const StyledLayoutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
`

const Layout = ({ children }) => {
  const theme = darkTheme

  return (
    <StyledLayoutWrapper id="layout-wrapper" data-useCookieBar={useCookieBar}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <main id="main-content">{children}</main>
        {useCookieBar && <CookieBar />}
      </ThemeProvider>
    </StyledLayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
