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
        highlight={data.prismicHomepage.data.homepage_highlight}
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
        homepage_highlight {
          text
        }
        products {
          related_products {
            document {
              data {
                price
                product_name {
                  text
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
