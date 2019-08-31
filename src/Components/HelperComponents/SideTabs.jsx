import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useIsEqualOrSmallerThan } from '../../HelperFunctions/SizeHelpers';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      <Box>{children}</Box>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  mobileTabs: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  }
}));

export default function VerticalTabs(props) {
  const classes = useStyles();

  const isMobile = useIsEqualOrSmallerThan('sm');

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={3}>
          {isMobile ?
            <Tabs
              value={props.openTab}
              onChange={(evt, val) => props.setOpenTab(val)}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              {props.tabs.map((label, index) =>
                <Tab label={label} id={"tab-" + index} key={index} />
              )}
            </Tabs>
            :
            <Tabs
              orientation="vertical"
              variant="scrollable"
              indicatorColor="primary"
              value={props.openTab}
              onChange={(evt, val) => props.setOpenTab(val)}
              aria-label="Vertical tabs example"
              className={classes.tabs}
            >
              {props.tabs.map((label, index) =>
                <Tab label={<Typography>{label}</Typography>} id={"tab-" + index} key={index} />
              )}
            </Tabs>
          }
        </Grid>

        <Grid item sm={12} md={9}>
          {props.tabContent.map((content, index) =>
            <TabPanel value={props.openTab} index={index} key={index}>
              {content}
            </TabPanel>
          )}
        </Grid>
      </Grid>
    </div>
  );
}