import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import Portfolio from './portfolio/Portfolio';

export default function App() {
  return (
    <Portfolio></Portfolio>
    // <Container maxWidth="sm">
    //   <Box sx={{ my: 4 }}>
    //     <Typography variant="h4" component="h1" gutterBottom>
    //       Create React App example
    //     </Typography>
    //     <ProTip />
    //     <Copyright />
    //   </Box>
    // </Container>
  );
}
