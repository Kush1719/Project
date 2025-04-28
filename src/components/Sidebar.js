import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import PentagonOutlinedIcon from '@mui/icons-material/PentagonOutlined';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import { useCollapse } from '../context/CollapseContext';
import '../assets/css/global.css';

const Sidebar = () => {
  const { isCollapsed } = useCollapse();
  return (
    <Drawer variant="permanent" className="me" anchor="left">
      <div className={`main ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="left">
          <img src={require('../assets/logo.jpg')} alt="Company Logo" className="sidebar-logo" style={{ cursor: 'pointer' }}/>
          {!isCollapsed && (
            <div className="sidebar-logo-text">
              STTelemedia
              <div className="sidebar-subtext">Global Data Centres</div>
            </div>
          )}
        </div>
        <List className="sidebar-list">
          <SidebarItem to="/dashboard" icon={<PentagonOutlinedIcon />} label="Dashboard" isCollapsed={isCollapsed}/>
          <SidebarItem to="/summary-metrics" icon={<PieChartOutlineIcon />} label="Summary Metrics" isCollapsed={isCollapsed}/>
          <SidebarItem to="/badge-analytics" icon={<GroupsOutlinedIcon />} label="Badge Analytics" isCollapsed={isCollapsed}/>
          <SidebarItem to="/completion-summary" icon={<HowToRegOutlinedIcon />} label="Completion Summary" isCollapsed={isCollapsed}/>
          <SidebarItem to="/user-log" icon={<ManageAccountsOutlinedIcon />} label="User Log" isCollapsed={isCollapsed}/>
        </List>
      </div>
    </Drawer>
  );
};

const SidebarItem = ({ to, icon, label, isCollapsed }) => (
  <ListItem component={Link} to={to} button className="sidebar-hover" sx={{ my: 1, mx: 1.7, borderRadius: '16px' }}>
    <div className="sidebar-list-item">
      <div className={`sidebar-list-inner ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-icon">{icon}</div>
        {!isCollapsed && <ListItemText primary={label} className="sidebar-text" />}
      </div>
    </div>
  </ListItem>
);

export default Sidebar;