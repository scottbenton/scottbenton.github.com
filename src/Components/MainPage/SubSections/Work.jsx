import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid, Divider, } from '@material-ui/core';

import SideTabs from '../../HelperComponents/SideTabs';
import pageOptions from '../../../Resources/PageContent/work';


const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(5),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
}));

const workPlaceInfo = (info) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant='h5' component='h5' align='left'>
          {info.jobTitle + ' at ' + info.company}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography component='p' align='left'>
          {info.time}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ul>
          {info.itemsCompleted.map((itemCompleted, index) =>
            <li key={index}>
              {itemCompleted}
            </li>
          )}
        </ul>
      </Grid >
    </Grid >
  );
}

export default function About(props) {
  const classes = useStyles();

  const [selectedJob, setSelectedJob] = React.useState(0);

  const jobComponents = pageOptions.workPlaces.map((job) => workPlaceInfo(job));
  const workPlaces = pageOptions.workPlaces.map((job) => job.company);

  return (
    <Paper className={classes.paper} elevation={12}>
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <Typography variant='h4' component='h4' align='center' className={classes.title}>
            {pageOptions.title}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>

        <SideTabs
          openTab={selectedJob}
          setOpenTab={setSelectedJob}
          tabs={workPlaces}
          tabContent={jobComponents}
        />

      </Grid>
    </Paper>
  );
}