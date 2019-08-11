import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ThemeIcon from '@material-ui/icons/Brightness7';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import ProjectIcon from '@material-ui/icons/Code';
import ContactIcon from '@material-ui/icons/Email';

import MainPage from './MainPage/MainPage';
import Drawer from './HelperComponents/Drawer';

import { useIsEqualOrSmallerThan } from '../HelperFunctions/SizeHelpers';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2),
    marginLeft: theme.spacing(10),
  },
  rootMobile: {
    margin: theme.spacing(2),
  },
  sidebarTitle: {
    padding: theme.spacing(2),
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  listIcon: {
    fontSize: 32,
    color: theme.palette.primary.contrastText,
  },
  sidebar: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
  },
  verticalSpaceEater: {
    flexGrow: 1,
  },
  listText: {
    marginLeft: theme.spacing(2),
  },
}));

export default function Header(props) {
  const classes = useStyles();

  const isMobile = useIsEqualOrSmallerThan('sm');
  const [selectedAnchor, setSelectedAnchor] = React.useState('info');

  const SidebarOptions = (props) => {
    return (
      <div className={classes.sidebar} >
        {props.children}
        <List>
          {sections.map((section) =>
            <ListItem button key={section.id} onClick={() => setSelectedAnchor(section.id)}>
              {section.icon}
              {isMobile ? <ListItemText primary={section.label} className={classes.listText} /> : null}
            </ListItem>
          )}
        </List>
        <div className={classes.verticalSpaceEater} />
        <List>
          <ListItem button key='theme' onClick={() => props.toggleTheme()}>
            <ThemeIcon className={classes.listIcon} />
            {isMobile ? <ListItemText primary={'Toggle Theme'} className={classes.listText} /> : null}
          </ListItem>
        </List>
      </div>
    );
  }

  const sections = [
    { id: 'about', label: 'About Me', icon: <PersonIcon className={classes.listIcon} /> },
    { id: 'work', label: 'Work Experience', icon: <WorkIcon className={classes.listIcon} /> },
    { id: 'projects', label: 'Projects', icon: <ProjectIcon className={classes.listIcon} /> },
    { id: 'contact', label: 'Contact Me', icon: <ContactIcon className={classes.listIcon} /> },
  ];

  return (
    <div>
      <Drawer isMobile={isMobile} setSelectedAnchor={setSelectedAnchor}>
        <SidebarOptions sections={props.sections} toggleTheme={props.toggleTheme}>
          {!isMobile ?
            <>
              <Button className={classes.sidebarTitle} onClick={() => setSelectedAnchor('info')} color='inherit'>
                {'<SB/>'}
              </Button>
              <Divider />
            </>
            : null
          }
        </SidebarOptions>
      </Drawer>
      <div className={isMobile ? classes.rootMobile : classes.root}>
        <MainPage selectedAnchor={selectedAnchor} setSelectedAnchor={setSelectedAnchor} />
      </div>
    </div>
  );
}