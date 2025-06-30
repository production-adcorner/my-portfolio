import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../Components/Navbar';
import CtaSection from '../Components/CtaSection';
import DesignServices from '../Components/DesignServices';

export default function ServicesPage() {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff' }}>
      <Navbar />
      <DesignServices />
      <CtaSection />
    </Box>
  );
}
