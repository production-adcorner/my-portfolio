// New File: froentend/src/app/Components/ProjectSpotlight.tsx

import { Box, Chip, Container, Divider, Grid, Typography } from '@mui/material';

// --- Data for the component, easy to edit here ---
const skills = [
  'Graphic Design', 'Logo Design', 'Illustration',
  'Branding', 'UI/UX', 'Adobe Creative Suite'
];

const experience = [
  { role: 'Lead Graphic Designer', company: 'Creative Minds', period: 'Currently' },
  { role: 'Graphic Designer', company: 'DesignHub', period: '2022-24' },
  { role: 'Junior Designer', company: 'PixelPerfect', period: '2020-22' },
];

const ExperienceRow = ({ role, company, period }: { role: string, company: string, period: string }) => (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, py: 1.5 }}>
        <Typography sx={{ flex: { xs: '1 1 100%', sm: '1 1 33.3%' }, opacity: 0.8, mb: { xs: 0.5, sm: 0 } }}>{role}</Typography>
        <Typography sx={{ flex: { xs: '1 1 100%', sm: '1 1 33.3%' }, textAlign: { xs: 'left', sm: 'center' }, mb: { xs: 0.5, sm: 0 } }}>{company}</Typography>
        <Typography sx={{ flex: { xs: '1 1 100%', sm: '1 1 33.3%' }, textAlign: { xs: 'left', sm: 'right' }, opacity: 0.5 }}>{period}</Typography>
    </Box>
);


export default function MeetVijay() {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 8, alignItems: 'center' }}>

          {/* --- Left Column: Text Content --- */}
          <Box sx={{ flex: '1', width: { xs: '100%', md: 'auto' } }}>
            <Box>
              <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '3rem', md: '5rem' } }}>
                Meet Vijay Bhadani
              </Typography>
              <Typography sx={{ fontSize: '1.1rem', opacity: 0.8, mt: 2, maxWidth: '600px', lineHeight: 1.7 }}>
                I'm Vijay Bhadani, a passionate Graphic Designer. I specialize in creating visually stunning and effective designs that communicate brand messages and captivate audiences. My work combines artistic flair with strategic thinking to deliver impactful results.
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
                src="https://framerusercontent.com/images/GTWhJyJde9nAeuMXqgYJh6jQhrU.jpg?scale-down-to=1024"
                alt="Portrait of Vijay Bhadani"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: 'scaleX(-1)'
                }}
              />
            </Box>
          </Box>

        </Box>
      </Container>
    </Box>
  );
}