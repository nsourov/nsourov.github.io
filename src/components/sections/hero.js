import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import ContentWrapper from "../../styles/contentWrapper"
import Social from "../social"

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 4rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin-bottom: 0;
    }
    .greetings {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .emoji {
      margin-left: 0.75rem;
      width: 2.2rem;
      height: 2.2rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-left: 1rem;
        width: 3rem;
        height: 3rem;
      }
    }
    .title {
      margin-bottom: 1.5rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
        margin-bottom: 0;
      }
    }
    .subtitle {
      margin-top: -0.75rem;
    }
    .description {
      font-size: 1.125rem;
      margin-bottom: 2rem;
    }
  }
`

const Hero = ({ content }) => {
  const { frontmatter, body } = content[0].node

  return (
    <StyledSection id="hero">
      <StyledContentWrapper>
        <div data-testid="animated-heading">
          <h1 className="title">
            <div className="greetings">
              {frontmatter.greetings}
              <div style={{ originX: 0.7, originY: 0.7 }}>
                <Img
                  className="emoji"
                  fluid={frontmatter.icon.childImageSharp.fluid}
                />
              </div>
            </div>
            {frontmatter.title}
          </h1>
          <div className="description">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </div>
        <div>
          <Social fontSize=".95rem" padding=".3rem 1.25rem" width="auto" />
        </div>
      </StyledContentWrapper>
    </StyledSection>
  )
}

Hero.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        body: PropTypes.string.isRequired,
        frontmatter: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default Hero
