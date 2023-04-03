import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import DiscountItem from './DiscountItem';
import FeaturedProducts from './FeaturedProducts';
import InfoSlider from './InfoSlider';
import LatestBlogs from './LatestBlogs';
import LatestProducts from './LatestProducts';
import OffersList from './OffersList';
import TopCategories from './TopCategories';
import TrendingProducts from './TrendingProducts';
import UniqueFeatures from './UniqueFeatures';

function Home() {
  return (
    <>
      {/* <InfoSlider /> */}
      <Container maxWidth={"md"} disableGutters>
          {/* <FeaturedProducts />
          <LatestProducts />
          <OffersList />
          <TrendingProducts /> */}
      </Container>
      <Box mt={5} display="flex" justifyContent='center' sx={{ 'backgroundColor': 'var(--light-purple)' }}>
          {/* <UniqueFeatures /> */}
      </Box>
      <Container maxWidth={"md"} disableGutters>
        {/* <DiscountItem /> */}
        {/* <TopCategories /> */}
        <LatestBlogs />
      </Container>
    </>
  )
}

export default Home;