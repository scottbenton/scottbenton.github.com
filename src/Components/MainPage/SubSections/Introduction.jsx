import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Paper, Grid, Divider, Avatar } from '@material-ui/core';
import NoImageIcon from '@material-ui/icons/Face';

import pageContent from '../../../Resources/PageContent/introduction.js';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    height: '85vh',
  },
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
  avatarSpacer: {
    height: 90,
  }
}));

export default function Introduction(props) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.avatarSpacer} />
      <Paper className={classes.paper} elevation={12}>
        <div className={classes.avatarHolder}>
          {pageContent.profilePic ?
            <Avatar alt="SB" src={pageContent.profilePic} className={classes.avatar} />
            :
            <Avatar className={classes.avatar}>
              <NoImageIcon className={classes.avatar} />
            </Avatar>
          }
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12}>

            <Typography variant='h4' component='h4' align='center' className={classes.title}>
              {pageContent.title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          {pageContent.content.map((content, index) => (
            <Grid item xs={12} key={index} >
              <Typography variant='body1' component='p'>
                {content}
              </Typography>
            </Grid>
          ))}


          <Grid item xs={12}>
            <Divider />
          </Grid>

          <Grid item xs={12} className={classes.floatLeft}>
            <div className={classes.spaceEater} />
            <Button onClick={() => props.setSelectedAnchor('contact')} variant='contained' color='primary'>
              Contact Me
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}