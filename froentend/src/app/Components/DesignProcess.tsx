// New File: froentend/src/app/Components/DesignProcess.tsx

import { Box, Button, Chip, Container, Grid, Typography } from '@mui/material';
import ProcessStepCard from './ProcessStepCard'; // Reusing your existing card component

// Icons for the process steps
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// Data for the process steps, using the text you provided
const processSteps = [
  {
    number: '1',
    icon: <LightbulbOutlinedIcon sx={{ fontSize: 28 }} />,
    title: 'Define Your Vision',
    description: 'Find the perfect plan tailored to your needs, offering the right balance of features, flexibility, and value to help you achieve your goals effortlessly.'
  },
  {
    number: '2',
    icon: <ListAltIcon sx={{ fontSize: 28 }} />,
    title: 'Submit Your Request',
    description: 'Easily submit your design requirements through our private design portal, ensuring a seamless process where your vision is understood, refined, and brought to life with precision and creativity.'
  },
  {
    number: '3',
    icon: <CheckCircleOutlineIcon sx={{ fontSize: 28 }} />,
    title: 'Project Delivered',
    description: 'As a dedicated freelancer, I ensure your project is completed with precision and delivered within 2-3 days. With a keen eye for detail and a passion for quality, I bring your vision to life—on time and beyond expectations.'
  }
];

export default function DesignProcess() {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, alignItems: 'center' }}>

          {/* --- Left Column: Image --- */}
          <Box sx={{ flex: '1', width: { xs: '100%', md: 'auto' }, display: { xs: 'none', md: 'block' } }}>
            <Box
              sx={{
                width: '100%',
                height: '100vh', 
                borderRadius: '16px',
                overflow: 'hidden',
              }}
            >
              <img
                src="https://framerusercontent.com/images/djbcRHCD89IflJ1okJAa1J65cuM.png"
                alt="Designer sketching"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          </Box>

          {/* --- Right Column: Text Content --- */}
          <Box sx={{ flex: '1', width: { xs: '100%', md: 'auto' } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Chip
                label="Design process"
                sx={{
                  bgcolor: 'rgba(255,255,255,0.1)',
                  color: '#fff',
                  alignSelf: 'flex-start' // Positions chip to the left
                }}
              />

              <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '3rem', md: '4rem' } }}>
                Process
              </Typography>

              <Typography sx={{ fontSize: '1.1rem', opacity: 0.8, maxWidth: '600px', mb: 2 }}>
                crafting bold visuals that inspire and elevate brands with thought process.
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                <Button
              variant="contained"
              href="https://wa.me/+919898678754"
              target="_blank"
              sx={{
                bgcolor: '#fff',
                color: '#000',
                '&:hover': { bgcolor: '#eee' },
                borderRadius: '99px',
                px: 3,
                py: 1.5,
                fontSize: '1.1rem',
              }}
            >
              Book a Free Call
            </Button>
                <Button
              variant="outlined"
              href="/Projects"
              sx={{
                color: '#fff',
                borderColor: 'rgba(255,255,255,0.5)',
                '&:hover': { borderColor: '#fff' },
                borderRadius: '99px',
                px: 3,
                py: 1.5,
                fontSize: '1.1rem',
              }}
            >
              See Projects
            </Button>
              </Box>

              {/* Mapping over the steps to render the cards */}
              {processSteps.map(step => (
                <ProcessStepCard
                  key={step.number}
                  number={step.number}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}