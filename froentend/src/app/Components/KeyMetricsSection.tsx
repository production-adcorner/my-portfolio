import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

// A small component for each individual metric
const MetricItem = ({ value, label }: { value: string; label: string }) => (
  <Box sx={{ textAlign: 'center' }}>
    <Typography variant="h3" component="p" sx={{ fontWeight: 'bold' }}>
      {value}
    </Typography>
    <Typography variant="body2" sx={{ color: '#aaa' }}>
      {label}
    </Typography>
  </Box>
);

const KeyMetricsSection = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: '#1c1c1c', // Matches the testimonial card background
        borderRadius: 4,
        p: { xs: 4, md: 5 }, // Responsive padding
        mt: 8, // Margin top to space it from the testimonials above
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <MetricItem value="180+" label="design projects completed." />
        </Grid>
        <Grid item xs={12} sm={4}>
          <MetricItem value="96%" label="Client satisfaction rate." />
        </Grid>
        <Grid item xs={12} sm={4}>
          <MetricItem value="15+" label="Years of experience" />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default KeyMetricsSection;