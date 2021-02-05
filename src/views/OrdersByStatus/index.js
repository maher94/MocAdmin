import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import VerifiedUserRounded from '@material-ui/icons/VerifiedUserRounded'
import Block from '@material-ui/icons/Block';
import NoteAdd from '@material-ui/icons/NoteAdd';
import HourglassEmptyRounded from '@material-ui/icons/HourglassEmptyRounded';
import PostAddRounded from '@material-ui/icons/PostAddRounded';
import ValidatedOrders from './Validated/ValidatedOrders';
import Page from 'src/components/Page';
import RejectedOrders from './Rejected/RejectedOrders';
import CreatedOrders from './Created/CreatedOrders';
import InProgressOrders from './InProgress/InProgressOrders';
import SuspendedOrders from './Suspended/SuspendedOrders';
import PaidOrders from './Paid/PaidOrders';
import PartiallyPaidOrders from './PartiallyPaid/PartiallyPaidOrders';
import WaitingValidationOrders from './WaitingValidation/WaitingValidationOrders';
import Play from '@material-ui/icons/FilterTiltShift'
import PauseCircleFilled from '@material-ui/icons/PauseCircleOutline'
 import PaymentSharp from '@material-ui/icons/PaymentSharp'
 import WatchLaterOutlined from '@material-ui/icons/WatchLaterOutlined'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    
  },
}));


export default function OrdersByStatus() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Page
    className={classes.root}
    title="Orders By status"
  >
    <div className={classes.root}>
      
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          
          <Tab icon={<HourglassEmptyRounded/>} label="Waiting Validation" {...a11yProps(0)} />
          <Tab icon={<VerifiedUserRounded />} label="Validated" {...a11yProps(1)} />
          <Tab icon={<Block />}  label="Rejected" {...a11yProps(2)} />
          <Tab icon={<Play />}  label="In Progress" {...a11yProps(3)} />
          <Tab icon={<PauseCircleFilled />}  label="Suspended" {...a11yProps(4)} />
          <Tab icon={<WatchLaterOutlined />}  label="Partially Paid" {...a11yProps(5)} />
          <Tab icon={<PaymentSharp />}  label="Paid" {...a11yProps(6)} />

        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        
        <TabPanel value={value} index={0} dir={theme.direction}>
         <WaitingValidationOrders/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <ValidatedOrders/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
         <RejectedOrders/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        <InProgressOrders></InProgressOrders>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
         <SuspendedOrders/>
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
         <PartiallyPaidOrders/>
         </TabPanel>
         <TabPanel value={value} index={6} dir={theme.direction}>
        < PaidOrders/>
         </TabPanel>
      </SwipeableViews>
    </div>
    </Page>
  );
}
