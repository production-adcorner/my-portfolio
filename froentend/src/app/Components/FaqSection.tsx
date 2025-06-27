// New File: froentend/src/app/Components/FaqSection.tsx

'use client'; // Required for the interactive useState hook

import React, { useState } from 'react';
import { Box, Button, Chip, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

// --- Data for the component, structured from your text ---
const tags = ['Product Design', 'Brand Identity Design', 'Branding'];

const faqData = [
  {
    id: 'panel1',
    question: 'What services do you provide?',
    answer: 'I specialize in brand identity and package design, with experience in web design, UI/UX, and to create brand experiences.',
  },
  {
    id: 'panel2',
    question: 'How do I start working with you?',
    answer: "It starts with a free discovery call. We'll discuss your goals, vision, and how I can bring your ideas to life.",
  },
  {
    id: 'panel3',
    question: 'What design tools do you use?',
    answer: 'I work with industry-leading tools like Figma, Framer, and Adobe Suite to create sleek, high-performance designs.',
  },
  {
    id: 'panel4',
    question: 'How long does a project take?',
    answer: "Project timelines vary based on scope, but most designs take 2-4 weeks. I'll provide a clear timeline after our initial consultation.",
  },
  {
    id: 'panel5',
    question: 'Do you provide revisions?',
    answer: 'Absolutely! I offer a set number of revisions to ensure the design perfectly aligns with your vision.',
  },
  {
    id: 'panel6',
    question: 'What industries do you work with?',
    answer: 'From tech startups to creative agencies, I collaborate with a range of industries adapting designs to fit each brand\'s unique identity.',
  },
  {
    id: 'panel7',
    question: 'Do you offer development services?',
    answer: 'Yes, I specialize in Framer development, ensuring seamless design-to-live website transitions with high-quality interactions and animations.',
  },
  {
    id: 'panel8',
    question: 'What is your pricing structure?',
    answer: "Pricing depends on the project's complexity and scope. Let's discuss your goals, and I'll provide a transparent quote tailored to your needs.",
  },
  {
    id: 'panel9',
    question: 'Can you redesign my existing website?',
    answer: "Definitely! I can transform your outdated site into a modern, user-friendly experience that reflects your brand's evolution.",
  },
];

export default function FaqSection() {
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 8 }}>
          
          {/* --- Left Column --- */}
          <Box sx={{ flex: '1 1 40%', display: 'flex', flexDirection: 'column' }}>
            <Chip label="● FAQ'S" sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: '#fff', mb: 2, alignSelf: 'flex-start' }} />
            <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '3rem', md: '5rem' } }}>
              Answers
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', mb: 4, maxWidth: '400px' }}>
              Find answers to common questions about my design process, services etc…
            </Typography>
            <Box sx={{ width: '100%', borderRadius: '16px', overflow: 'hidden', mb: 4 }}>
              <img src="https://framerusercontent.com/images/QqqmFNIdzb0HbOiMSHvqZXkwT7w.png?scale-down-to=512" alt="FAQ section visual" style={{ width: '100%', display: 'block' }} />
            </Box>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 4 }}>
              {tags.map((tag) => (
                <Chip key={tag} label={tag} variant="outlined" sx={{ color: '#ccc', borderColor: '#555' }} />
              ))}
            </Box>
            <Button
                variant="contained"
                href="https://wa.me/+919898678754"
                target="_blank"
                sx={{
                  bgcolor: '#fff',
                  color: '#000',
                  '&:hover': { bgcolor: '#eee' },
                  borderRadius: '99px',
                  px: 3,
                  py: 1.5,
                  fontSize: '1.1rem',
                }}
              >
                Book a Free Call
              </Button>
          </Box>

          {/* --- Right Column (Accordion) --- */}
          <Box sx={{ flex: '1 1 60%' }}>
            {faqData.map((item) => (
              <Accordion
                key={item.id}
                expanded={expanded === item.id}
                onChange={handleChange(item.id)}
                elevation={0}
                sx={{
                  backgroundColor: '#1C1C1C',
                  color: 'white',
                  borderRadius: '12px !important',
                  mb: 1.5,
                  '&:before': { display: 'none' },
                }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon sx={{ color: 'white' }} />}
                  aria-controls={`${item.id}-content`}
                  id={`${item.id}-header`}
                  sx={{
                      py: 1.5,
                      '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                          transform: 'rotate(45deg)', // Rotates '+' to 'x'
                      },
                  }}
                >
                  <Typography variant="h6">{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}