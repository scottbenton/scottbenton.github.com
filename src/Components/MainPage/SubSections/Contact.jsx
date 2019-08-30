import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid, Divider, Button } from '@material-ui/core';

import EmailIcon from '@material-ui/icons/Email';
import SaveIcon from '@material-ui/icons/Save';
import { downloadFile } from '../../../HelperFunctions/DownloadFile';

import pageContent from '../../../Resources/PageContent/contact.json';
import resume from '../../../Resources/Resume-ScottBenton.pdf'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(5),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

export default function Contacts(props) {
  const classes = useStyles();

  const contactMe = () => {
    window.open('mailto:scott.ma.benton@gmail.com');
  }
  ///home/scott/Documents/portfolio/src/Resources/Resume-ScottBenton.pdf
  const downloadResume = () => {
    downloadFile(resume);
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

        {pageContent.content.map((content) => (
          <Grid item xs={12}>
            <Typography variant='p' component='p' align='left' >
              {content}
            </Typography>
          </Grid>
        ))}

        <Grid item xs={12} sm={6}>
          <Button onClick={contactMe} variant='contained' color='primary' className={classes.button}>
            Send me an Email
            <EmailIcon className={classes.rightIcon} />
          </Button>
        </Grid>

        <Grid item xs={12} sm={6}>

          <Button onClick={downloadResume} className={classes.button} variant='contained' color='primary'>
            Download my Resume
            <SaveIcon className={classes.rightIcon} />
          </Button>
        </Grid>

      </Grid>
    </Paper >
  )
}