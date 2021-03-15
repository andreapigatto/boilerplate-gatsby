import React from 'react'
import { Link } from 'gatsby'

type ComponentProps = {
  siteTitle: string
}

// eslint-disable-next-line no-undef
const Header = ({ siteTitle = '' }: ComponentProps): JSX.Element => (
  <header className="bg-blue-500">
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
