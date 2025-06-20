// import { Box, Button, Chip, Divider, Typography } from "@mui/material";
// import Navbar from "../Components/Navbar";
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// // Data for the experience section to keep the code clean
// const experience = [
//   { role: 'Freelance', company: 'GreenLeaf Co', period: 'Currently' },
//   { role: 'Brand Designer', company: 'UrbanFit Studio', period: '2023-24' },
//   { role: 'Package Designer', company: 'GreenX Studio', period: '2020-22' },
// ];

// // Data for the skill chips
// const skillChips1 = ['Product Design', 'Brand Identity Design', 'UX Design', 'Branding', 'Packaging Design'];
// const skillChips2 = ['Figma', 'Photoshop'];

// export default function ContactPage() {
//   return (
//     <Box sx={{ backgroundColor: "#000", color: '#fff', minHeight: '100vh' }}>
//       <Navbar />
//       <Box sx={{
//         display: 'flex',
//         flexDirection: { xs: 'column', md: 'row' }, // Stacks on mobile, row on desktop
//         gap: 4,
//         p: { xs: 2, md: 6 },
//         maxWidth: '1600px',
//         mx: 'auto'
//       }}>

//         {/* Left Column (Text Content) */}
//         <Box sx={{
//           flex: 1,
//           display: 'flex',
//           flexDirection: 'column',
//           gap: 4
//         }}>
//           {/* Introduction Section */}
//           <Box>
//             <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '3rem', md: '5rem' } }}>
//               Meet Meily
//             </Typography>
//             <Typography sx={{ fontSize: '1.1rem', opacity: 0.8, mt: 2, maxWidth: '600px' }}>
//               I'm Meily, a passionate Brand Identity & Package Designer based in Tokyo. I specialize in crafting bold visual identities and packaging that captivate and inspire, blending creativity with strategy to elevate brands.
//             </Typography>
//           </Box>

//           {/* Skills Section */}
//           <Box>
//             <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
//               {skillChips1.map(skill => (
//                 <Chip key={skill} label={skill} sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: '#fff' }} />
//               ))}
//             </Box>
//             <Divider sx={{ my: 2, bgcolor: 'rgba(255,255,255,0.2)' }} />
//             <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
//               {skillChips2.map(skill => (
//                 <Chip key={skill} label={skill} sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: '#fff' }} />
//               ))}
//             </Box>
//           </Box>
//           <Divider sx={{ my: 2, bgcolor: 'rgba(255,255,255,0.2)' }} />

//           {/* Experience Section */}
//           <Box>
//             {experience.map(exp => (
//               <Box key={exp.company} sx={{ display: 'flex', justifyContent: 'space-between', py: 1.5 }}>
//                 <Typography sx={{ opacity: 0.7 }}>{exp.role}</Typography>
//                 <Typography>{exp.company}</Typography>
//                 <Typography sx={{ opacity: 0.5 }}>{exp.period}</Typography>
//               </Box>
//             ))}
//           </Box>
//           <Divider sx={{ my: 2, bgcolor: 'rgba(255,255,255,0.2)' }} />

//           {/* Recent Works Button */}
//           <Box>
//              <Button
//                 endIcon={<ArrowForwardIcon />}
//                 sx={{ color: '#fff', textTransform: 'none', fontSize: '1.1rem' }}
//               >
//                 Recent Works
//               </Button>
//           </Box>
//         </Box>

//         {/* Right Column (Image) */}
//         <Box sx={{
//           flex: 1,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           minHeight: '400px'
//         }}>
//           <img
//             src="/meily-portrait.jpg" // Add an image with this name to your /public folder
//             alt="Portrait of Meily"
//             style={{ width: '100%', height: 'auto', maxHeight: '80vh', objectFit: 'cover', borderRadius: '12px' }}
//           />
//         </Box>

//       </Box>
//     </Box>
//   );


// }












import { Box, Button, Chip, Divider, Typography } from "@mui/material";
import Navbar from "../Components/Navbar";
import RecentWorksCarousel from "../Components/RecentWorksCarousel"; // 1. IMPORT THE NEW COMPONENT

const experience = [
    // ... (experience data remains the same)
];
const skillChips1 = [/*...*/]; // ... (skill data remains the same)
const skillChips2 = [/*...*/]; // ... (skill data remains the same)

export default function ContactPage() {
    return (
        <Box sx={{ backgroundColor: "#000", color: '#fff', minHeight: '100vh' }}>
            <Navbar />
            <Box sx={{
                // ... (main container styles remain the same)
            }}>

                {/* Left Column (Text Content) */}
                <Box sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4
                }}>
                    {/* ... (Introduction, Skills, Experience sections remain the same) ... */}
                    
                    {/* 2. REMOVE THE OLD BUTTON AND ADD THE NEW CAROUSEL COMPONENT */}
                    <RecentWorksCarousel />

                </Box>

                {/* Right Column (Image) */}
                <Box sx={{
                    // ... (right column styles remain the same)
                }}>
                    <img
                        src="/meily-portrait.jpg"
                        alt="Portrait of Meily"
                        style={{ width: '100%', height: 'auto', maxHeight: '80vh', objectFit: 'cover', borderRadius: '12px' }}
                    />
                </Box>

            </Box>
        </Box>
    );
}