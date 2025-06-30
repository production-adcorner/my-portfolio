// New File: froentend/src/app/mission/page.tsx
import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../Components/Navbar';
import CtaSection from '../Components/CtaSection';
import MissionSection from '../Components/MissionSection';

export default function MissionPage() {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff' }}>
      <Navbar />
      <MissionSection />
      <CtaSection />
    </Box>
  );
}
