import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout'

const Index = ({ data }) => (
  <Layout>{JSON.stringify(data.allProductsJson.edges[0].node.products)}</Layout>
)

Index.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Index

export const query = graphql`
  query ProductsQuery {
    allProductsJson(limit: 8) {
      edges {
        node {
          products {
            name
            price
          }
        }
      }
    }
  }
`
