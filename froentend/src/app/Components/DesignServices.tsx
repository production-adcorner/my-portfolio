// Updated File: froentend/src/app/Components/DesignServices.tsx

'use client';

import { Box, Button, Chip, Container, keyframes, Typography } from '@mui/material';
import { FiBriefcase, FiPackage, FiLayers, FiPenTool, FiBox } from 'react-icons/fi';

// ... (All data arrays and keyframes remain the same) ...
const topSkills = [
  'Product Design', 'Brand Identity Design', 'Branding',
  'Packaging Design', 'Mockup Design'
];
const services = [
  {
    icon: <FiBriefcase size={24} />,
    title: 'Brand Identity',
    description: "Crafting unique, memorable brand identities that resonate with your audience — from logos to visual systems — ensuring every touchpoint reflects your brand's essence."
  },
  {
    icon: <FiLayers size={24} />,
    title: 'Brand Design',
    description: "Designing sleek, impactful packaging that not only looks stunning but also connects with your ideal customers — turning first impressions into lasting brand loyalty."
  },
  {
    icon: <FiPackage size={24} />,
    title: 'Package Design',
    description: "Bringing your brand to life through high-fidelity product mockups, giving you a clear, realistic preview of how your packaging and visuals will stand out in the real world."
  },
  {
    icon: <FiPenTool size={24} />,
    title: 'Mockup Design',
    description: "Tailored design mockups that align perfectly with your brand's aesthetic — because every detail matters when showcasing your product's true potential."
  },
];
const marqueeSkills1 = ['Slide Decks', 'Copywriting', 'Brand Graphics', 'Brand Migration', 'Package Design', 'Branding'];
const marqueeSkills2 = ['Optimization', 'Brand Landing Pages', 'Social Media', 'Icons', 'Brand Visibility', 'Brand Integration'];
const scrollLeft = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`;
const scrollRight = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;
const MarqueeRow = ({ skills, direction = 'left' }: { skills: string[], direction?: 'left' | 'right' }) => (
    <Box sx={{ display: 'flex', animation: `${direction === 'left' ? scrollLeft : scrollRight} 40s linear infinite`, width: 'max-content' }}>
        {[...skills, ...skills].map((skill, index) => (
            <Chip key={index} label={skill} variant="outlined" icon={<FiBox size={14} />} sx={{ color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(255,255,255,0.2)', mr: 2, py: 2, px: 1.5 }} />
        ))}
    </Box>
);


export default function DesignServices() {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', py: { xs: 8, md: 12 }, overflow: 'hidden' }}>
      <Container maxWidth="lg">
        {/* --- Top Section with FLEXBOX --- */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, alignItems: 'center', mb: { xs: 6, md: 10 } }}>
          <Box sx={{ flex: '1 1 50%' }}>
            {/* ... (content is the same: Chip, Typography, Buttons) ... */}
            <Chip label="Design services" sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: '#fff', mb: 3 }} />
            <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '3rem', md: '4rem' }, mb: 2 }}>Services</Typography>
            <Typography sx={{ fontSize: '1.1rem', opacity: 0.8, maxWidth: '500px', mb: 4 }}>Helping businesses standout with brand identity packaging that captivates and converts effectively.</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 4 }}>
              {topSkills.map(skill => ( <Chip key={skill} label={skill} sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: '#fff' }} />))}
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button variant="contained" href="https://wa.me/+919898678754" target="_blank" sx={{ bgcolor: '#fff', color: '#000', '&:hover': { bgcolor: '#eee' }, borderRadius: '99px', px: 3 }}>Book a Free Call</Button>
              <Button variant="outlined" href="/Projects" sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)', '&:hover': { borderColor: '#fff' }, borderRadius: '99px', px: 3 }}>See Projects</Button>
            </Box>
          </Box>
          <Box sx={{ flex: '1 1 50%', width: '100%' }}>
            <Box sx={{ borderRadius: '16px', overflow: 'hidden' }}>
              <img src="https://framerusercontent.com/images/p6Im6dfknHAI0ig4NqDcO4WNpc.jpg?scale-down-to=1024" alt="Services" style={{ width: '100%', display: 'block' }} />
            </Box>
          </Box>
        </Box>

        {/* --- Middle Section with FLEXBOX --- */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', mx: -1.5, mb: { xs: 8, md: 12 } }}>
          {services.map(service => (
            <Box key={service.title} sx={{ flex: '1 1 50%', p: 1.5, boxSizing: 'border-box', minWidth: { xs: '100%', sm: '50%' } }}>
              <Box sx={{ p: 3, backgroundColor: '#1C1C1C', borderRadius: '12px', height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5, color: 'rgba(255,255,255,0.7)' }}>
                  {service.icon}
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>{service.title}</Typography>
                </Box>
                <Typography sx={{ fontSize: '0.9rem', opacity: 0.7 }}>{service.description}</Typography>
              </Box>
            </Box>
          ))}
        </Box>

      </Container>
      
      {/* --- Bottom Section (Marquee) --- */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <MarqueeRow skills={marqueeSkills1} direction="left" />
        <MarqueeRow skills={marqueeSkills2} direction="right" />
      </Box>

    </Box>
  );
}