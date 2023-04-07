import { Container } from '@mui/system'
import React from 'react'
import BreadCrumbs from '../commonComponents/breadCrumb/BreadCrumbs'
import ProductsFilters from '../commonComponents/products/ProductsFilters'
import ProductsListsHorizontal from './ProductsListsHorizontal'
import ProductsListVertical from './ProductsListVertical'

function ProductsList() {

  const breadCrumbs = [
    { to: 'home', label: 'Home' },
    { to: 'pages', label: 'Products' },
]
  return (
    <div>
      <Container maxWidth={'xl'} disableGutters sx={{ 'background': 'var(--bread-crumbs)' }}  >
            <BreadCrumbs breadCrumbs={breadCrumbs} />
        </Container>
      <Container maxWidth={"md"} disableGutters>
        <ProductsFilters />
        <ProductsListVertical />
        {/* <ProductsListsHorizontal /> */}
      </Container>
    </div>
  )
}

export default ProductsList