import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import TestimonialCard, { Testimonial } from '../Components/TestimonialCard'; // Import the card component

// This would be your actual image component or an img tag
const PlaceholderImage = () => (
    <Box sx={{ width: '100%', height: { xs: 250, md: 400 }, backgroundColor: '#333', borderRadius: 2 }} />
);

// Sample data for the testimonials. You would likely fetch this from a CMS or database.
const sampleTestimonials: Testimonial[] = [
  {
    photoUrl: '/path/to/client1.jpg',
    name: 'Jane Doe',
    title: 'CEO, Innovate Inc.',
    review: 'The design expertise brought our vision to life in a way we couldn\'t have imagined. The process was seamless and professional.',
    rating: 5,
  },
  {
    photoUrl: '/path/to/client2.jpg',
    name: 'John Smith',
    title: 'Marketing Director, Growth Co.',
    review: 'An incredible partner who elevated our brand identity. The new landing pages have significantly improved our conversion rates.',
    rating: 5,
  },
  {
    photoUrl: '/path/to/client3.jpg',
    name: 'Emily White',
    title: 'Founder, Creative Solutions',
    review: 'Working with them was a game-changer. They are not just designers, but true brand strategists. Highly recommend their services.',
    rating: 5,
  },
];


const ClientReviewsPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        p: { xs: 2, md: 6 },
      }}
    >
      {/* --- Top Section from previous example --- */}
      <Box sx={{ display: 'flex', alignItems: 'center', maxWidth: '1200px', mx: 'auto', mb: 8 }}>
        <Box flex={1}>
          <PlaceholderImage />
        </Box>
        <Box flex={1}>
          <Typography variant="body2" sx={{ color: '#aaa', textTransform: 'uppercase' }}>Reviews</Typography>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', my: 2 }}>Client Reviews</Typography>
          <Typography variant="body1" sx={{ color: '#ccc', mb: 4, maxWidth: '500px' }}>Real feedback from clients who trusted my design expertise to elevate their brands successfully.</Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="contained" sx={{ bgcolor: 'white', color: 'black', '&:hover': { bgcolor: '#eee' } }}>Book a Free Call</Button>
            <Button variant="outlined" sx={{ borderColor: 'white', color: 'white', '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } }}>See Services</Button>
          </Box>
        </Box>
      </Box>
      
      {/* --- NEW: Testimonial Cards Flex Section --- */}
      <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
          {sampleTestimonials.map((testimonial, index) => (
            <Box key={index} flex={1} sx={{ maxWidth: '400px' }}>
              <TestimonialCard {...testimonial} />
            </Box>
          ))}
        </Box>
      </Box>

    </Box>
  );
};

export default ClientReviewsPage;



// import React from 'react';
// import { Box, Typography, Button, Grid } from '@mui/material';
// import KeyMetricsSection from '../Components/KeyMetricsSection'; // 1. Import the new component

// // (PlaceholderImage component and sampleTestimonials data remain the same as before)
// const PlaceholderImage = () => (
//     <Box sx={{ width: '100%', height: { xs: 250, md: 400 }, backgroundColor: '#333', borderRadius: 2 }} />
// );
// const sampleTestimonials: Testimonial[] = [
//   { photoUrl: '', name: 'June Lee', title: 'CEO of GreenRoots', review: 'Melly\'s strategic approach to design brought our brand vision to life. The packaging and brand elements she developed elevated our aesthetic and aligned perfectly with our sustainability values.', rating: 5 },
//   { photoUrl: '', name: 'Jona Carter', title: 'Founder of EcoLux', review: 'Every project Melly touches turns into a perfect blend of design and purpose. She crafted packaging that reflected our eco-friendly mission while making our products stand out on the shelves.', rating: 5 },
//   { photoUrl: '', name: 'Sofia Toms', title: 'Founder at GreenR Studios', review: 'Melly\'s designs speak for themselves—strategic and impactful. She took the time to understand our brand, delivering packaging that resonated with our target audience and our product\'s visibility.', rating: 5 },
// ];


// const ClientReviewsPage = () => {
//   return (
//     <Box sx={{ backgroundColor: 'black', color: 'white', p: { xs: 2, md: 6 } }}>
//       <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
        
//         {/* --- Top Section with Client Reviews Intro --- */}
//         <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
//           <Grid item xs={12} md={6}>
//             <PlaceholderImage />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>Client Reviews</Typography>
//             {/* ... other text and buttons ... */}
//           </Grid>
//         </Grid>
        
//         {/* --- Testimonial Cards Grid Section --- */}
//         <Grid container spacing={4}>
//           {sampleTestimonials.map((testimonial, index) => (
//             <Grid item key={index} xs={12} sm={6} md={4}>
//               <TestimonialCard {...testimonial} />
//             </Grid>
//           ))}
//         </Grid>

//         {/* --- 2. ADD THE NEW KEY METRICS SECTION HERE --- */}
//         <KeyMetricsSection />

//       </Box>
//     </Box>
//   );
// };

// export default ClientReviewsPage;
