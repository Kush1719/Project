import React from 'react';
import './HeatMapCard.css';
import { Image } from 'react-bootstrap';
import { FaRegClock, FaUsers } from 'react-icons/fa';

const HeatMapCard = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="heatmap-modal-overlay">
      <div className="heatmap-card">
        <div className="heatmap-header">
          <h3>User Heat-Map</h3>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <hr />
        <div className="heatmap-content">
          <div className="user-info">
            <div className="avatar-box">
              <Image src={require('../assets/pic.jpg')} alt="Avatar" className="avatar" roundedCircle />
              <h4>{user.name}</h4>
              <p>EMP ID : {user.empId}</p>
            </div>
          </div>

          <div className="summary-divider-wrapper">
            <div className="summary-section">
              <h4 className="summary-heading">Total Time Spend</h4>
              <div className="time-cards">
                <div className="time-card">
                  <div className="time-icon">
                    <FaRegClock size={24} color="#fff" />
                  </div>
                  <p className="time-value">05</p>
                  <p className="time-label">Hours</p>
                </div>
                <div className="time-card">
                  <div className="time-icon">
                    <FaRegClock size={24} color="#fff" />
                  </div>
                  <p className="time-value">30</p>
                  <p className="time-label">Minutes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="vertical-divider"></div>

          <div className="modules-section">
            {["Module 1", "Module 2", "Module 3", "Module 4"].map((mod, idx) => (
              <div key={mod} className="module-wrapper">
                <p className="module-title">{mod}</p>
                <div className="module-card">
                  <div className="time-icon">
                    <FaUsers size={24} color="#fff" />
                  </div>
                  <p className="time-value">2 Hrs</p>
                  <p className="time-val">30 Min</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeatMapCard;
