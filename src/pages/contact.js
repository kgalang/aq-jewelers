import React from 'react'
import { Layout, Hero, Container, ContactForm } from '../components'
import { graphql } from 'gatsby'

const ContactPage = ({ data }) => (
  <Layout>
    <Hero
      backgroundImage={data.prismicContact.data.hero_image.url}
      text={data.prismicContact.data.hero_text.text}
    />
    <Container>
      <ContactForm />
    </Container>
  </Layout>
)

export default ContactPage

export const query = graphql`
  query ContactQuery {
    prismicContact {
      data {
        hero_image {
          url
          alt
        }
        hero_text {
          text
        }
      }
    }
  }
`
