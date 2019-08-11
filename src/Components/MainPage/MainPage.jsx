import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ScrollableAnchor, { goToTop, goToAnchor, removeHash } from 'react-scrollable-anchor';

import Introduction from './SubSections/Introduction';
import About from './SubSections/About';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3),
    maxWidth: 800,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  pageBreak: {
    height: '45vh',
  },
  badgeHelper: {
    height: 150,
  },
}));

const scrollToRef = (ref) => {
  if (ref.current) {
    window.scrollTo({ top: ref.current.offsetTop, left: 0, behavior: 'smooth' });
  }
};

export default function MainPage(props) {
  const classes = useStyles();

  const refs = {
    info: useRef(),
    about: useRef(),
    work: useRef(),
    projects: useRef(),
    contact: useRef(),
  }

  useEffect(() => {
    if (props.selectedAnchor) {
      if (props.selectedAnchor === 'info') {
        scrollToRef(refs['info'])
      }
      else {
        scrollToRef(refs[props.selectedAnchor]);
      }
      props.setSelectedAnchor();
    }
  }, [props.selectedAnchor])

  return (
    <div className={classes.root} >
      <div ref={refs['info']}>
        <div className={classes.badgeHelper} />
        <Introduction />
      </div>
      <div className={classes.pageBreak} />
      <div ref={refs['about']}>
        <div className={classes.badgeHelper} />
        <About />
      </div>
      <div className={classes.pageBreak} />
    </div>
  )
}
