import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, Hero, Accordion, Container } from '../components'
import HeroImage from '../../static/Hero_1920.jpg'

const Services = ({ data }) => (
  <Layout>
    <Hero backgroundImage={HeroImage} text="Services" />
    <Container>
      <Accordion content={data.prismicService.data} />
    </Container>
  </Layout>
)

Services.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Services

export const query = graphql`
  query ServicesQuery {
    prismicService {
      data {
        service_name {
          text
        }
        service_description {
          text
        }
      }
    }
  }
`
