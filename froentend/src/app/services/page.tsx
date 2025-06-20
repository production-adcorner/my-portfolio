import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import Navbar from "../Components/Navbar";
import ServiceCard from "../Components/ServiceCard";
import StyleIcon from '@mui/icons-material/Style';
import BrushIcon from '@mui/icons-material/Brush';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';

// Data for the different sections to keep the code clean
const topSkills = ['Product Design', 'Brand Identity Design', 'Branding', 'Packaging Design', 'Mockup Design'];

const services = [
  {
    icon: <StyleIcon />,
    title: 'Brand Identity',
    description: 'Crafting unique, memorable brand identities that resonate with your audience — from logos to visual systems — ensuring every touchpoint reflects your brand’s essence.'
  },
  {
    icon: <BrushIcon />,
    title: 'Brand Design',
    description: 'Designing sleek, impactful packaging that not only looks stunning but also connects with your ideal customers — turning first impressions into lasting brand loyalty.'
  },
  {
    icon: <Inventory2OutlinedIcon />,
    title: 'Package Design',
    description: 'Bringing your brand to life through high-fidelity product mockups, giving you a clear, realistic preview of how your packaging and visuals will stand out in the real world.'
  },
  {
    icon: <PhotoSizeSelectActualOutlinedIcon />,
    title: 'Mockup Design',
    description: 'Tailored design mockups that align perfectly with your brand’s aesthetic — because every detail matters when showcasing your product’s true potential.'
  }
];

const bottomSkills = ['Brand Graphics', 'Brand Migration', 'Package Design', 'Branding', 'Slide Decks', 'Copywriting'];

export default function ServicesPage() {
  return (
    <Box sx={{ backgroundColor: "#000", color: '#fff', minHeight: '100vh' }}>
      <Navbar />
      <Box sx={{ p: { xs: 2, md: 6 }, maxWidth: '1600px', mx: 'auto' }}>

        {/* Top Section: Title and Image */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center', mb: 6 }}>
          {/* Left Column */}
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'flex-start' }}>
            <Chip label="Design services" sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: '#fff' }} />
            <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '3rem', md: '5rem' } }}>
              Services
            </Typography>
            <Typography sx={{ fontSize: '1.1rem', opacity: 0.8, maxWidth: '500px' }}>
              Helping businesses standout with brand identity packaging that captivates and converts effectively.
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, my: 1 }}>
              {topSkills.map(skill => (
                <Chip key={skill} label={skill} sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: '#fff' }} />
              ))}
            </Box>
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <Button variant="contained" sx={{ py: 1.5, px: 4, borderRadius: '25px', textTransform: 'none', backgroundColor: '#fff', color: '#000', '&:hover': { backgroundColor: '#e0e0e0' } }}>
                Book a Free Call
              </Button>
              <Button variant="outlined" sx={{ py: 1.5, px: 4, borderRadius: '25px', textTransform: 'none', color: 'white', borderColor: 'rgba(255, 255, 255, 0.5)', '&:hover': { borderColor: '#fff' } }}>
                See Projects
              </Button>
            </Box>
          </Box>
          {/* Right Column */}
          <Box sx={{ flex: 1 }}>
            <img src="/services-hero.jpg" alt="Product bottles" style={{ width: '100%', borderRadius: '12px', objectFit: 'cover' }} />
          </Box>
        </Box>

        {/* Middle Section: 2x2 Services Grid */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {services.map(service => (
            <Grid item xs={12} sm={6} key={service.title}>
              <ServiceCard icon={service.icon} title={service.title} description={service.description} />
            </Grid>
          ))}
        </Grid>

        {/* Bottom Section: More Skills */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1.5 }}>
          {bottomSkills.map(skill => (
            <Chip key={skill} label={skill} icon={<StyleIcon sx={{ fontSize: 16 }} />} sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: '#fff', p: 1 }} />
          ))}
        </Box>

      </Box>
    </Box>
  );
}