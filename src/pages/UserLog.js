import React, { useEffect, useState } from 'react';
import '../UserData.css';
import userLogData from '../userData.json';
import HeatMapCard from './HeatMapCard';

const UserLogTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userLogData);
  }, []);

  const paginationBtnStyle = {
    padding: '6px 12px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    backgroundColor: '#f1f1f1',
    color: '#333',
    cursor: 'pointer'
  };
  const [selectedUser, setSelectedUser] = useState(null);
  return (
    
    <div className="userlog-container" style={{paddingLeft:'250px'}}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h1 style={{ margin: 0 }}>User Log</h1>
            <div>
            <label htmlFor="filter" style={{ marginRight: '8px', fontWeight: '500' }}>Filter</label>
        </div>
    </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
        }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <h4 style={{ margin: 0 }}>User Activity Log</h4>
            <input
            type="text"
            placeholder="Search"
            style={{
                padding: '8px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                width: '200px'
            }}
            />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <select
            style={{
                padding: '8px',
                borderRadius: '8px',
                border: '1px solid #ccc'
            }}
            >
        <option>Module 1</option>
        <option>Module 2</option>
        <option>Module 3</option>
        </select>

        <button
        style={{
            padding: '8px 16px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        }}
        >
        <i className="fas fa-download"></i> Export as CSV
        </button>
    </div>
    </div>
      <hr></hr>
      <table className="userlog-table" style={{borderRadius:'50px'}}>
        <thead>
          <tr>
            <th><input type="checkbox" style={{ marginRight: '8px' }} />S.I.</th>
            <th>Name</th>
            <th>EMP ID</th>
            <th>Last Active</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {users.map((user, index) => (
            <tr key={user.sl}>
            <td>
            <input type="checkbox" style={{ marginRight: '8px' }} />
            {String(user.sl).padStart(2, '0')}
            </td>
            <td style={{ cursor: 'pointer', color: 'black' }} onClick={() => setSelectedUser(user)}>
                {user.name}
            </td>
            <td>{user.empId}</td>
            <td>{user.lastActive}</td>
            <td>{user.status}</td>
            <td>
            <div className="status-dots">
                <span className="dot blue"></span>
                <span className="dot green"></span>
                <span className="dot red"></span>
                <span className="dot yellow"></span>
            </div>
            </td>
        </tr>
        ))}
        </tbody>
      </table>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '20px',
        flexWrap: 'wrap'
        }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <select
            style={{
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid #ccc'
            }}
            >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
            </select>
            <span>Showing 1 to 10 of 12 entries</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <button style={paginationBtnStyle}>{`<<`}</button>
            {[1, 2, 3, 4, 5].map(num => (
            <button
                key={num}
                style={{
                ...paginationBtnStyle,
                backgroundColor: num === 1 ? '#dc3545' : '#f1f1f1',
                color: num === 1 ? 'white' : '#333',
                }}
            >
                {num}
            </button>
            ))}
            <button style={paginationBtnStyle}>{`>>`}</button>
        </div>
      </div>
      {selectedUser && (
        <HeatMapCard user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
};

export default UserLogTable;