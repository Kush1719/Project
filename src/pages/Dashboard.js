import React from 'react';

const Dashboard = () => {
  return (
    <div style={{ marginLeft: 265, padding: '20px', paddingBottom: '60px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3 style={{ margin: 0 }}>Summary Metrics for key stats</h3>
        <div>
          <label htmlFor="filter" style={{ marginRight: '8px', fontWeight: '500' }}>Filter</label>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
