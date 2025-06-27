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
            href="/Services"
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
            href="/Projects"
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
            className={`text-grey-300 hover:text-white ${pathname === '/vision' ? 'font-bold' : ''}`}
            href="/Vision"
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
            Vision
          </Button>
          <Button
            color="inherit"
            className={`text-grey-300 hover:text-white ${pathname === '/mission' ? 'font-bold' : ''}`}
            href="/Mission"
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
            Mission
          </Button>
          <Button
            color="inherit"
            className={`text-grey-300 hover:text-white ${pathname === '/contact' ? 'font-bold' : ''}`}
            href="https://wa.me/+919898678754"
            target="_blank"
            rel="noopener noreferrer"
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
        </Box>
      </Toolbar>
    </AppBar>
  );
}