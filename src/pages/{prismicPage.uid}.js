import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { PrismicRichText } from "@prismicio/react"

const Page = props => {
  return (
    <Layout>
      <Seo title="Page two" />
      <PrismicRichText
        field={props.data.prismicPage.data.page_title.richText}
      />
      <PrismicRichText field={props.data.prismicPage.data.content.richText} />
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const query = graphql`
  query PageQuery($id: String) {
    prismicPage(id: { eq: $id }) {
      data {
        content {
          richText
        }
        page_title {
          text
          richText
        }
      }
    }
  }
`

export default Page
