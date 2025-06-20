import { Box, Button, Chip, Typography } from "@mui/material";
import Navbar from "../Components/Navbar";
import ProcessStepCard from "../Components/ProcessStepCard";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// Data array for the process steps
const processSteps = [
  {
    number: '1',
    icon: <LightbulbOutlinedIcon />,
    title: 'Define Your Vision',
    description: 'Find the perfect plan tailored to your needs, offering the right balance of features, flexibility, and value to help you achieve your goals effortlessly.'
  },
  {
    number: '2',
    icon: <ListAltIcon />,
    title: 'Submit Your Request',
    description: 'Easily submit your design requirements through our private design portal, ensuring a seamless process where your vision is understood, refined, and brought to life with precision and creativity.'
  },
  {
    number: '3',
    icon: <CheckCircleOutlineIcon />,
    title: 'Project Delivered',
    description: 'As a dedicated freelancer, I ensure your project is completed with precision and delivered within 2-3 days. With a keen eye for detail and a passion for quality, I bring your vision to life—on time and beyond expectations.'
  }
];

export default function ProcessPage() {
  return (
    <Box sx={{ backgroundColor: "#000", color: '#fff', minHeight: '100vh' }}>
      <Navbar />
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' }, // On mobile, image goes first
        gap: 4,
        p: { xs: 2, md: 6 },
        maxWidth: '1600px',
        mx: 'auto',
        alignItems: 'center'
      }}>

        {/* Left Column (Image) */}
        <Box sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img
            src="/process-image.jpg" // Add an image with this name to your /public folder
            alt="Designer sketching"
            style={{ width: '100%', height: 'auto', maxHeight: '80vh', objectFit: 'cover', borderRadius: '12px' }}
          />
        </Box>

        {/* Right Column (Text Content) */}
        <Box sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}>
          <Chip label="Design process" sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: '#fff', alignSelf: 'flex-start' }} />

          <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '3rem', md: '5rem' } }}>
            Process
          </Typography>

          <Typography sx={{ fontSize: '1.1rem', opacity: 0.8, maxWidth: '600px' }}>
            crafting bold visuals that inspire and elevate brands with thought process.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, my: 2 }}>
            <Button variant="contained" sx={{ py: 1.5, px: 4, borderRadius: '25px', textTransform: 'none', fontSize: '1rem', backgroundColor: '#fff', color: '#000', '&:hover': { backgroundColor: '#e0e0e0' } }}>
              Book a Free Call
            </Button>
            <Button variant="outlined" sx={{ py: 1.5, px: 4, borderRadius: '25px', textTransform: 'none', fontSize: '1rem', color: 'white', borderColor: 'rgba(255, 255, 255, 0.5)', '&:hover': { borderColor: '#fff' } }}>
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
  );
}