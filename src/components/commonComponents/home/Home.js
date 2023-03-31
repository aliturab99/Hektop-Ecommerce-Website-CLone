import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import FeaturedProducts from './FeaturedProducts';
import InfoSlider from './InfoSlider';
import LatestProducts from './LatestProducts';
import OffersList from './OffersList';
import UniqueFeatures from './UniqueFeatures';

function Home() {
  return (
    <>
      {/* <InfoSlider /> */}
      <Container maxWidth={"md"} disableGutters>
          {/* <FeaturedProducts /> */}
          {/* <LatestProducts /> */}
          {/* <OffersList /> */}
      </Container>
      <Box mt={5} display="flex" justifyContent='center' sx={{ 'backgroundColor': 'var(--light-purple)' }}>
          <UniqueFeatures />
            </Box>
    </>
  )
}

export default Home;