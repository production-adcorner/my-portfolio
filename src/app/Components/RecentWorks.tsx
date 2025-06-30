// Updated File: froentend/src/app/Components/ProjectSpotlight.tsx
// This file now contains the RecentWorksCarousel component.

'use client'; // This is required for React hooks like useRef and onClick events.

import React, { useRef } from 'react';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import { FiArrowDown, FiArrowLeft, FiArrowRight, FiArrowUpRight } from 'react-icons/fi';

// The new list of image URLs you provided.
const originalWorks = [
  { imageUrl: 'https://framerusercontent.com/images/bed888CTflXNK3KFX1R7VhRMtE.png?scale-down-to=1024' },
  { imageUrl: 'https://framerusercontent.com/images/JGI1jOpxUUfW0IRfPmx7eMGhc.png?scale-down-to=1024' },
  { imageUrl: 'https://framerusercontent.com/images/fsFDlU7CKq0E96MXMN9fUXrNw.png?scale-down-to=512' },
  { imageUrl: 'https://framerusercontent.com/images/jlIAaI4caPj3oVLaxetMd2RvY.png?scale-down-to=1024' },
  { imageUrl: 'https://framerusercontent.com/images/RYRvZnstUexQMOl8zRyrvDfDT0.png' },
  { imageUrl: 'https://framerusercontent.com/images/GkhJfmw17Q5eehve51WR25Ijjnk.png' }, // Example extra image
];

// Duplicate the array to create a seamless loop effect
const works = [...originalWorks, ...originalWorks, ...originalWorks];

export default function RecentWorks() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const itemWidth = current.scrollWidth / works.length; // Approximate width of one item including gap
      const originalContentWidth = originalWorks.length * itemWidth; // Total width of the original content

      let newScrollLeft = current.scrollLeft;

      if (direction === 'right') {
        newScrollLeft += current.clientWidth * 0.8; // Scroll by 80% of the container width
        // If we scroll past the first set of original content, jump back to the start of the second set
        if (newScrollLeft >= originalContentWidth * 2) {
          current.scrollLeft = originalContentWidth; // Jump to the start of the second set
          newScrollLeft = originalContentWidth + (current.clientWidth * 0.8); // Continue scrolling from there
        }
      } else {
        newScrollLeft -= current.clientWidth * 0.8; // Scroll by 80% of the container width
        // If we scroll before the second set of original content, jump back to the end of the second set
        if (newScrollLeft <= originalContentWidth) {
          current.scrollLeft = originalContentWidth * 2; // Jump to the start of the third set
          newScrollLeft = (originalContentWidth * 2) - (current.clientWidth * 0.8); // Continue scrolling from there
        }
      }

      current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="xl"> {/* Using xl for wider screens */}
        
        {/* --- Header Section --- */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 'medium', fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' } }}>
            Recent Works
          </Typography>
        </Box>

        <Box sx={{ position: 'relative' }}>
          {/* This is the scrollable container */}
          <Box
            ref={scrollRef}
            sx={{
              display: 'flex',
              overflowX: 'auto',
              gap: { xs: 2, md: 3 },
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
                  width: { xs: '80%', sm: '45%', md: '30%', lg: '24%' },
                  aspectRatio: '3 / 4', // Gives the card a consistent shape
                  borderRadius: '12px',
                  overflow: 'hidden',
                  // Hover effects for image
                  '& img': {
                    transition: 'transform 0.3s ease-in-out, filter 0.3s ease-in-out',
                    filter: 'grayscale(100%)',
                  },
                  '&:hover img': {
                    transform: 'scale(1.05)',
                    filter: 'grayscale(0%)',
                  },
                }}
              >
                <img
                  src={work.imageUrl}
                  alt={`Recent Work ${index + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Navigation buttons at the bottom right */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: { xs: 2, md: 4 }, pr: { xs: 0, md: 2 } }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton onClick={() => scroll('left')} sx={{ color: 'white', border: '1px solid rgba(255,255,255,0.2)', p: { xs: 1, md: 1.5 } }}>
              <FiArrowRight style={{ transform: 'rotate(180deg)', fontSize: '1.5rem' }} />
            </IconButton>
            <IconButton onClick={() => scroll('right')} sx={{ color: 'white', border: '1px solid rgba(255,255,255,0.2)', p: { xs: 1, md: 1.5 } }}>
              <FiArrowRight style={{ fontSize: '1.5rem' }} />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}