import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { Typography, Paper, Grid, Divider, IconButton } from '@material-ui/core';

import pageContent from '../../../Resources/PageContent/projects.json';

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

  const goToLink = (link) => {
    window.open(link);
  }

  pageContent.content.map((content) => {
    console.log(content.icon.dark, content.icon.light);
  })

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
        {pageContent.content.map((content) => (
          <Grid item xs={12}>
            {content.icon &&
              <IconButton onClick={() => goToLink(content.link)}>
                <img src={theme.palette.type === 'light' ? content.icon.light : content.icon.dark} alt={content.title} />
              </IconButton>
            }
            <Typography variant='p' component='p' align='left' className={classes.gitHubText}>
              {content.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
}