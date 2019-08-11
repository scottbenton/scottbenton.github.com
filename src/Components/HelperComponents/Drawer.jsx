import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { Drawer, useTheme } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  title: {
    color: theme.palette.primary.contrastText,
  },
  spaceEater: {
    flexGrow: 1,
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  }
}));

export default function MobileDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);


  return (
    <>
      {props.isMobile ?
        <>
          <AppBar position="fixed" color="primary">
            <Toolbar>
              <IconButton color="inherit" edge="start" onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
              <div className={classes.spaceEater} />
              <Button onClick={() => props.setSelectedAnchor('info')} color='inherit'>
                {'<Scott Benton />'}
              </Button>
            </Toolbar>
          </AppBar>
          <SwipeableDrawer
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(false)}
            classes={{
              paper: classes.drawer,
            }}
          >
            {props.children}
          </SwipeableDrawer>
        </>
        :
        <Drawer
          variant='permanent'
          open={true}
          classes={{
            paper: classes.drawer,
          }}
        >
          {props.children}
        </Drawer>
      }
    </>
  );
}