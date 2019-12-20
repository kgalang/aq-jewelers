import React from 'react'
import styled from 'styled-components'
import { media } from '../styles'

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const Card = styled.div`
  width: calc(100% - 2rem);
  margin: 1rem;
  height: auto;
  &:before {
    content: '';
    float: left;
    padding-top: 100%;
  }

  ${media.forMediumUp`
    width: calc(50% - 2rem);
  `};

  ${media.forLargeUp`
    width: calc(33% - 2rem);
  `};
`

const ProductCard = styled(Card)`
  background: url(${props => props.url});
  background-size: cover;
  background-position: 50%;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`

const TextCard = styled(Card)`
  background: ${props => props.theme.white};
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  display: flex;
  align-items: center;
  padding: 2rem;
  p {
    font-size: 150%;
  }

  ${media.forMediumUp`
    width: calc(50% - 2rem);
    padding: 1rem;
  `};

  ${media.forLargeUp`
    width: calc(33% - 2rem);
  `};

  ${media.forXLargeUp`
    padding: 2rem;
  `};
`

const ProductInfo = styled.div`
  height: 100%;
  width: 100%;
  transition: ${props => props.theme.defaultTransition};
  color: ${props => props.theme.white};
  opacity: 0;
  display: flex;
  align-items: center;
  position: relative;
  /* &:hover {
    opacity: 1;
    background: linear-gradient(
      180deg,
      rgba(16, 37, 93, 0) 0%,
      rgba(16, 37, 93, 1) 100%
    );
  } */

  p {
    font-size: 200%;
  }
`
const ProductName = styled.div`
  width: 100%;
  text-align: center;
`

const ProductPrice = styled.div`
  position: absolute;
  bottom: 1rem;
  width: 100%;
  text-align: center;
`

const insert = (arr, index, newItem) => [
  ...arr.slice(0, index),
  newItem,
  ...arr.slice(index),
]

export const Products = ({ products, highlight }) => {
  let productsList = insert(products, 4, highlight)
  return (
    <ProductsContainer>
      {productsList.map((product, index) =>
        product.related_products ? (
          <ProductCard
            key={index + product.related_products.document[0].data.product.text}
            url={product.related_products.document[0].data.image.url}
          >
            <ProductInfo>
              <ProductName>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      product.related_products.document[0].data.product.html,
                  }}
                />
              </ProductName>
              <ProductPrice>
                <p>${+product.related_products.document[0].data.price}</p>
              </ProductPrice>
            </ProductInfo>
          </ProductCard>
        ) : (
          <TextCard key={index + product.text}>
            <div dangerouslySetInnerHTML={{ __html: product.html }} />
          </TextCard>
        ),
      )}
    </ProductsContainer>
  )
}

export default Products
