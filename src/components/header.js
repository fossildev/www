import React from 'react'
import Link from 'gatsby-link'
import favicon from '../images/favicon.ico'
import logofossil from '../images/logo_grad.png'
import Helmet from 'react-helmet'
import GatsbyConfig from '../../gatsby-config'



const Header = ({ siteTitle }) => (
  <div className="nav-bar">
    <Helmet
      title={GatsbyConfig.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Open-Source Community' },
        {
          name: 'keywords',
          content: 'FOSSIL, FREE OPEN SOURCE SOFTWARE INTEREST LEAGUE',
        },
      ]}
      link={[{ rel: 'shortcut icon', type: 'image/ico', href: `${favicon}` }]}
    />

    <div className="container">
      <div className="nav-items">
        {/* <span className="brand">{siteTitle}</span> */}
        <span className="brand"><img src={logofossil} className="logo-fossil" /></span>
        <ul>
          <li>
            <Link to="/" exact={true} activeClassName="active">
              Beranda
            </Link>
          </li>
          <li>
            <Link to="/events" exact={true} activeClassName="active">
              Events
            </Link>
          </li>
          <li>
            <Link to="/blog" exact={true} activeClassName="active">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/team" exact={true} activeClassName="active">
              Kepengurusan
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Header
