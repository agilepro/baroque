import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"



const Footer = () => {

  return (
    <nav className="navbar navbar-expand-md navbar-dark navBarStyle">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="#">Santa Cruz Baroque Festival - Making the music of the past come alive in the present.</Link>
        
      </div>
    </nav>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
