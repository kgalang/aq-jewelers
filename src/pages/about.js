import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, Hero, AboutContent } from '../components'
import HeroImage from '../../static/Hero_1920.jpg'
import AboutImage from '../../static/About-Us_1920.jpg'

const About = ({ data }) => (
  <Layout>
    <Hero backgroundImage={HeroImage} text="About Us" />
    <AboutContent
      header={data.aboutJson.content.header}
      body={data.aboutJson.content.body}
      imgSrc={AboutImage}
    />
    <div
      dangerouslySetInnerHTML={{
        __html: data.aboutJson.content.markdown.childMarkdownRemark.html,
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
        markdown {
          childMarkdownRemark {
            html
          }
        }
        header
        body
      }
    }
  }
`
