// New File: froentend/src/app/Components/ProjectSpotlight.tsx

import { Box, Chip, Container, Divider, Grid, Typography } from '@mui/material';

// --- Data for the component, easy to edit here ---
const skills = [
  'Product Design', 'Brand Identity Design', 'UX Design',
  'Branding', 'Packaging Design', 'Figma', 'Photoshop'
];

const experience = [
  { role: 'Freelance', company: 'GreenLeaf Co', period: 'Currently' },
  { role: 'Brand Designer', company: 'UrbanFit Studio', period: '2023-24' },
  { role: 'Package Designer', company: 'GreenK Studio', period: '2020-22' },
];

const ExperienceRow = ({ role, company, period }: { role: string, company: string, period: string }) => (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1.5 }}>
        <Typography sx={{ width: '33.3%', opacity: 0.8 }}>{role}</Typography>
        <Typography sx={{ width: '33.3%', textAlign: 'left' }}>{company}</Typography>
        <Typography sx={{ width: '33.3%', textAlign: 'right', opacity: 0.5 }}>{period}</Typography>
    </Box>
);


export default function MeetMeily() {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 8, alignItems: 'center' }}>

          {/* --- Left Column: Text Content --- */}
          <Box sx={{ flex: '1', width: { xs: '100%', md: 'auto' } }}>
            <Box>
              <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '3rem', md: '5rem' } }}>
                Meet Meily
              </Typography>
              <Typography sx={{ fontSize: '1.1rem', opacity: 0.8, mt: 2, maxWidth: '600px', lineHeight: 1.7 }}>
                I'm Meily, a passionate Brand Identity & Package Designer based in Tokyo. I specialize in crafting bold visual identities and packaging that captivate and inspire, blending creativity with strategy to elevate brands.
              </Typography>

              <Divider sx={{ my: 4, bgcolor: 'rgba(255, 255, 255, 0.2)' }} />

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                {skills.map(skill => (
                  <Chip
                    key={skill}
                    label={skill}
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      p: 1,
                      fontSize: '0.875rem'
                    }}
                  />
                ))}
              </Box>

              <Divider sx={{ my: 4, bgcolor: 'rgba(255, 255, 255, 0.2)' }} />

              <Box>
                {experience.map(exp => (
                  <ExperienceRow key={exp.company} {...exp} />
                ))}
              </Box>

            </Box>
          </Box>

          {/* --- Right Column: Image --- */}
          <Box sx={{ flex: '1', width: { xs: '100%', md: 'auto' } }}>
            <Box sx={{
              width: '100%',
              aspectRatio: '1 / 1.1', // Makes the image container slightly taller
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden'
            }}>
              <img
                // IMPORTANT: Replace this with your actual image URL
                src="https://framerusercontent.com/images/roWFLkzHAotwSx5UxGPxpxMeA.jpg?scale-down-to=1024"
                alt="Portrait of Meily"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Box>

        </Box>
      </Container>
    </Box>
  );
}