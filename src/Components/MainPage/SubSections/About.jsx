import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Paper, Grid, Divider, Chip } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(5),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  floatLeft: {
    display: 'flex',
  },
  spaceEater: {
    flexGrow: 1,
  },
  avatar: {
    width: 150,
    height: 150,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
    marginLeft: 'auto',
    marginRight: 'auto',
    boxShadow: theme.shadows[12],
  },
  avatarHolder: {
    marginTop: -125,
    marginBottom: theme.spacing(3),
  },
  chip: {
    margin: theme.spacing(0.5),
    fontSize: 14
  },
}));

export default function About(props) {
  const classes = useStyles();

  const languages = ['Java', 'C++', 'C', 'Python', 'React', 'Javascript'];

  return (
    <Paper className={classes.paper} elevation={12}>
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <Typography variant='h4' component='h4' align='center' className={classes.title}>
            About Me
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid item xs={12}>
          <Typography variant='body1' component='p'>
            Hello! I'm Scott, a software engineer from Newark Delaware. I enjoy working with new languages and learning new things. I'm graduating from the University of Delaware in December, where I have studied topics such as multi-threading, computer graphics, software engineering processing, and Artificial Intelligence. In addition, I've also recently been working on learning front end development.
            </Typography>
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid item xs={12}>
          <Typography variant='body1' component='p'>
            Recent Languages:
            </Typography>
          {languages.map((language, index) =>
            <Chip
              key={index}
              label={language}
              className={classes.chip}
              color='primary'
            />
          )}
        </Grid>
      </Grid>
    </Paper >
  )
}