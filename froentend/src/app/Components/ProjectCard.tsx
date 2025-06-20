'use client';
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Define the properties the component will accept
interface ProjectCardProps {
  imageUrl: string;
  title: string;
  showCaseStudy?: boolean; // Optional prop to show the button
}

export default function ProjectCard({ imageUrl, title, showCaseStudy = false }: ProjectCardProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: '8px',
        overflow: 'hidden',
        height: '100%',
        '&:hover .case-study-button': {
          opacity: 1,
          transform: 'translateY(0)',
        },
        '& img': {
          transition: 'transform 0.3s ease-in-out',
        },
        '&:hover img': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <img
        src={imageUrl}
        alt={title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
      {showCaseStudy && (
        <Button
          className="case-study-button"
          href="#"
          endIcon={<ArrowForwardIcon />}
          sx={{
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            right: '16px',
            py: 1.5,
            backgroundColor: 'rgba(211, 211, 211, 0.8)', // Light grey with opacity
            backdropFilter: 'blur(5px)',
            color: '#000',
            fontWeight: '600',
            textTransform: 'none',
            borderRadius: '6px',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.3s, transform 0.3s',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            },
          }}
        >
          View Casestudy
        </Button>
      )}
    </Box>
  );
}