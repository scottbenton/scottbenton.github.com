import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { Typography, Paper, Grid, Divider, IconButton } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(5),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  gitHubText: {
    marginTop: 20,
  }
}));

export default function Projects(props) {
  const classes = useStyles();
  const theme = useTheme();

  const gotoGithub = () => {
    window.open('https://github.com/scottbenton/');
  }

  return (
    <Paper className={classes.paper} elevation={12}>
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <Typography variant='h4' component='h4' align='center' className={classes.title}>
            My Projects
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid item xs={2}>
          <IconButton onClick={gotoGithub}>
            {theme.palette.type === 'light' ?
              <img src={require('../../../Resources/GitHub-Mark-32px.png')} alt='GitHub' />
              :
              <img src={require('../../../Resources/GitHub-Mark-Light-32px.png')} alt='GitHub' />
            }
          </IconButton>
        </Grid>

        <Grid item xs={10}>
          <Typography variant='p' component='p' align='left' className={classes.gitHubText}>
            Visit my GitHub to view my personal projects I am working on!
          </Typography>
        </Grid>

      </Grid>
    </Paper>
  )
}