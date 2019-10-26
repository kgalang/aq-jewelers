import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, Hero } from '../components'
import HeroImage from '../../static/Hero_1920.jpg'

const Index = ({ data }) => (
  <Layout>
    <Hero backgroundImage={HeroImage} text='Lorum Ipsum' buttonText='Learn More' />
    {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
    {JSON.stringify(data.homeJson.gallery)}
  </Layout>
)

Index.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Index

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
