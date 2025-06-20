// components/ProjectCard.jsx
'use client';
import React from 'react';
import { Box, Button, Card, CardMedia, CardContent, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface ProjectCardProps {
  imageUrl: string;
  altText: string;
  caseStudyLink?: string;
}

function ProjectCard({ imageUrl, altText, caseStudyLink = '#' }: ProjectCardProps) {
  return (
    <Card
      sx={{
        backgroundColor: '#1a1a1a', 
        color: 'white',
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
        '&:hover .MuiButton-root': {
          opacity: 1,
          transform: 'translateY(0)',
        },
      }}
    >
      <CardMedia
        component="img"
        image={imageUrl}
        alt={altText}
        sx={{
          width: '100%',
          height: 300, // Adjust height as needed
          objectFit: 'cover',
          filter: 'grayscale(100%)', // Apply grayscale to match the screenshots
        }}
      />
      <CardContent sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: 2 }}>
        <Button
          variant="contained"
          endIcon={<OpenInNewIcon />}
          href={caseStudyLink}
          target="_blank"
          sx={{
            bgcolor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white
            color: 'white',
            fontWeight: 600,
            px: 3,
            py: 1,
            borderRadius: 2,
            opacity: 0, // Hidden by default
            transform: 'translateY(20px)', // Starts slightly below
            transition: 'opacity 0.3s, transform 0.3s',
            backdropFilter: 'blur(5px)', // Blur effect for the button background
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.3)',
            },
          }}
        >
          View Casestudy
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;