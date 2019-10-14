import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

const About = ({ data }) => (
  <div>
    <div
      dangerouslySetInnerHTML={{
        __html: data.aboutJson.content.childMarkdownRemark.html,
      }}
    />
  </div>
)

About.propTypes = {
  data: PropTypes.object.isRequired,
}

export default About

export const query = graphql`
  query AboutQuery {
    aboutJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
