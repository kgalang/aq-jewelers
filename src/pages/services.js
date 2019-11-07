import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, Hero, Accordion, Container, ContactForm } from '../components'

const Services = ({ data }) => (
  <Layout footer={data.prismicFooter.data}>
    <Hero
      backgroundImage={data.prismicServicesPage.data.hero_image.url}
      text={data.prismicServicesPage.data.hero_text.text}
    />
    <Container>
      <Accordion services={data.prismicServicesPage.data.services} />
      <ContactForm></ContactForm>
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
                  text
                }
              }
            }
          }
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
