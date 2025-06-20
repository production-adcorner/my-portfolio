'use client';
import { Box, Button, Divider, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ProjectCard from "./ProjectCard"; // We will reuse the ProjectCard component

// Mock data for the carousel.
const recentWorks = [
    { imageUrl: '/projects/recent1.jpg', title: 'Pouch Packaging', showCaseStudy: true },
    { imageUrl: '/projects/recent2.jpg', title: 'Dispenser Bottle', showCaseStudy: true },
    { imageUrl: '/projects/recent3.jpg', title: 'Tote Bag', showCaseStudy: true },
    { imageUrl: '/projects/recent4.jpg', title: 'Skincare Tube', showCaseStudy: true },
    { imageUrl: '/projects/recent5.jpg', title: 'Another Project', showCaseStudy: true },
];

export default function RecentWorksCarousel() {
    return (
        <Box sx={{ width: '100%', py: 4 }}>
            {/* Section Title */}
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
                Recent Works
            </Typography>
            <Divider sx={{ mb: 3, bgcolor: 'rgba(255,255,255,0.2)' }} />


            {/* Horizontally Scrolling Container */}
            <Box
                sx={{
                    display: 'flex',
                    overflowX: 'auto', // This enables horizontal scrolling
                    gap: 3,
                    py: 2,
                    // Hide the default scrollbar
                    '&::-webkit-scrollbar': {
                        display: 'none'
                    },
                    scrollbarWidth: 'none', // For Firefox
                    '-ms-overflow-style': 'none', // For Internet Explorer + Edge
                }}
            >
                {recentWorks.map((project, index) => (
                    // Each child box has a fixed width so they don't get squished
                    <Box
                        key={index}
                        sx={{
                            flex: '0 0 auto', // Prevents the item from shrinking
                            width: { xs: '280px', md: '350px' },
                            aspectRatio: '4 / 3', // Maintain a consistent aspect ratio
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
        </Box>
    );
}