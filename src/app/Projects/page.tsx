// Updated File: froentend/src/app/projects/page.tsx

import { Box, Chip, Container, Typography } from '@mui/material';
import Navbar from '../Components/Navbar';
import CtaSection from '../Components/CtaSection';
import ProjectCard from '../Components/ProjectCard';

// This is the complete list of all projects you've provided so far.
// This page will display all of them.
const allProjects = [
  { imageUrl: 'https://framerusercontent.com/images/GkhJfmw17Q5eehve51WR25Ijjnk.png', title: 'Opal', showCaseStudy: true },
  { imageUrl: 'https://framerusercontent.com/images/roWFLkzHAotwSx5UxGPxpxMeA.jpg', title: 'Dune', showCaseStudy: true },
  { imageUrl: 'https://framerusercontent.com/images/jlIAaI4caPj3oVLaxetMd2RvY.png', title: 'Oasis', showCaseStudy: true },
  { imageUrl: 'https://framerusercontent.com/images/En1SV0rP485Zf5WOrpnHl3Nz658.png', title: 'Asterisk', showCaseStudy: true },
  { imageUrl: 'https://framerusercontent.com/images/QqqmFNIdzb0HbOiMSHvqZXkwT7w.png?scale-down-to=512', title: 'Eooks', showCaseStudy: true },
  { imageUrl: 'https://framerusercontent.com/images/MM7F7DNjn9gGQjHqbiowegENsRY.png?scale-down-to=1024', title: 'Nova', showCaseStudy: true },
  { imageUrl: 'https://framerusercontent.com/images/bed888CTflXNK3KFX1R7VhRMtE.png?scale-down-to=1024', title: 'Aura', showCaseStudy: true },
  { imageUrl: 'https://framerusercontent.com/images/RYRvZnstUexQMOl8zRyrvDfDT0.png?scale-down-to=1024', title: 'Echo', showCaseStudy: true },
  { imageUrl: 'https://framerusercontent.com/images/W7bXB4tsou7l5mHYU8sze3sBeg.png?scale-down-to=1024', title: 'Helios', showCaseStudy: true },
  { imageUrl: 'https://framerusercontent.com/images/JGI1jOpxUUfW0IRfPmx7eMGhc.png?scale-down-to=1024', title: 'Celeste', showCaseStudy: true },
  { imageUrl: 'https://framerusercontent.com/images/fsFDlU7CKq0E96MXMN9fUXrNw.png?scale-down-to=512', title: 'Solstice', showCaseStudy: true },
];

export default function ProjectsPage() {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff' }}>
      <Navbar />

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        {/* --- Page Header --- */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip
            label="● Our Work"
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
            Projects
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
            A collection of our favorite projects, showcasing our passion for creating bold, strategic, and impactful brand experiences.
          </Typography>
        </Box>

        {/* --- Projects Gallery using Flexbox --- */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            mx: -1.5, // Negative margin to create gutters
          }}
        >
          {allProjects.map((project, index) => (
            <Box
              key={index}
              sx={{
                flex: { xs: '1 1 100%', sm: '1 1 50%', md: '1 1 33.333%' },
                p: 1.5, // Gutter padding
                boxSizing: 'border-box',
              }}
            >
              <ProjectCard
                imageUrl={project.imageUrl}
                title={project.title}
                showCaseStudy={project.showCaseStudy}
              />
            </Box>
          ))}
        </Box>
      </Container>

      {/* --- The page ends with the same Call to Action section --- */}
      <CtaSection />
    </Box>
  );
}
