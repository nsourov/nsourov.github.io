import React, { useState, useEffect, useContext } from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import styled from "styled-components"
import { motion, useAnimation } from "framer-motion"

import Context from "../context"
import { isSSR } from "../utils/"
import ContentWrapper from "../styles/contentWrapper"
import Logo from "./logo"
import Navbar from "./navbar"

const StyledHeader = motion.custom(styled.header`
  width: 100%;
  height: ${({ theme }) => theme.headerHeight};
  background: ${({ theme }) => theme.colors.background};
`)

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const Header = () => {
  const { isIntroDone } = useContext(Context).state
  const [open, setOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    let handleWindowSizeChange
    // if (isSSR) is necessary to prevent error during the gatsby build
    if (!isSSR) {
      handleWindowSizeChange = () => setWindowWidth(window.innerWidth)
      // set initial innerWidth when component mounts
      setWindowWidth(window.innerWidth)
    }
    // Add event listener to update windowWidth in state
    window.addEventListener("resize", handleWindowSizeChange)
    return () => window.removeEventListener("resize", handleWindowSizeChange)
  }, [windowWidth])

  // Required for animation - start after the splashScreen sequence is done
  const controls = useAnimation()
  useEffect(() => {
    if (isIntroDone)
      controls.start({ opacity: 1, y: 0, transition: { delay: 0.2 } })
  }, [isIntroDone, controls])

  return (
    <StyledHeader initial={{ opacity: 0, y: -10 }} animate={controls}>
      {/* add blur class to body when sidebar is opened */}
      <Helmet bodyAttributes={{ class: open ? "blur" : "" }} />
      <StyledContentWrapper>
        <Link to="/" aria-label="home">
          <Logo color="primary" size="2rem" />
        </Link>
        <Navbar />
      </StyledContentWrapper>
    </StyledHeader>
  )
}

export default Header
