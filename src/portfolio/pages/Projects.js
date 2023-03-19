import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const projectList = [
  {
    title: 'Hello',
    description:
      'This is a media card. You can use this section to describe the content.',
    tags: ['html', 'reactjs', 'angular', 'angular', 'angular', 'angular'],
  },
];

export default function Projects() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 10,
        pb: 6,
      }}
    >
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Projects
      </Typography>

      <Container sx={{ py: 2 }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {typeof projectList !== 'undefined' && projectList.length > 0
            ? projectList.map((project) => (
                <Grid item key={project} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <CardMedia
                      component="img"
                      // sx={{
                      //   // 16:9
                      //   pt: '56.25%',
                      // }}
                      image="https://source.unsplash.com/random"
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {project.title}
                      </Typography>
                      <Typography>{project.description}</Typography>
                      <Grid container spacing={1} sx={{ py: 1 }}>
                        {project.tags.map((tag) => (
                          <Grid item>
                            <Button
                              variant="contained"
                              sx={{ fontSize: 8, p: 0.5, minWidth: 0 }}
                            >
                              {tag}
                            </Button>
                          </Grid>
                        ))}
                      </Grid>
                    </CardContent>
                    {/* <CardActions>
                      <Button size="small">View</Button>
                      <Button size="small">Edit</Button>
                    </CardActions> */}
                  </Card>
                </Grid>
              ))
            : 'No project available'}
        </Grid>
      </Container>
    </Box>
  );
}
