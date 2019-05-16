import React from 'react'

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="container">
      <div className="info-area">
        <div className="column">
          <a href="https://github.com/fossildev">GitHub</a>
        </div>
        <div className="column">
        </div>
        <div className="column">
          <p>
            <strong>FOSSIL AMIKOM</strong><br/>
            RingRoad<br/><br/>
            fossil@amikom.ac.id<br/>
          </p>
        </div>
      </div>
    </div>
    <div className="copyright-area">
      <p>FOSSIL © { new Date().getFullYear() }</p>
    </div>
  </footer>
)

export default Footer
