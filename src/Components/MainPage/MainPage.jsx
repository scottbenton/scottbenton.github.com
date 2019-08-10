import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Introduction from './SubSections/Introduction';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3),
    maxWidth: 800,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));


export default function MainPage(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Introduction />
    </div>
  )
}
