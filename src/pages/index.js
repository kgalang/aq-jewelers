import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, Hero } from '../components'
import HeroImage from '../../static/Hero_1920.jpg'

const Index = ({ data }) => (
  <Layout>
    <Hero
      backgroundImage={HeroImage}
      text="Lorum Ipsum"
      buttonText="Learn More"
    />
    {JSON.stringify(data)}
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
