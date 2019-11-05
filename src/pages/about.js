import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, Hero, AboutContent, ContactForm } from '../components'

const About = ({ data }) => (
  <Layout>
    <Hero
      backgroundImage={data.prismicAboutPage.data.hero_image.url}
      text={data.prismicAboutPage.data.hero_text.text}
    />
    {console.log(data)}
    <AboutContent
      header={data.prismicAboutPage.data.hero_text.text}
      body={data.prismicAboutPage.data.about_us_text.text}
      imgSrc={data.prismicAboutPage.data.section_image.url}
      imgTitle={data.prismicAboutPage.data.section_image.alt}
    />
    <ContactForm></ContactForm>
  </Layout>
)

About.propTypes = {
  data: PropTypes.object.isRequired,
}

export default About

export const query = graphql`
  query AboutQuery {
    prismicAboutPage {
      data {
        hero_image {
          url
          alt
        }
        hero_text {
          text
        }
        about_us_text {
          text
        }
        section_image {
          url
          alt
        }
      }
    }
  }
`
