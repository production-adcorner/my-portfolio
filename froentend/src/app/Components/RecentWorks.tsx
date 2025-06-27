// Updated File: froentend/src/app/Components/ProjectSpotlight.tsx
// This file now contains the RecentWorksCarousel component.

'use client'; // This is required for React hooks like useRef and onClick events.

import React, { useRef } from 'react';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import { FiArrowDown, FiArrowLeft, FiArrowRight, FiArrowUpRight } from 'react-icons/fi';

// The new list of image URLs you provided.
const works = [
  { imageUrl: 'https://framerusercontent.com/images/bed888CTflXNK3KFX1R7VhRMtE.png?scale-down-to=1024' },
  { imageUrl: 'https://framerusercontent.com/images/JGI1jOpxUUfW0IRfPmx7eMGhc.png?scale-down-to=1024' },
  { imageUrl: 'https://framerusercontent.com/images/fsFDlU7CKq0E96MXMN9fUXrNw.png?scale-down-to=512' },
  { imageUrl: 'https://framerusercontent.com/images/jlIAaI4caPj3oVLaxetMd2RvY.png?scale-down-to=1024' },
  { imageUrl: 'https://framerusercontent.com/images/RYRvZnstUexQMOl8zRyrvDfDT0.png' },
  { imageUrl: 'https://framerusercontent.com/images/GkhJfmw17Q5eehve51WR25Ijjnk.png' }, // Example extra image
];

export default function RecentWorks() { 
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth * 0.8; // Scroll by 80% of the container width
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="xl"> {/* Using xl for wider screens */}
        
        {/* --- Header Section --- */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="h4" sx={{ fontWeight: 'medium' }}>
              Recent Works
            </Typography>
            <FiArrowDown size={24} style={{ opacity: 0.5 }} />
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton onClick={() => scroll('left')} sx={{ color: 'white', border: '1px solid rgba(255,255,255,0.2)'}}>
              <FiArrowLeft />
            </IconButton>
            <IconButton onClick={() => scroll('right')} sx={{ color: 'white', border: '1px solid rgba(255,255,255,0.2)'}}>
              <FiArrowRight />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ position: 'relative' }}>
          {/* This is the scrollable container */}
          <Box
            ref={scrollRef}
            sx={{
              display: 'flex',
              overflowX: 'auto',
              gap: 3,
              py: 2,
              scrollBehavior: 'smooth',
              '&::-webkit-scrollbar': {
                display: 'none', // Hides scrollbar for a cleaner look
              },
            }}
          >
            {works.map((work, index) => (
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  flex: '0 0 auto', // Prevents items from shrinking
                  width: { xs: '80%', sm: '40%', md: '30%', lg: '24%' },
                  aspectRatio: '3 / 4', // Gives the card a consistent shape
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={work.imageUrl}
                  alt={`Recent Work ${index + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <Button
                  endIcon={<FiArrowUpRight />}
                  sx={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    right: '16px',
                    py: 1,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    textTransform: 'none',
                    borderRadius: '999px',
                    transition: 'background-color 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.25)',
                    },
                  }}
                >
                  View Casestudy
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}