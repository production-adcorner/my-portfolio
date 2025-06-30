// Updated File: froentend/src/app/Components/FeaturedProjects.tsx

import { Box, Button, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard"; // We are reusing your existing ProjectCard

// Updated list of all your featured projects
const featuredProjects = [
  {
    imageUrl: 'https://framerusercontent.com/images/GkhJfmw17Q5eehve51WR25Ijjnk.png',
    title: 'Project One',
    showCaseStudy: true
  },
  {
    imageUrl: 'https://framerusercontent.com/images/roWFLkzHAotwSx5UxGPxpxMeA.jpg',
    title: 'Project Two',
    showCaseStudy: true
  },
  {
    imageUrl: 'https://framerusercontent.com/images/jlIAaI4caPj3oVLaxetMd2RvY.png',
    title: 'Project Three',
    showCaseStudy: true
  },
  {
    imageUrl: 'https://framerusercontent.com/images/En1SV0rP485Zf5WOrpnHl3Nz658.png',
    title: 'Project Four',
    showCaseStudy: true
  },
  {
    imageUrl: 'https://framerusercontent.com/images/QqqmFNIdzb0HbOiMSHvqZXkwT7w.png?scale-down-to=512',
    title: 'Project Five',
    showCaseStudy: true
  },
  {
    imageUrl: 'https://framerusercontent.com/images/MM7F7DNjn9gGQjHqbiowegENsRY.png?scale-down-to=1024',
    title: 'Project Six',
    showCaseStudy: true
  },
  {
    imageUrl: 'https://framerusercontent.com/images/bed888CTflXNK3KFX1R7VhRMtE.png?scale-down-to=1024',
    title: 'Project Seven',
    showCaseStudy: true
  },
  {
    imageUrl: 'https://framerusercontent.com/images/RYRvZnstUexQMOl8zRyrvDfDT0.png?scale-down-to=1024',
    title: 'Project Eight',
    showCaseStudy: true
  },
  {
    imageUrl: 'https://framerusercontent.com/images/W7bXB4tsou7l5mHYU8sze3sBeg.png?scale-down-to=1024',
    title: 'Project Nine',
    showCaseStudy: true
  },
];

export default function FeaturedProjects() {
  return (
    <Box sx={{ backgroundColor: "#000", color: '#fff', py: 8, px: { xs: 2, md: 4 } }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto', textAlign: 'center' }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 4, fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' } }}>
          Featured Projects
        </Typography>

        {/* This grid is now a 3x3 on larger screens */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
            gap: { xs: 2, md: 3 },
            mb: 6,
          }}
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              imageUrl={project.imageUrl}
              title={project.title}
              showCaseStudy={project.showCaseStudy}
            />
          ))}
        </Box>

        {/* This button links to your full projects page */}
        <Button
          variant="contained"
          href="/Projects"
          sx={{
            py: { xs: 1, md: 1.5 }, px: { xs: 3, md: 4 }, borderRadius: '25px', textTransform: 'none', fontSize: { xs: '0.9rem', md: '1rem' },
            backgroundColor: '#fff', color: '#000', '&:hover': { backgroundColor: '#e0e0e0' }
          }}>
            View All Projects
        </Button>
      </Box>
    </Box>
  );
}