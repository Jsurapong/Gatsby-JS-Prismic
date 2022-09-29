import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { SliceZone } from "@prismicio/react"

import { component } from "../slices"

export const query = graphql`
  {
    prismicHomepage(data: { title: { eq: "HomePage" } }) {
      id
      data {
        title
        body {
          ... on PrismicHomepageDataBodyHero {
            id
            slice_type
            primary {
              title {
                richText
              }
              subtitle {
                richText
              }
              background_image {
                url
                gatsbyImageData
              }
            }
          }
          ... on PrismicHomepageDataBodyCallToAction {
            id
            slice_type
            primary {
              description {
                richText
              }
              destination_label_text
              destination_page {
                uid
              }
              title1 {
                richText
              }
              image {
                gatsbyImageData
              }
            }
          }
          ... on PrismicHomepageDataBodyPricingOptions {
            id
            slice_type
            items {
              amount_per_month
              is_most_popular
              price_option_description {
                richText
              }
              price_option_title {
                richText
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  console.log({ props })

  return (
    <Layout>
      <Seo title="Home" />
      <SliceZone
        slices={props.data.prismicHomepage.data.body}
        components={component}
      />
    </Layout>
  )
}
export default IndexPage
