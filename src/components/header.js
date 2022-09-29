import * as React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"

import { Menu, Header as HeaderStyle } from "./header.style"

const Header = ({ siteTitle }) => {
  const result = useStaticQuery(graphql`
    {
      prismicNavigiation {
        data {
          menu_items {
            label
            destination_page {
              uid
            }
          }
        }
      }
    }
  `)

  return (
    <HeaderStyle>
      <Menu>
        <Link to={`/`}>Home</Link>
        {result.prismicNavigiation.data.menu_items.map(item => (
          <Link to={`/${item.destination_page.uid}`} key={item.label}>
            {item.label}
          </Link>
        ))}
      </Menu>
    </HeaderStyle>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
