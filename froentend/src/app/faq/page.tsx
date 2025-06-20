'use client';

import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Chip
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: 'panel1',
    question: 'What services do you provide?',
    answer: 'I specialize in brand identity and package design, with experience in web design, UI/UX, and to create brand experiences.',
  },
  {
    id: 'panel2',
    question: 'How do I start working with you?',
    answer: 'The first step is a free consultation call to discuss your project goals. From there, I will create a detailed proposal for you to review.',
  },
  {
    id: 'panel3',
    question: 'What design tools do you use?',
    answer: 'I primarily use industry-standard software like Adobe Creative Suite (Illustrator, Photoshop, InDesign) and Figma for UI/UX projects.',
  },
  {
    id: 'panel4',
    question: 'How long does a project take?',
    answer: 'Project timelines vary depending on the scope. A simple logo may take 1-2 weeks, while a full brand identity can take 4-8 weeks. I will provide a detailed timeline in the project proposal.',
  },
  {
    id: 'panel5',
    question: 'Do you provide revisions?',
    answer: 'Yes, all projects include a set number of revision rounds. The specific number will be outlined in our project agreement to ensure we get everything perfect.',
  },
  {
    id: 'panel6',
    question: 'What industries do you work with?',
    answer: 'I have experience across a wide range of industries, including tech, e-commerce, wellness, and food & beverage. I am always excited to learn about new sectors.',
  },
];

const FaqPage = () => {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', p: { xs: 2, md: 6 } }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, maxWidth: '1300px', mx: 'auto' }}>
        
        {/* Left Column */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Typography variant="body2" sx={{ color: '#aaa' }}>● FAQ'S</Typography>
          <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', my: 2 }}>
            Answers
          </Typography>
          <Typography variant="body1" sx={{ color: '#ccc', mb: 4 }}>
            Find answers to common questions about my design process, services etc...
          </Typography>
          
          {/* Image Placeholder */}
          <Box
            sx={{
              width: '100%',
              height: { xs: 200, md: 300 },
              backgroundColor: '#e0e0e0',
              borderRadius: 4,
              mb: 3
            }}
          />

          {/* Tags */}
          <Box sx={{ display: 'flex', gap: 1, mb: 4 }}>
              <Chip label="Product Design" variant="outlined" sx={{ color: '#ccc', borderColor: '#555' }} />
              <Chip label="Brand Identity Design" variant="outlined" sx={{ color: '#ccc', borderColor: '#555' }} />
              <Chip label="Branding" variant="outlined" sx={{ color: '#ccc', borderColor: '#555' }} />
          </Box>

          <Box sx={{ mt: 'auto' }}>
               <Button variant="outlined" sx={{ borderColor: 'white', color: 'white' }}>
                  Book a Free Call
               </Button>
          </Box>
        </Box>

        {/* Right Column (Accordion) */}
        <Box sx={{ flex: 1 }}>
          {faqData.map((item) => (
            <Accordion
              key={item.id}
              expanded={expanded === item.id}
              onChange={handleChange(item.id)}
              elevation={0}
              sx={{
                backgroundColor: '#1c1c1c',
                color: 'white',
                borderRadius: '12px !important',
                mb: 1.5,
                '&:before': {
                  display: 'none',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<AddIcon sx={{ color: 'white' }} />}
                aria-controls={`${item.id}-content`}
                id={`${item.id}-header`}
                sx={{
                    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                        transform: 'rotate(45deg)',
                    },
                }}
              >
                <Typography variant="h6">{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: '#ccc' }}>
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FaqPage;
