import React from 'react';
import { Box } from '@mui/material';

interface BackgroundVideoProps {
  children: React.ReactNode;
}

export default function BackgroundVideo({ children }: BackgroundVideoProps) {
  return (
    <Box sx={{
      height: "100vh",
      width: '96%',
      display: "flex",
      flexDirection: 'column',
      position: 'relative',
      color: '#fff',
      // Add responsive padding to ensure content is not cut off on smaller screens
      pt: { xs: '56px', sm: '64px' }, // Adjust padding-top for AppBar height
      pb: { xs: 2, md: 4 }, // Padding at the bottom
      px: { xs: 2, md: 4 }, // Horizontal padding
    }}>
      <video autoPlay loop muted playsInline style={{ position: 'absolute', width: '100%', height: '100%', left: '50%', top: '50%', objectFit: 'cover', transform: 'translate(-50%, -50%)', zIndex: -1 }}>
        <source src="/homm.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {children}
    </Box>
  );
}
