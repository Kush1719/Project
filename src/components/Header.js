import React from 'react';
import { Navbar } from 'react-bootstrap';
import { IconButton, Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Image } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      style={{
        marginLeft: 265,
        padding: '8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '30px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <IconButton edge="start" color="inherit" aria-label="menu" style={{ marginRight: '20px' }}>
          <MenuIcon />
        </IconButton>
        <Navbar.Brand
          style={{
            paddingLeft: 20,
            fontWeight: 'bold',
            marginBottom: 0,
            paddingBottom: 9,
          }}
        >
          Summary Metrics of key stats
        </Navbar.Brand>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginRight: '10px' }}>
        {/* Sun Icon */}
        <IconButton style={{ backgroundColor: '#f0f0f0' }}>
          <LightModeIcon />
        </IconButton>

        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            overflow: 'hidden',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src="https://flagcdn.com/us.svg"
            alt="US Flag"
            style={{ width: '24px', height: '24px' }}
          />
        </div>

        {/* Mail Icon */}
        <IconButton style={{ backgroundColor: '#f0f0f0' }}>
          <MailOutlineIcon />
        </IconButton>

        {/* Notification Icon with Red Dot */}
        <Badge variant="dot" color="error" overlap="circular">
          <IconButton style={{ backgroundColor: '#f0f0f0' }}>
            <NotificationsNoneIcon />
          </IconButton>
        </Badge>

        {/* Profile Image */}
        <Image
          src={require('../assets/pic.jpg')}
          alt="Profile"
          style={{
            width: 40,
            height: 40,
            marginTop: 5,
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
      </div>
    </Navbar>
  );
};

export default Header;
