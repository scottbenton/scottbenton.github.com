import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ThemeIcon from '@material-ui/icons/Brightness7';

import MainPage from './MainPage/MainPage';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
    color: theme.palette.primary.contrastText,
  },
  titleIcon: {
    color: theme.palette.primary.contrastText,
  }
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" className={classes.title} >
            {'<SB>'}
          </Typography>
          <IconButton onClick={() => props.toggleTheme()}>
            <ThemeIcon className={classes.titleIcon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={classes.root}>
        <MainPage />
      </div>
    </div>
  );
}