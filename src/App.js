import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { Router, Routes } from 'react-router-dom';
import './App.css';
import AppRoutes from './AppRoutes';
import Footer from './components/commonComponents/footer/Footer';
import Header from './components/commonComponents/header/Header';

function App() {
  return (
    <div>
      <Header />
      <AppRoutes />
      <Box  sx={{backgroundColor: '#F4F6F8',
        padding: '40px 20px'}}>
      <Container maxWidth={"md"} disableGutters>
       <Footer />
      </Container>
      </Box>
    </div>
  );
}

export default App;
