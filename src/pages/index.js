import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, Hero, Container, Products, ContactForm } from '../components'

const Index = ({ data }) => (
  <Layout>
    <Hero
      backgroundImage={data.prismicHomepage.data.hero_image.url}
      text={data.prismicHomepage.data.hero_text.text}
      buttonText="Learn More"
    />
    <Container>
      <Products
        products={data.prismicHomepage.data.products}
        highlight={data.prismicHomepage.data.welcome_highlight}
      />
      <ContactForm />
    </Container>
  </Layout>
)

Index.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Index

export const query = graphql`
  query HomepageQuery {
    prismicHomepage {
      data {
        hero_image {
          alt
          url
        }
        hero_text {
          text
        }
        welcome_highlight {
          text
          html
        }
        products {
          related_products {
            document {
              data {
                price
                product {
                  text
                  html
                }
                image {
                  url
                  alt
                }
              }
            }
          }
        }
      }
    }
  }
`
