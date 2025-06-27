import { Box, Typography } from "@mui/material";

// A simple component for the client logos at the bottom
const ClientLogo = ({ name }: { name: string }) => (
  <Typography sx={{ opacity: 0.6, fontSize: { xs: '1rem', md: '1.2rem' }, fontWeight: 'medium' }}>
    {name}
  </Typography>
);

export default function ClientLogos() {
  return (
    <Box sx={{ width: '90%', px: { xs: 2, md: 4 }, pb: { xs: 2, md: 4 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'rgba(255,255,255,0.4)', mb: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
            
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: { xs: 2, md: 4 } }}>
            <ClientLogo name="Opal" />
            <ClientLogo name="Dune" />
            <ClientLogo name="Oasis" />
            <ClientLogo name="Asterisk" />
            <ClientLogo name="Eooks" />
            <ClientLogo name="Opal" />
            <ClientLogo name="Dune" />
            <ClientLogo name="Oasis" />
            <ClientLogo name="Asterisk" />
            <ClientLogo name="Eooks" />
        </Box>
    </Box>
  );
}