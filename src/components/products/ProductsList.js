import { Container } from '@mui/system'
import React from 'react'
import ProductsListsHorizontal from './ProductsListsHorizontal'
import ProductsListVertical from './ProductsListVertical'

function ProductsList() {
  return (
    <div>
      <Container maxWidth={"md"} disableGutters>
        {/* <ProductsListVertical /> */}
        <ProductsListsHorizontal />
      </Container>
    </div>
  )
}

export default ProductsList