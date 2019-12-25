import * as React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <section>
    <ul>
      <li className="logo">Logo</li>
      <li>Contact</li>
      <li>Personal Skeels</li>
      <li>Find me</li>
      <li>About</li>
    </ul>
    </section>
  </header>
)
export default Header



      {/* <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1> */}