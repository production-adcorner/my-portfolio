import { Box, Button, Chip, Typography } from "@mui/material";
import Navbar from "./Components/Navbar";
import ServicesPage from "./projects/page";

// A simple component for the client logos at the bottom
const ClientLogo = ({ name }: { name: string }) => (
  <Typography sx={{ opacity: 0.6, fontSize: '1.2rem', fontWeight: 'medium' }}>
    {name}
  </Typography>
);

export default function Home() {
  return (
    <Box sx={{
      height: "100vh",
      width: '100vw',
      color: '#fff',
      display: "flex",
      flexDirection: 'column',
      position: 'relative', // This is important for positioning the video
      overflow: 'hidden',
    }}>

      {/* This <video> element will play in the background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: '50%',
          top: '50%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: -1, // This places the video behind all other content
        }}
      >
        <source src="/homm.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Navbar />

      {/* Main Content Area */}
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

      {/* Bottom Section with Scroll text and Logos */}
      <Box sx={{ width: '100%', px: 4, pb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'rgba(255,255,255,0.4)', mb: 2}}>
              <Typography sx={{fontSize: '0.9rem'}}>Scroll down</Typography>
              <Typography sx={{fontSize: '0.9rem'}}>to see projects</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <ClientLogo name="Opal" />
              <ClientLogo name="Dune" />
              <ClientLogo name="Oasis" />
              <ClientLogo name="Asterisk" />
              <ClientLogo name="Eooks" />
          </Box>
      </Box>

      {/* Floating Edit Buttons */}
      <Box sx={{ position: 'fixed', bottom: 20, right: 20, display: 'flex', flexDirection: 'column', gap: 1 }}>
         <Button variant="contained" sx={{ textTransform: 'none', backgroundColor: '#fff', color: '#000', '&:hover': { backgroundColor: '#e0e0e0' }}}>Edit Portfolite</Button>
         <Button variant="contained" sx={{ textTransform: 'none', backgroundColor: '#fff', color: '#000', '&:hover': { backgroundColor: '#e0e0e0' }}}>Made in Framer</Button>
      </Box>

        <ServicesPage/>
    </Box>
  );
}