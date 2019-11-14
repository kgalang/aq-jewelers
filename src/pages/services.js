import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, Hero, Accordion, Container, ContactForm } from '../components'

const Services = ({ data }) => (
  <Layout>
    <Hero
      backgroundImage={data.prismicServicesPage.data.hero_image.url}
      text={data.prismicServicesPage.data.hero_text.text}
    />
    <Container>
      <Accordion services={data.prismicServicesPage.data.services} />
      <ContactForm />
    </Container>
  </Layout>
)

Services.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Services

export const query = graphql`
  query ServicesQuery {
    prismicServicesPage {
      data {
        hero_image {
          url
        }
        hero_text {
          text
        }
        services {
          related_service {
            document {
              data {
                service_name {
                  text
                }
                service_description {
                  html
                }
              }
            }
          }
        }
      }
    }
  }
`
