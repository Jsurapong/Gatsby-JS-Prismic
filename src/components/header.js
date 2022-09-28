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
        {result.prismicNavigiation.data.menu_items.map(item => (
          <Link to={`/${item.destination_page.uid}`} key={item.label}>
            {item.label}
          </Link>
        ))}
      </Menu>
    </HeaderStyle>
  )

  // return (
  //   <header
  //     style={{
  //       background: `rebeccapurple`,
  //       marginBottom: `1.45rem`,
  //     }}
  //   >
  //     <div
  //       style={{
  //         margin: `0 auto`,
  //         maxWidth: 960,
  //         padding: `1.45rem 1.0875rem`,
  //       }}
  //     >
  //       <h1 style={{ margin: 0 }}>
  //         <Link
  //           to="/"
  //           style={{
  //             color: `white`,
  //             textDecoration: `none`,
  //           }}
  //         >
  //           {siteTitle}
  //         </Link>
  //       </h1>
  //     </div>
  //   </header>
  // )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
