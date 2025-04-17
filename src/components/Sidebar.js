import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Image } from 'react-bootstrap';
import { makeStyles } from '@mui/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Assessment';
import BadgeIcon from '@mui/icons-material/ConfirmationNumber';
import CompletionIcon from '@mui/icons-material/CheckCircle';
import UserIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const useStyles = makeStyles({
  menuItem: {
    '&:hover': {
      backgroundColor: 'red',
      color: 'white',
    },
  },
});

const Sidebar = () => {
  const classes = useStyles();
  return (
    <Drawer variant="permanent" anchor="left">
      <div style={{ width: 265, backgroundColor: "#f8f9fa", height: "100vh", display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '16px',
          width: '100%',
          borderBottom: '2px solid #ddd',
          borderLeft: '2px solid #ddd',
          paddingLeft: '16px',
        }}>
          <Image
            src={require('../assets/logo.jpg')}
            alt="Company Logo"
            style={{ width: '40px', height: '40px', marginRight: '8px' }}
          />
          <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#333' }}>
            STTelemedia
            <div style={{ fontWeight: 'normal', fontSize: '14px', color: '#666' }}>
              Global Data Centres
            </div>
          </div>
        </div>

        <List sx={{ width: '100%' }}>
        <ListItem
          component={Link}
          to="/dashboard"
          button
          sx={{
            '&:hover': {
              backgroundColor: 'red',
              color: 'white',
              borderRadius: '10px',
            },
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <DashboardIcon style={{ color: 'black' }} />
              <ListItemText primary="Dashboard" style={{ marginLeft: '20px', color: 'black' }} />
            </div>
            <KeyboardArrowDownIcon style={{ color: 'black' }} />
          </div>
        </ListItem>


        <ListItem
          component={Link}
          to="/summary-metrics"
          button
          sx={{
            '&:hover': {
              backgroundColor: 'red',
              color: 'white',
              borderRadius: '10px',
            },
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <AnalyticsIcon style={{ color: 'black' }} />
              <ListItemText primary="Summary Metrics" style={{ marginLeft: '20px', color: 'black' }} />
            </div>
            <KeyboardArrowDownIcon style={{ color: 'black' }} />
          </div>
        </ListItem>

        <ListItem
          component={Link}
          to="/badge-analytics"
          button
          sx={{
            '&:hover': {
              backgroundColor: 'red',
              color: 'white',
              borderRadius: '10px',
            },
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <BadgeIcon style={{ color: 'black' }} />
              <ListItemText primary="Badge Analytics" style={{ marginLeft: '20px', color: 'black' }} />
            </div>
            <KeyboardArrowDownIcon style={{ color: 'black' }} />
          </div>
        </ListItem>
        <ListItem
          component={Link}
          to="/completion-summary"
          button
          sx={{
            '&:hover': {
              backgroundColor: 'red',
              color: 'white',
              borderRadius: '10px',
            },
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <CompletionIcon style={{ color: 'black' }} />
              <ListItemText primary="Completion Summary" style={{ marginLeft: '20px', color: 'black' }} />
            </div>
            <KeyboardArrowDownIcon style={{ color: 'black' }} />
          </div>
        </ListItem>
        <ListItem
          component={Link}
          to="/user-log"
          button
          sx={{
            '&:hover': {
              backgroundColor: 'red',
              color: 'white',
              borderRadius: '10px',
            },
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <UserIcon style={{ color: 'black' }} />
              <ListItemText primary="User Log" style={{ marginLeft: '20px', color: 'black' }} />
            </div>
            <KeyboardArrowDownIcon style={{ color: 'black' }} />
          </div>
        </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;