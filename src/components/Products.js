import React from 'react'
import styled from 'styled-components'
import { media } from '../styles'

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2rem;
`

const ProductCard = styled.div`
  background: url(${props => props.url});
  background-size: cover;
  background-position: 50%;
  flex-grow: 1;
  width: calc(100% - 2rem);
  height: 300px;
  margin: 1rem;

  ${media.forMediumUp`
    width: calc(50% - 2rem);
  `};

  ${media.forLargeUp`
    width: calc(33% - 2rem);
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
  &:hover {
    opacity: 1;
    background: linear-gradient(
      180deg,
      rgba(16, 37, 93, 0) 0%,
      rgba(16, 37, 93, 1) 100%
    );
  }

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

export const Products = ({ products }) => {
  let productsList = products
  return (
    <ProductsContainer>
      {productsList.map((product, index) => (
        <ProductCard
          key={
            index + product.related_products.document[0].data.product_name.text
          }
          url={product.related_products.document[0].data.image.url}
        >
          <ProductInfo>
            <ProductName>
              <p>
                {product.related_products.document[0].data.product_name.text}
              </p>
            </ProductName>
            <ProductPrice>
              <p>${+product.related_products.document[0].data.price}</p>
            </ProductPrice>
          </ProductInfo>
        </ProductCard>
      ))}
    </ProductsContainer>
  )
}

export default Products
