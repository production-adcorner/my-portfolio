import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, Rating } from '@mui/material';

// Define the shape of the props using TypeScript for type safety
export interface Testimonial {
  photoUrl: string;
  name: string;
  title: string;
  review: string;
  rating: number;
}

const TestimonialCard: React.FC<Testimonial> = ({ photoUrl, name, title, review, rating }) => {
  return (
    <Card
      sx={{
        height: '100%',
        backgroundColor: '#1c1c1c', // A slightly off-black for contrast
        color: 'white',
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        {/* Star Rating */}
        <Rating name="read-only" value={rating} readOnly sx={{ mb: 2 }} />

        {/* Review Text */}
        <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 3 }}>
          "{review}"
        </Typography>

        {/* Client Info */}
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}>
          <Avatar src={photoUrl} alt={name} sx={{ mr: 2 }} />
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              {name}
            </Typography>
            <Typography variant="body2" sx={{ color: '#aaa' }}>
              {title}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;