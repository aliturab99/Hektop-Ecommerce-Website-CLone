import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import FeaturedProducts from './FeaturedProducts';
import InfoSlider from './InfoSlider';
import LatestProducts from './LatestProducts';
import OffersList from './OffersList';

function Home() {
  return (
    <>
      {/* <InfoSlider /> */}
      <Container maxWidth={"md"} disableGutters>
          {/* <FeaturedProducts /> */}
          {/* <LatestProducts /> */}
          {/* <OffersList /> */}
      </Container>
    </>
  )
}

export default Home;