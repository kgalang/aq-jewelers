import React from 'react'
import styled from 'styled-components'

const ProductCard = styled.div`
  background: url(${props => props.url});
  background-size: cover;
  background-position: 50%;
  height: 250px;
  width: 250px;
`

const ProductInfo = styled.div`
  height: 100%;
  width: 100%;
  transition: ${props => props.theme.defaultTransition};
  color: ${props => props.theme.white};
  opacity: 0;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
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
`
const ProductName = styled.div`
  width: 100%;
  text-align: center;
`

const ProductPrice = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
`

export const Products = ({ products }) => {
  let productsList = products
  return (
    <div>
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
    </div>
  )
}

export default Products
