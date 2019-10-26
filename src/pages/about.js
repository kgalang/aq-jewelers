import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, Hero } from '../components'
import HeroImage from '../../static/Hero_1920.jpg'

const About = ({ data }) => (
  <Layout>
    <Hero backgroundImage={HeroImage} text='About Us' />
    <div
      dangerouslySetInnerHTML={{
        __html: data.aboutJson.content.childMarkdownRemark.html,
      }}
    />
  </Layout>
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
