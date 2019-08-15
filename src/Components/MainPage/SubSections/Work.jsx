import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid, Divider, } from '@material-ui/core';

import SideTabs from '../../HelperComponents/SideTabs';

const workPlaces = ['WSFS Bank', 'Carlisle Sports Emporium', 'Cumberland Valley Marching Band'];
const jobInfo = [
  {
    company: 'WSFS Bank', jobTitle: 'Software Developer Intern', time: 'June 2019 - Present',
    itemsCompleted: [
      'Used Agile methodologies to bring a piece of internal bank software from start to finish',
      'Developed a user friendly Material Design website using React',
      'Learned React'
    ]
  },
  {
    company: 'Carlisle Sports Emporium', jobTitle: 'Roamer', time: 'December 2015 - April 2019',
    itemsCompleted: [
      'Ensured safety of customers and equipment on attractions',
      'Developed problem solving skills by performing maintenance on a variety of arcade machines and other equipment',
      'Adapted quickly to new roles and expectations in the job'
    ]
  },
  {
    company: 'Cumberland Valley Marching Band', jobTitle: 'Volunteer Educator', time: 'June - August, 2016, 2018',
    itemsCompleted: [
      'Taught high school and middle school students music and marching skills',
      'Guided student leaders towards effective leadership methods',
      'Developed educational skills by teaching new concepts to students'
    ]
  }
]

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
        <Typography variant='p' component='p' align='left'>
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

  const jobComponents = jobInfo.map((job) => workPlaceInfo(job));

  return (
    <Paper className={classes.paper} elevation={12}>
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <Typography variant='h4' component='h4' align='center' className={classes.title}>
            Work Experience
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