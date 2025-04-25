import React from 'react';
import { useCollapse } from '../context/CollapseContext';

const Dashboard = () => {
  const { isCollapsed } = useCollapse();

  return (
    <div className={`content ${isCollapsed ? 'collapsed' : ''}`}>
      <div className={`for ${isCollapsed ? 'collapsed' : ''}`} style={{ display: 'flex', marginTop: '67px' }}>
        <div className="header" id="header-title">
          Summary Metrics of Key Stats
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <label htmlFor="filter" className="label-filter">Filter</label>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;