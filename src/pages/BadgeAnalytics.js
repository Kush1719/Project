import React from "react";
import "../assets/css/global.css";
import userlogdata from "../assets/userData.json";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,IconButton} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import taskMasterImg from "../assets/task-master.png";
import explorerImg from "../assets/explorer-extraordinaire.png";
import fastLearnerImg from "../assets/fast-learner.png";
import knowledgeKeeperImg from "../assets/knowledge-keeper.png";
import trailblazerImg from "../assets/trailblazer.png";
import { useCollapse } from '../context/CollapseContext';
const badgeImages = {
  "Task Master": taskMasterImg,
  "Explorer Extraordinaire": explorerImg,
  "Fast Learner": fastLearnerImg,
  "Knowledge Keeper": knowledgeKeeperImg,
  "Trailblaizer": trailblazerImg,
};

const badgeStyles = {
  "Task Master": { background: "#e2f7e1", color: "#1bb934" },
  "Explorer Extraordinaire": { background: "#e6f0fa", color: "#2a6edb" },
  "Fast Learner": { background: "#ffe8d1", color: "#ff9800" },
  "Knowledge Keeper": { background: "#fff7e6", color: "#e6a700" },
  "Trailblaizer": { background: "#fde6ef", color: "#e43f7c" },
};

function BadgeAnalyticsReport() {
  const { isCollapsed } = useCollapse();
  return (
    <div className="content" style={{ marginTop: '80px' }}>
      <div className={`for ${isCollapsed ? 'collapsed' : ''}`} style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="header">Badge Analytics</div>
        <label htmlFor="filter" className="label-filter">Filter</label>
      </div>

      <div className={`badge-report-card ${isCollapsed ? 'collapsed' : ''}`} style={isCollapsed ? { marginLeft: '-180px' } : {}}>
        <div className="badge-report-header">
          <h5 className="mb-0">Badge Analytics Reports</h5>
          <span className="view-all-link">View All &gt;</span>
        </div>

        <TableContainer component={Paper} className="badge-report-table">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>EMP Name</TableCell>
                <TableCell>EMP ID</TableCell>
                <TableCell>Last Active</TableCell>
                <TableCell>Badges Earned</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userlogdata.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.empId}</TableCell>
                  <TableCell>{row.lastActive}</TableCell>
                  <TableCell>
                    {row.badges?.length ? (
                      row.badges.map((badge, i) => (
                        <span
                          key={i}
                          className="badge-box"
                          style={{
                            ...badgeStyles[badge],
                            display: 'inline-flex',
                            alignItems: 'center',
                            marginRight: 6
                          }}
                        >
                          <img
                            src={badgeImages[badge]}
                            alt={badge}
                            className="badge-img"
                            style={{ width: 20, height: 20, marginRight: 6 }}
                          />
                          {badge}
                        </span>
                      ))
                    ) : (
                      <span className="no-badge-text">No badges</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default BadgeAnalyticsReport;
