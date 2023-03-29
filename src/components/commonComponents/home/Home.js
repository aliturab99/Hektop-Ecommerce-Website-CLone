import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import FeaturedProducts from './FeaturedProducts';
import InfoSlider from './InfoSlider';

function Home() {
  return (
    <>
      {/* <InfoSlider /> */}
      <Container maxWidth={"md"} disableGutters>
          <FeaturedProducts />
      </Container>
    </>
  )
}

export default Home;