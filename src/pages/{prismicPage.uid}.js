import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { SliceZone } from "@prismicio/react"
import { component } from "../slices"

const Page = props => {
  console.log({ props })
  return (
    <Layout>
      <Seo title="Page two" />
      <SliceZone
        slices={props.data.prismicPage.data.body}
        components={component}
      />
    </Layout>
  )
}

export const query = graphql`
  query PageQuery($id: String) {
    prismicPage(id: { eq: $id }) {
      data {
        body {
          ... on PrismicPageDataBodyForm {
            id
            slice_type
            primary {
              form_endpoint
            }
            items {
              input_type
              is_required
              placeholder
            }
          }
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
