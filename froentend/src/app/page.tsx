
import { Box } from "@mui/material";
import Navbar from "./Components/Navbar";
import BackgroundVideo from "./Components/BackgroundVideo"; // Import the new component
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
      <Navbar />
      <BackgroundVideo>
        <HeroSection />
        <ClientLogos />
      </BackgroundVideo>
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