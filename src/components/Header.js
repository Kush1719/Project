import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {AppBar, Toolbar, IconButton, Badge, Menu, MenuItem, Box} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LightModeIcon from '@mui/icons-material/LightMode';
import { toast } from 'react-toastify';
import { useCollapse } from '../context/CollapseContext';
import '../assets/css/global.css';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleMenuClose();
    navigate('/');
    toast.success('Successfully logged out!');
  };

  const [style, setStyle] = useState({
    width: 'calc(100% - 240px)',
    marginLeft: '240px',
    backgroundColor: 'white',
    boxShadow: 'none'
  });

  const { isCollapsed, setIsCollapsed } = useCollapse();
  const handleSidebarToggle = () => {
    setIsCollapsed(prev => !prev);
  };
  
  return (
    <AppBar className={`app-header ${isCollapsed ? 'collapsed' : ''}`} sx={{...style,left:'27px',height:'72px',zIndex:'0'}}>
      <Toolbar className="navbar" sx={{ justifyContent: 'space-between'}}>
        <Box className="box" display="flex" alignItems="center">
          <div className='header-left'>
          <IconButton onClick={handleSidebarToggle} sx={{ color: '#111827', mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Box className="header-title" sx={{ fontWeight: 700, fontSize: 20, marginLeft:'-20px'}}>
            Summary Metrics of key stats
          </Box>
          </div>
        </Box>
        <div className='header-right'>
          <Box display="flex" alignItems="center" gap={2}>
            <IconButton className="header-icon">
              <LightModeIcon />
            </IconButton>

            <Box className="header-flag">
              <img
                src="https://flagcdn.com/us.svg"
                alt="US Flag"
                className="flag-img"
              />
            </Box>

            <IconButton className="header-icon">
              <MailOutlineIcon />
            </IconButton>

            <Badge variant="dot" color="error" overlap="circular">
              <IconButton className="header-icon">
                <NotificationsNoneIcon />
              </IconButton>
            </Badge>

            <img
              src={require('../assets/pic.png')}
              alt="Profile"
              className="profile-img"
              onClick={handleMenuOpen}
              style={{ cursor: 'pointer' }}
            />

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
