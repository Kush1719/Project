import React from 'react';
import { Navbar } from 'react-bootstrap';
import { IconButton } from '@mui/material';
import { Image } from 'react-bootstrap';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      style={{
        marginLeft: 240,
        padding: '8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop:'30px'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          style={{ marginRight: '20px' }}
        >
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
      <Image
        src={require('../assets/pic.jpg')}
        alt="Profile"
        style={{
          width: 40,
          height: 40,
          marginRight: 10,
          marginTop: 5, 
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />
    </Navbar>
  );
};

export default Header;