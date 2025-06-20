import { Box, Button, Typography } from "@mui/material";
import ProjectCard from "../Components/ProjectCard";
// Mock data for the 9 service images.
// Replace with your actual project details and image paths.
const serviceImages = [
  { imageUrl: 'https://framerusercontent.com/images/RYRvZnstUexQMOl8zRyrvDfDT0.png', title: 'Service 1', showCaseStudy: false },
  { imageUrl: 'https://framerusercontent.com/images/GkhJfmw17Q5eehve51WR25Ijjnk.png', title: 'Service 2', showCaseStudy: false },
  { imageUrl: 'https://framerusercontent.com/images/En1SV0rP485Zf5WOrpnHl3Nz658.png', title: 'Service 3', showCaseStudy: false },
  { imageUrl: 'https://framerusercontent.com/images/bed888CTflXNK3KFX1R7VhRMtE.png', title: 'Service 4', showCaseStudy: true },
  { imageUrl: 'https://framerusercontent.com/images/jlIAaI4caPj3oVLaxetMd2RvY.png', title: 'Service 5', showCaseStudy: true },
  { imageUrl: 'https://framerusercontent.com/images/MM7F7DNjn9gGQjHqbiowegENsRY.png', title: 'Service 6', showCaseStudy: true },
  { imageUrl: 'https://framerusercontent.com/images/W7bXB4tsou7l5mHYU8sze3sBeg.png', title: 'Service 7', showCaseStudy: true },
  { imageUrl: 'https://framerusercontent.com/images/roWFLkzHAotwSx5UxGPxpxMeA.jpg', title: 'Service 8', showCaseStudy: true },
  { imageUrl: 'https://framerusercontent.com/images/QqqmFNIdzb0HbOiMSHvqZXkwT7w.png', title: 'Service 9', showCaseStudy: true },
];

export default function ServicesPage() {
  return (
    <Box sx={{ backgroundColor: "#000", color: '#fff', minHeight: '100vh' }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center the content horizontally
        p: { xs: 2, md: 4 }
      }}>

        {/* This Box is the flex container for the 3x3 grid */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap', // Allows items to wrap to the next line
            justifyContent: 'center',
            gap: 2, // The space between the boxes
            width: '100%',
            maxWidth: '1200px', // Max width of the grid container
            mb: 4, // Margin bottom before the buttons
          }}
        >
          {serviceImages.map((project, index) => (
            // Each child Box takes up roughly 1/3 of the width
            <Box
              key={index}
              sx={{
                flexBasis: {
                  xs: '100%', // On extra-small screens, take full width
                  sm: '45%',   // On small screens, take ~half width
                  md: 'calc(33.333% - 16px)' // On medium screens and up, take 1/3 width minus gap
                },
                aspectRatio: '1 / 1', // Maintain a square shape
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

        {/* Buttons at the bottom */}
        <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="contained" sx={{
                py: 1.5, px: 4, borderRadius: '25px', textTransform: 'none', fontSize: '1rem',
                backgroundColor: '#fff', color: '#000', '&:hover': { backgroundColor: '#e0e0e0' }
            }}>
                All Projects
            </Button>
            <Button variant="outlined" sx={{
                py: 1.5, px: 4, borderRadius: '25px', textTransform: 'none', fontSize: '1rem',
                color: 'white', borderColor: 'rgba(255, 255, 255, 0.5)', '&:hover': { borderColor: '#fff' }
            }}>
                Book a Free Call
            </Button>
        </Box>

      </Box>
    </Box>
  );
}