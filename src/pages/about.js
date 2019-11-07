import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import {
  Layout,
  Hero,
  AboutContent,
  ContactForm,
  Container,
} from '../components'

const About = ({ data }) => (
  <Layout footer={data.prismicFooter.data}>
    <Hero
      backgroundImage={data.prismicAboutPage.data.hero_image.url}
      text={data.prismicAboutPage.data.hero_text.text}
    />
    <Container>
      <AboutContent
        header={data.prismicAboutPage.data.hero_text.text}
        body={data.prismicAboutPage.data.about_us_text.text}
        imgSrc={data.prismicAboutPage.data.section_image.url}
        imgTitle={data.prismicAboutPage.data.section_image.alt}
      />
      <ContactForm></ContactForm>
    </Container>
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
    prismicFooter {
      data {
        address_line_1 {
          text
        }
        address_line_2 {
          text
        }
        email {
          text
        }
        phone_number {
          text
        }
        footer_text {
          text
        }
      }
    }
  }
`
