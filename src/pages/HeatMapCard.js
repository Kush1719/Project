import React from 'react';
import './HeatMapCard.css';
import { Image } from 'react-bootstrap';

const HeatMapCard = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="heatmap-modal-overlay">
      <div className="heatmap-card">
        <h3>User Heat-Map</h3>
        <button className="close-button" onClick={onClose} style={{paddingTop:'10px'}}>X</button>
        <hr></hr>
        <div className="heatmap-header">
          <Image src={require('../assets/pic.jpg')} alt="Avatar" className="avatar" />
          <div>
            <h4>{user.name}</h4>
            <p style={{ fontSize: '14px', color: '#777' }}>EMP ID: {user.empId}</p>
          </div>
        </div>
        <div className="modules-summary">
          {["Module 1", "Module 2", "Module 3", "Module 4"].map((mod, idx) => (
            <div key={mod} className="module-box">
              <p style={{ fontSize: '14px', fontWeight: '600' }}>{mod}</p>
              <p>2 Hrs</p>
              <p>30 Min</p>
            </div>
          ))}
        </div>
        <div className="heatmap-flow">
          <p>[Insert activity flow here based on your backend or logic]</p>
        </div>
      </div>
    </div>
  );
};

export default HeatMapCard;
