import { Box, Button, Chip, Typography } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Chip label="Crafting Unique Brand Identities" sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        color: 'white',
        backdropFilter: 'blur(10px)',
        fontSize: '0.875rem',
        p: 1.5,
        mb: 3
      }} />

      <Typography variant="h1" sx={{
        fontSize: { xs: '3rem', md: '5.5rem' },
        fontWeight: 'bold',
        mb: 2,
        lineHeight: 1.1
      }}>
        Branding that you<br />need Indeed
      </Typography>

      <Typography sx={{
        fontSize: '1.1rem',
        maxWidth: '550px',
        mx: 'auto',
        mb: 4,
        opacity: 0.8
      }}>
        Elevate your brand with custom identity and package design. Showcase your story through bold visuals and strategic design solutions.
      </Typography>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button variant="contained" sx={{
          py: 1.5, px: 4, borderRadius: '25px', textTransform: 'none', fontSize: '1rem',
          backgroundColor: '#fff', color: '#000', '&:hover': { backgroundColor: '#e0e0e0' }
        }}>
          Get Started Now
        </Button>
        <Button variant="outlined" sx={{
          py: 1.5, px: 4, borderRadius: '25px', textTransform: 'none', fontSize: '1rem',
          color: 'white', borderColor: 'rgba(255, 255, 255, 0.5)', '&:hover': { borderColor: '#fff' }
        }}>
          See Projects
        </Button>
      </Box>
    </Box>
  );
}