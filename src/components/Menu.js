import { Link } from "gatsby"
import React from "react"

const Menu = () => (
    <ul>
        <li>
            <Link
                to="/about-us/"
            >
                About Us
            </Link>
        </li>
        <li>
            <Link
                to="/our-team/"
            >
                Our Team
            </Link>
        </li>
        <li>
            <Link
                to="/blog/"
            >
                Blog
            </Link>
        </li>
        <li>
            <Link
                to="/contact/"
            >
                Contact Us
            </Link>
        </li>
    </ul>
)

export default Menu