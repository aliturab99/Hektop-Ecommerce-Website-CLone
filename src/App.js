import { Typography } from '@mui/material';
import { Router, Routes } from 'react-router-dom';
import './App.css';
import AppRoutes from './AppRoutes';
import Header from './components/commonComponents/header/Header';

function App() {
  return (
    <div>
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
