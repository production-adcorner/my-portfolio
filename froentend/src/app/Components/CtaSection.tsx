// New File: froentend/src/app/Components/CtaSection.tsx

import { Box, Button, Chip, Container, Typography } from '@mui/material';
import {  FiTwitter, FiDribbble } from 'react-icons/fi';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

export default function CtaSection() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        backgroundColor: '#000',
        color: '#fff',
        py: { xs: 8, md: 12 },
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* --- Background Video --- */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: '50%',
          top: '50%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
          opacity: 0.3, // Lower opacity to make text readable
        }}
      >
        <source src="/homm.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* --- Main Content --- */}
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Chip
          label="● Available For Work"
          sx={{
            bgcolor: 'rgba(255,255,255,0.1)',
            color: '#fff',
            mb: 4,
            backdropFilter: 'blur(5px)',
          }}
        />

        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
            maxWidth: '700px',
            mx: 'auto',
            mb: { xs: 3, md: 4 },
          }}
        >
          Curious about what we can create together? Let’s bring something extraordinary to life!
        </Typography>

        <Button
              variant="contained"
              href="https://wa.me/+919898678754"
              target="_blank"
              sx={{
                bgcolor: '#fff',
                color: '#000',
                '&:hover': { bgcolor: '#eee' },
                borderRadius: '99px',
                px: { xs: 2, md: 3 },
                py: { xs: 1, md: 1.5 },
                fontSize: { xs: '0.9rem', md: '1.1rem' },
              }}
            >
              Book a Free Call
            </Button>
      </Container>
      
      {/* --- Footer Text --- */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          p: { xs: 2, md: 3 },
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 1, md: 2 },
          color: 'rgba(255, 255, 255, 0.5)',
          zIndex: 1,
        }}
      >
        <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>Peoduction.adcorner@gmail.com</Typography>
        <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>Made By Mukund Hirpara</Typography>
        <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>All rights reserved, ©{currentYear}</Typography>
      </Box>
    </Box>
  );
}

// Helper component for social icons to avoid repetition
const IconButton = ({ href, icon }: { href: string; icon: React.ReactElement }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Box
      sx={{
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: '50%',
        p: { xs: 1, md: 1.5 },
        color: 'rgba(255,255,255,0.7)',
        transition: 'all 0.3s ease',
        '&:hover': {
          borderColor: '#fff',
          color: '#fff',
          transform: 'scale(1.1)',
        },
      }}
    >
      {icon}
    </Box>
  </a>
);