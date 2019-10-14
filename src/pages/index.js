import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

const Index = ({ data }) => (
  <div>
    {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
    {JSON.stringify(data.homeJson.gallery)}
  </div>
)

Index.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Index

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
