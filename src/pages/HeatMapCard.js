import React from 'react';
import '../assets/css/global.css';
import { FaRegClock, FaUsers } from 'react-icons/fa';

const HeatMapCard = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="heatmap-modal-overlay">
      <div className="heatmap-card">
        <div className="heatmap-header">
          <div className="header" style={{fontSize:'20px',fontWeight:'bold', marginTop:'-17px'}}>User Heat Map</div>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className='vertical-line' style={{border:'0.1px solid #EBECEF', marginBottom:'20px', marginTop:'15px', width:'104%',marginLeft:'-20px'}}></div>
        <div className="heatmap-content">
          <div className="user-info">
            <div className="avatar-box">
              <img src={require('../assets/pic.jpg')} alt="Avatar" className="avatar" roundedCircle />
              <div className='hh4' style={{fontSize:'18px',fontWeight:'600', marginTop:'-14px'}}>{user.name}</div>
              <p style={{color:'#4B5563', fontSize:'16px', marginTop:'5px'}}>EMP ID : {user.empId}</p>
            </div>
          </div>

          <div className="summary-divider-wrapper">
            <div className="summary-section">
              <h4 className="summary-heading">Total Time Spend</h4>
              <div className="time-cards">
                <div className="time-card">
                  <div className="time-icon">
                    <FaRegClock size={24} color="#ee4a01" />
                  </div>
                  <p className="time-value">05</p>
                  <p className="time-label">Hours</p>
                </div>
                <div className="time-card">
                  <div className="time-icon">
                    <FaRegClock size={24} color="#ee4a01" />
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
                    <FaUsers size={24} color="#ee4a01" />
                  </div>
                  <p className="time-value">2 Hrs</p>
                  <p className="time-val" style={{marginTop:'5px', fontSize:'14px',fontWeight:'500', color:'#374151'}}>30 Min</p>
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
