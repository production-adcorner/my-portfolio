'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';

// Define the properties the component will accept
interface ProcessStepCardProps {
  icon: React.ReactElement;
  number: string;
  title: string;
  description: string;
}

export default function ProcessStepCard({ icon, number, title, description }: ProcessStepCardProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: '#1C1C1C', // A slightly lighter black for the card
        borderRadius: '12px',
        p: 3,
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Typography
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          color: 'rgba(255, 255, 255, 0.2)',
          fontSize: '1.2rem',
          fontWeight: 'bold',
        }}
      >
        {number}
      </Typography>

      <Box sx={{ color: 'rgba(255, 255, 255, 0.4)', mb: 1 }}>
        {icon}
      </Box>

      <Typography variant="h6" sx={{ fontWeight: '600', mb: 1 }}>
        {title}
      </Typography>

      <Typography sx={{ fontSize: '0.9rem', opacity: 0.7, maxWidth: '500px' }}>
        {description}
      </Typography>
    </Box>
  );
}