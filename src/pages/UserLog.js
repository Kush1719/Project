import React, { useEffect, useState } from 'react';
import '../assets/css/global.css';
import userLogData from '../assets/userData.json';
import HeatMapCard from './HeatMapCard';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,IconButton, Select, MenuItem, FormControl, Button} from '@mui/material';
import VisibilityIconOutlined from '@mui/icons-material/VisibilityOutlined';
import UploadIcon from '@mui/icons-material/Upload';
import SearchIcon from '@mui/icons-material/Search';
import { useCollapse } from '../context/CollapseContext';

const UserLogTable = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [module, setModule] = useState("Module 1");
  const { isCollapsed } = useCollapse();
  useEffect(() => {
    setUsers(userLogData);
  }, []);

  return (
    <div className="userlog-container">
      <div className={`userlog-header ${isCollapsed ? 'collapsed' : ''}`} style={isCollapsed ? { marginLeft: '-180px' } : {}}>
        <div className="header">User Log</div>
        <label htmlFor="filter" className="label-filter">Filter</label>
      </div>

      <div className={`userlog-card ${isCollapsed ? 'collapsed' : ''}`} style={isCollapsed ? { marginLeft: '-180px' } : {}}>
        <div className="userlog-filters">
          <div className="userlog-search-group">
            <div className='hh4'>User Activity Log</div>
            <div className="userlog-search-wrapper" style={{ position: 'relative' }}>
              <SearchIcon className='userlog-search-icon' />
              <input type="text" placeholder="Search" className="userlog-search-input" />
            </div>
          </div>
          <div className="userlog-select-group">
            <FormControl size='small'>
              <Select value={module} onChange={(e) => setModule(e.target.value)} className="userlog-select">
                <MenuItem value="Module 1">Module 1</MenuItem>
                <MenuItem value="Module 2">Module 2</MenuItem>
                <MenuItem value="Module 3">Module 3</MenuItem>
              </Select>
            </FormControl>
              <Button
                variant="contained"
                color="error"
                className="userlog-export-btn"
                startIcon={<UploadIcon />}
              >
                Export as CSV
              </Button>   
          </div>
        </div>
        <hr />

        <TableContainer component={Paper}>
          <Table className="userlog-table">
            <TableHead>
              <TableRow>
                <TableCell><input type="checkbox" style={{ marginRight: '8px' }} />S.I.</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>EMP ID</TableCell>
                <TableCell>Last Active</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.sl}>
                  <TableCell>
                    <input type="checkbox" style={{ marginRight: '8px' }} />
                    {String(user.sl).padStart(2, '0')}
                  </TableCell>
                  <TableCell
                    style={{ cursor: 'pointer', color: 'black' }}
                    onClick={() => setSelectedUser(user)}
                  >
                    {user.name}
                  </TableCell>
                  <TableCell>{user.empId}</TableCell>
                  <TableCell>{user.lastActive}</TableCell>
                  <TableCell>{user.status}</TableCell>
                  <TableCell>
                    <div className="userlog-actions">
                      <div className="userlog-icon-wrapper view-icon">
                        <IconButton size="small">
                          <VisibilityIconOutlined style={{color: "#487efe"}}/>
                        </IconButton>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div className="userlog-pagination">
          <div className="pagination-select-group">
            <FormControl size="small">
              <Select defaultValue="10" className="userlog-select">
                <MenuItem value="10">10</MenuItem>
                <MenuItem value="25">25</MenuItem>
                <MenuItem value="50">50</MenuItem>
                <MenuItem value="100">100</MenuItem>
              </Select>
            </FormControl>
            <span style={{marginLeft:'20px'}}>Showing 1 to 10 of 12 entries</span>
          </div>
          <div className="pagination-buttons">
            <Button className="pagination-button" style={{color:'black', backgroundColor:'white', marginRight:'-15px'}}>{`<<`}</Button>
            {[1, 2, 3, 4, 5].map((num) => (
              <Button
                key={num}
                className="pagination-button"
                style={{
                  backgroundColor: num === 1 ? '#dc3545' : '#f1f1f1',
                  color: num === 1 ? 'white' : '#333',
                  minWidth: '40px'
                }}
              >
                {num}
              </Button>
            ))}
            <Button className="pagination-button" style={{color:'black', backgroundColor:'white', paddingRight: '39px'}}>{`>>`}</Button>
          </div>
        </div>
      </div>

      {selectedUser && (
        <HeatMapCard user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
};

export default UserLogTable;
