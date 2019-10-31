import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, Hero, Accordion, Container } from '../components'
import HeroImage from '../../static/Hero_1920.jpg'

const Services = ({ data }) => (
  <Layout>
    <Hero backgroundImage={HeroImage} text="Services" />
    <Container>
      <Accordion content={data.servicesJson.accordion} />
    </Container>
  </Layout>
)

Services.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Services

export const query = graphql`
  query ServicesQuery {
    servicesJson {
      title
      accordion {
        title
        body
      }
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
