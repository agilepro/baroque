import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import { Helmet } from 'react-helmet'
import './fonts.css'
import "./layout.scss"

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

  return (
    <div className="container-fluid p-0">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Fondamento:ital@0;1&family=Kaushan+Script&display=swap" rel="stylesheet"/>
      </Helmet>
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>
        {children}
      </main>
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
      <br/>
      <div class="pagefoot">Making the music of the past come alive in the present.</div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout