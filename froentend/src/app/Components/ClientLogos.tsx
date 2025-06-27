import { Box, Typography } from "@mui/material";

// A simple component for the client logos at the bottom
const ClientLogo = ({ name }: { name: string }) => (
  <Typography sx={{ opacity: 0.6, fontSize: '1.2rem', fontWeight: 'medium' }}>
    {name}
  </Typography>
);

export default function ClientLogos() {
  return (
    <Box sx={{ width: '90%', px: 4, pb: 4 }}>
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
  );
}