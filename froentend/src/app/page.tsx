// Updated File: froentend/src/app/page.tsx

import { Box } from "@mui/material";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import ClientLogos from "./Components/ClientLogos";
import FeaturedProjects from "./Components/FeaturedProjects";
import ProjectSpotlight from "./Components/ProjectSpotlight"; 
import RecentWorks from "./Components/RecentWorks";
import DesignProcess from "./Components/DesignProcess";
import DesignServices from "./Components/DesignServices";
import ClientReviews from "./Components/ClientReviews";
import FaqSection from "./Components/FaqSection";
import CtaSection from "./Components/CtaSection";


export default function Home() {
  return (
    <Box>
      <Navbar /> {/* We add Navbar and Footer here to wrap the whole page */}

      {/* Hero Section with Video Background */}
      <Box sx={{
        height: "100vh",
        width: '100vw',
        display: "flex",
        flexDirection: 'column',
        position: 'relative',
        color: '#fff',
      }}>
        <video autoPlay loop muted playsInline style={{ position: 'absolute', width: '100%', height: '100%', left: '50%', top: '50%', objectFit: 'cover', transform: 'translate(-50%, -50%)', zIndex: -1 }}>
          <source src="/homm.mp4" type="video/mp4" />
        </video>
        
        <HeroSection />
        <ClientLogos />
      </Box>

      {/* Assemble your single page here */}
      <FeaturedProjects />
      <ProjectSpotlight />
      <RecentWorks />
      <DesignProcess />
      <DesignServices />
      <ClientReviews />
      <FaqSection />
      <CtaSection />
    </Box>
  );
}