import { Link } from "gatsby"
import React from "react"

const MainLogo = () => (
    <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Business Demo
        </Link>
      </h1>
)

export default MainLogo