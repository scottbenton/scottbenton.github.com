import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Paper, Grid, Divider, Avatar } from '@material-ui/core';
import NoImageIcon from '@material-ui/icons/Face';

import profile from '../../../Resources/ProfilePic.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    height: '85vh',
  },
  paper: {
    padding: theme.spacing(5),
    position: 'absolute',
    top: '50%',

    '-ms-transform': 'translateY(-50%)',
    transform: 'translateY(-50%)',
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
  }
}));

export default function Introduction(props) {
  const classes = useStyles();

  const contactMe = () => {
    window.open('mailto:scott.ma.benton@gmail.com');
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={12}>
        <div className={classes.avatarHolder}>
          {profile ?
            <Avatar alt="SB" src={profile} className={classes.avatar} />
            :
            <Avatar className={classes.avatar}>
              <NoImageIcon className={classes.avatar} />
            </Avatar>
          }
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12}>

            <Typography variant='h3' component='h3' align='center' className={classes.title}>
              Scott Benton
          </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body1' component='p'>
              I'm a Software Engineer with experience in both front end development and back end development. Based in Newark, DE.
          </Typography>
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>

          <Grid item xs={12} className={classes.floatLeft}>
            <div className={classes.spaceEater} />
            <Button onClick={contactMe} variant='contained' color='primary'>
              Contact Me
          </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}