'use client';
import React from 'react';
import { Box, Typography, Button, Chip } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import EditIcon from '@mui/icons-material/Edit';
import Navbar from '../Components/Navbar';

function LandingPage() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "white",
        fontFamily: "Inter, sans-serif",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <video
        src="/homm.mp4"
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url(/video.mp4)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.4,
          zIndex: 0,
        }}
      />

      {/* Content Overlay */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Navbar />

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            p: { xs: 2, md: 3 },
          }}
        >
          <Chip
label="Crafting Unique Brand Identities"
sx={{
borderColor: "rgba(255, 255, 255, 0.5)",
color: "white",
backgroundColor: "rgba(0, 0, 0, 0.5)",
mb: 4,
textTransform: "uppercase",
letterSpacing: "0.1em",
fontSize: "0.75rem",
height: "auto",
"& .MuiChip-label": {
padding: "8px 16px",
},
}}
/>

          <Typography
            component="h1"
            sx={{
              fontWeight: 400,
              lineHeight: 1.2,
              mb: 4,
              maxWidth: "1000px",
              fontSize: {
                xs: "2.5rem",
                sm: "3.5rem",
                md: "4.5rem",
                lg: "5rem",
              },
            }}
          >
            Branding that you need Indeed
          </Typography>

          <Typography
            sx={{
              color: "grey.300",
              mb: 6,
              maxWidth: "650px",
              px: 2,
              fontSize: { xs: "1rem", md: "1.125rem" },
            }}
          >
            Elevate your brand with custom identity and package design. Showcase
            your story through bold visuals and strategic design solutions.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "white",
                color: "black",
                fontWeight: 600,
                px: 4,
                py: 1.5,
                borderRadius: 2,
                transition: "transform 0.2s",
                "&:hover": {
                  bgcolor: "grey.200",
                  transform: "scale(1.05)",
                },
              }}
            >
              Get Started Now
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "white",
                color: "white",
                fontWeight: 600,
                px: 4,
                py: 1.5,
                borderRadius: 2,
                transition: "transform 0.2s, background-color 0.2s",
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "white",
                  transform: "scale(1.05)",
                },
              }}
            >
              See Projects
            </Button>
          </Box>
        </Box>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            width: "100%",
            p: { xs: 2, md: 4 },
            typography: "body2",
            color: "grey.400",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <ArrowDownwardIcon />
            <Typography variant="caption">
              Scroll down to see projects
            </Typography>
          </Box>
          <Button
            startIcon={<EditIcon />}
            sx={{
              color: "grey.300",
              textTransform: "none",
              bgcolor: "rgba(255, 255, 255, 0.1)",
              borderRadius: 2,
              px: 2,
              py: 1,
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.2)",
              },
            }}
          >
            Edit Portfolite
          </Button>
        </Box>
      </Box>
    </Box>
  );
}


export default LandingPage;