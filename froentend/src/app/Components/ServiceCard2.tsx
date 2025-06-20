'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';

// Define the properties for the Service Card
interface ServiceCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Box
      sx={{
        backgroundColor: '#1C1C1C', // Dark card background
        borderRadius: '12px',
        p: 3,
        height: '100%',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Box sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 1.5 }}>
        {icon}
      </Box>

      <Typography variant="h6" sx={{ fontWeight: '600', mb: 1 }}>
        {title}
      </Typography>

      <Typography sx={{ fontSize: '0.9rem', opacity: 0.7 }}>
        {description}
      </Typography>
    </Box>
  );
}