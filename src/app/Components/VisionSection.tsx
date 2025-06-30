// New File: froentend/src/app/Components/VisionSection.tsx

import { Box, Chip, Container, Typography } from '@mui/material';
import { FiTrendingUp, FiHeart, FiHexagon } from 'react-icons/fi';

const principles = [
  {
    icon: <FiTrendingUp size={28} />,
    title: 'Future-Focused',
    description: 'We design with tomorrow in mind, creating scalable brand systems and digital experiences that are built to last and evolve with your business.'
  },
  {
    icon: <FiHeart size={28} />,
    title: 'Human-Centric',
    description: 'Our process is rooted in empathy. We strive to understand the end-user deeply, crafting intuitive and engaging designs that create genuine connections.'
  },
  {
    icon: <FiHexagon size={28} />,
    title: 'Bold Simplicity',
    description: 'We believe in the power of clarity. Our vision is to strip away the noise and deliver bold, simple, and impactful designs that communicate with purpose and elegance.'
  }
];

export default function VisionSection() {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">

        {/* --- Page Header --- */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip
            label="● Our Philosophy"
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
            }}
          >
            Our Vision
          </Typography>
          <Typography
            sx={{
              fontSize: '1.1rem',
              opacity: 0.7,
              maxWidth: '600px',
              mx: 'auto',
              mt: 2,
            }}
          >
            Shaping the future of branding by creating beautiful, purposeful, and sustainable design experiences that leave a lasting impact.
          </Typography>
        </Box>

        {/* --- Hero Image --- */}
        <Box sx={{ borderRadius: '16px', overflow: 'hidden', mb: 8, height: { xs: '300px', md: '500px' } }}>
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba" // Placeholder image
            alt="Mountain landscape representing vision"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>

        {/* --- Guiding Principles Section using Flexbox --- */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
          }}
        >
          {principles.map((principle) => (
            <Box
              key={principle.title}
              sx={{
                flex: 1,
                textAlign: 'center',
                p: 3,
              }}
            >
              <Box sx={{ color: 'rgba(255,255,255,0.8)', mb: 2 }}>{principle.icon}</Box>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                {principle.title}
              </Typography>
              <Typography sx={{ opacity: 0.7 }}>
                {principle.description}
              </Typography>
            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
}