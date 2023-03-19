import * as React from 'react';
import { useState } from 'react';

// MUI Components
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import AboutMe from './pages/AboutMe';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const navPages = ['About Me', 'Experience', 'Projects', 'Contact'];
const theme = createTheme();

export default function Portfolio() {
  function handlePagesClick(page) {
    console.log(page);
    // Changing state
    setPageView(page);
  }

  const [pageView, setPageView] = useState('Projects');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Jirarote Jirasirikul (JJ) - @BlizRyS
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navPages.map((page) => (
              <Button
                key={page}
                sx={{ color: '#fff' }}
                onClick={() => handlePagesClick(page)}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <main>
        {pageView == 'About Me' ? <AboutMe></AboutMe> : ''}
        {pageView == 'Experience' ? <Experience></Experience> : ''}
        {pageView == 'Projects' ? <Projects></Projects> : ''}
      </main>
    </ThemeProvider>
  );
}
