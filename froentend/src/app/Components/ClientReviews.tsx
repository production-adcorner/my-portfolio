// New File: froentend/src/app/Components/ClientReviews.tsx

'use client';

import { Box, Button, Chip, Container, keyframes, Typography } from '@mui/material';
import TestimonialCard from './TestimonialCard'; // Reusing your existing card
import KeyMetricsSection from './KeyMetricsSection'; // Reusing your existing metrics section

// --- Data for the component, structured from your text and URLs ---
const testimonials = [
  {
    photoUrl: 'https://framerusercontent.com/images/c5E9pkEhKO6BmnqFuXLWa9Xqw34.png?scale-down-to=1024',
    name: 'Richards Johnson',
    title: 'Creative Director & Lead Designer',
    review: "Working with Meily was a seamless experience. Her ability to merge creativity with functionality resulted in designs that not only looked stunning but also drove meaningful engagement. Highly recommended!",
    rating: 5,
  },
  {
    photoUrl: 'https://framerusercontent.com/images/hSbSnYWGLq3elsCJfJAmFGgQZOc.png?scale-down-to=512',
    name: 'June Lee',
    title: 'CEO of GreenRoots',
    review: "Meily's strategic approach to design brought our brand vision to life. The packaging and brand elements she developed elevated our aesthetic and aligned perfectly with our sustainability values.",
    rating: 5,
  },
  {
    photoUrl: 'https://framerusercontent.com/images/GTWhJyJde9nAeuMXqgYJh6jQhrU.jpg?scale-down-to=1024',
    name: 'Jona Carter',
    title: 'Founder of EcoLux',
    review: 'Every project Meily touches turns into a perfect blend of design and purpose. She crafted packaging that reflected our eco-friendly mission while making our products stand out on the shelves.',
    rating: 5,
  },
  {
    photoUrl: 'https://framerusercontent.com/images/VG4Ga2U7ZktrC75M3Vg8eUynj4M.png?scale-down-to=512',
    name: 'Sofia Toms',
    title: 'Founder at GreenK Studios',
    review: "Meily's designs speak for themselves — bold, strategic, and impactful. She took the time to understand our brand, delivering packaging concepts that resonated with our target audience and boosted our product's visibility.",
    rating: 5,
  },
];

// --- CSS Animation for the marquee ---
const scrollLeft = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`;

export default function ClientReviews() {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', py: { xs: 8, md: 12 }, overflow: 'hidden' }}>
      <Container maxWidth="lg">
        {/* --- Top Section --- */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, alignItems: 'center', mb: 8 }}>
          <Box sx={{ flex: '1 1 50%', width: '100%' }}>
            <Box sx={{ borderRadius: '16px', overflow: 'hidden' }}>
              <img src="https://framerusercontent.com/images/PjaPY2S6qP6ii6fCxTJHhHU66SM.png" alt="Client Reviews" style={{ width: '100%', display: 'block' }} />
            </Box>
          </Box>
          <Box sx={{ flex: '1 1 50%' }}>
            <Chip label="● Reviews" sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: '#fff', mb: 2 }} />
            <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '3rem', md: '4rem' }, mb: 2 }}>
              Client Reviews
            </Typography>
            <Typography sx={{ fontSize: '1.1rem', opacity: 0.8, maxWidth: '500px', mb: 4 }}>
              Real feedback from clients who trusted my design expertise to elevate their brands successfully.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button variant="contained" sx={{ bgcolor: '#fff', color: '#000', '&:hover': { bgcolor: '#eee' }, borderRadius: '99px', px: 3 }}>Book a Free Call</Button>
              <Button variant="outlined" sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)', '&:hover': { borderColor: '#fff' }, borderRadius: '99px', px: 3 }}>See Services</Button>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* --- Animated Testimonials Section --- */}
      <Box sx={{ display: 'flex', animation: `${scrollLeft} 60s linear infinite`, width: 'max-content', mb: 8 }}>
        {/* We render the list twice for a seamless loop */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <Box key={index} sx={{ width: '400px', mx: 2 }}>
            <TestimonialCard {...testimonial} />
          </Box>
        ))}
      </Box>

      {/* --- Key Metrics Section --- */}
      <Container maxWidth="lg">
        <KeyMetricsSection />
      </Container>
    </Box>
  );
}