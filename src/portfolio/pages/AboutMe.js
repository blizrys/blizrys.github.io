import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function AboutMe() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
        <Box display="flex" flexDirection="column">
          <Typography
            component="h1"
            variant="h5"
            color="text.primary"
            gutterBottom
          >
            Hi. My name is
          </Typography>
          <Typography
            component="h1"
            variant="h2"
            color="text.primary"
            gutterBottom
          >
            Jirarote Jirasirikul (JJ)
          </Typography>
          <Typography
            component="h1"
            variant="h4"
            color="text.primary"
            gutterBottom
          >
            BEER, GEEK, ADRENALINE JUNKIE
          </Typography>
          <Typography>
            JACK-OF-ALL-TRADES in IT because of my passion to deliver products
            from start-to-end.
          </Typography>
          <Typography>
            Started as Programmer in middle school because of interest in
            Robotics and MMORPG Games (Ragnarok Online).
          </Typography>
          <Typography>
            Ended up as System Engineer / Data Scienctist / Full-Stack Developer
            *** whatsoever ***
          </Typography>
          <Typography>
            ... that is very happy every time customers used my solution.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
