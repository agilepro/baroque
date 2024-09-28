import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : {className: "nav-link"}
}


const menuItems = [
  {
    title: 'About',
    path: '/about',
    subItems: [
      { title: 'History & Purpose', path: '/about' },
      { title: 'Board of Directors', path: '/board' },
      { title: 'Contact', path: '/contact' },
    ],
  },
  {
    title: 'Youth Chamber',
    path: '/youth',
  },
  {
    title: 'Boomeria',
    path: '/boomeria',
  },
  {
    title: 'Tickets',
    path: '/tickets',
  },
  {
    title: 'Donate',
    path: '/donate',
  },
  {
    title: 'Seasons',
    path: '/season-2025',
    subItems: [
      { title: '2025', path: '/season-2025' },
      { title: '2024', path: '/season-2024' },
      { title: '2023', path: '/season-2023' },
      { title: '2022', path: '/season-2022' },
      { title: '2021', path: '/season-2021' },
      { title: '2020', path: '/season-2020' },
      { title: '2019', path: '/season-2019' },
      { title: '2018', path: '/season-2018' },
    ],
  },
]

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-md navbar-dark navBarStyle">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="#">Santa Cruz Baroque Festival</Link>
        <ul className="main-menu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.title}</Link>
              {item.subItems && (
                <ul className="submenu">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link to={subItem.path}>{subItem.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
