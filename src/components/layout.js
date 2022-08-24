/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Intro from "./intro"
import About from "./about"
import Projects from "./projects"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const styles = {
    main: {
      margin: "0 auto",
      maxWidth: "var(--size-content)",
      padding: "var(--size-gutter)",
    },
    footer: {
      marginTop: "var(--space-5)",
      fontSize: "var(--font-sm)",
      textAlign: "center",
    },
  }
  
  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div style={styles.main}>
        <Intro />
        <Projects />
        <main>{children}</main>
        <About />
        <footer style={styles.footer}>
          Built by Kate Kote
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
