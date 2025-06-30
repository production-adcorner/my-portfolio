import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../Components/Navbar';
import CtaSection from '../Components/CtaSection';
import VisionSection from '../Components/VisionSection';

export default function VisionPage() {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff' }}>
      <Navbar />
      <VisionSection />
      <CtaSection />
    </Box>
  );
}
