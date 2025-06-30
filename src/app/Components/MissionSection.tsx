// New File: froentend/src/app/Components/MissionSection.tsx

import { Box, Chip, Container, Typography } from '@mui/material';

export default function MissionSection() {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">

        {/* --- Flex container for two-column layout --- */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 8, alignItems: 'center' }}>

          {/* --- Left Column: Text Content --- */}
          <Box sx={{ flex: '1 1 50%', textAlign: { xs: 'center', md: 'left' } }}>
            <Chip
              label="● Our Purpose"
              sx={{
                bgcolor: 'rgba(255,255,255,0.1)',
                color: '#fff',
                mb: 2,
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '3rem', md: '5rem' },
                mb: 2,
              }}
            >
              Our Mission
            </Typography>
            <Typography
              sx={{
                fontSize: '1.2rem',
                opacity: 0.8,
                maxWidth: '600px',
                mx: { xs: 'auto', md: 0 },
                lineHeight: 1.7
              }}
            >
              To empower brands by crafting unforgettable design experiences that blend strategic thinking with creative excellence. We are committed to building collaborative partnerships and delivering solutions that not only look beautiful but also drive meaningful results and lasting growth.
            </Typography>
          </Box>

          {/* --- Right Column: Image --- */}
          <Box sx={{ flex: '1 1 50%', width: '100%' }}>
            <Box sx={{ borderRadius: '16px', overflow: 'hidden', height: { xs: '300px', md: '500px' } }}>
              <img
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd" // Placeholder image
                alt="Winding road representing mission journey"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}