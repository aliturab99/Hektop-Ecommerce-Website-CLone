import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import InfoSlider from './InfoSlider';

function Home() {
  return (
    <Container maxWidth={"xl"} disableGutters>
        <InfoSlider />
    </Container>
  )
}

export default Home;