import React from 'react'

const CompletionSummary = () =>{
  return (
    <div style={{ marginLeft: 265, padding: '20px', paddingBottom: '60px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3 style={{ margin: 0 }}>Completion Summary</h3>
        <div>
          <label htmlFor="filter" style={{ marginRight: '8px', fontWeight: '500' }}>Filter</label>
        </div>
      </div>
    </div>
  );
};
export default CompletionSummary;