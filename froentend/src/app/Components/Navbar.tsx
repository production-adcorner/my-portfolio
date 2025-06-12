'use client';
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { usePathname } from 'next/navigation';
import StarIcon from './star';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <AppBar position="static" sx={{ backgroundColor: '#000' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/logo.png"
            alt="Portfolite Logo"
            style={{ height: 40, width: 'auto', objectFit: 'contain' }}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Button
            color="inherit"
            className={`text-grey-300 hover:text-white ${pathname === '/services' ? 'font-bold' : ''}`}
            href="/services"
            sx={{
              fontSize: '0.9rem',
              textTransform: 'none',
              opacity: 0.5,
              transition: 'opacity 0.2s',
              '&:hover': {
                opacity: 1,
              },
            }}
          >
            Services
          </Button>
          <Button
            color="inherit"
            className={`text-grey-300 hover:text-white ${pathname === '/projects' ? 'font-bold' : ''}`}
            href="/projects"
            sx={{
              fontSize: '0.9rem',
              textTransform: 'none',
              opacity: 0.5,
              transition: 'opacity 0.2s',
              '&:hover': {
                opacity: 1,
              },
            }}
          >
            Projects
          </Button>
          <Button
            color="inherit"
            className={`text-grey-300 hover:text-white ${pathname === '/testimonials' ? 'font-bold' : ''}`}
            href="/testimonials"
            sx={{
              fontSize: '0.9rem',
              textTransform: 'none',
              opacity: 0.5,
              transition: 'opacity 0.2s',
              '&:hover': {
                opacity: 1,
              },
            }}
          >
            Testimonials
          </Button>
          <Button
            color="inherit"
            className={`text-grey-300 hover:text-white ${pathname === '/contact' ? 'font-bold' : ''}`}
            href="/contact"
            sx={{
              fontSize: '0.9rem',
              textTransform: 'none',
              opacity: 0.5,
              transition: 'opacity 0.2s',
              '&:hover': {
                opacity: 1,
              },
            }}
          >
            Contact
          </Button>
          <Button
            variant="outlined"
            className="rounded-full px-4 py-2"
            href="/get-template"
            sx={{
              color: '#fff',
              borderColor: '#000',
              backgroundColor: '#000',
              fontWeight: 600,
              fontSize: '0.95rem',
              textTransform: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              opacity: 0.5,
              transition: 'opacity 0.2s, background-color 0.2s',
              '&:hover': {
                opacity: 1,
                backgroundColor: '#f3f3f3',
                borderColor: '#000',
                color: '#000',
              },
            }}
            startIcon={<StarIcon />} // Small gold star
          >
            Get Template
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}