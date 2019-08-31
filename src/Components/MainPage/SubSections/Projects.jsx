import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { Typography, Paper, Grid, Divider, IconButton } from '@material-ui/core';

import pageContent from '../../../Resources/PageContent/projects.js';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(5),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  contentDescription: {
    display:'inline-block',
  }
}));

export default function Projects(props) {
  const classes = useStyles();
  const theme = useTheme();

  const goToLink = (link) => {
    window.open(link);
  }

  return (
    <Paper className={classes.paper} elevation={12}>
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
          <Grid item xs={12} key={index}>
            {content.icon &&
              <IconButton onClick={() => goToLink(content.link)}>
                <img src={theme.palette.type === 'light' ? content.icon.light : content.icon.dark} alt={content.title} />
              </IconButton>
            }
            <Typography align='left' className={classes.contentDescription}>
              {content.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
}