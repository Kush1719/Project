import React from "react";
import userlogdata from "../userData.json";
import { Table } from "react-bootstrap";
import Box from "@mui/material/Box";

// Badge style mapping
const badgeStyles = {
  "Task Master": { background: "#e2f7e1", color: "#1bb934" },
  "Explorer Extraordinaire": { background: "#e6f0fa", color: "#2a6edb" },
  "Fast Learner": { background: "#ffe8d1", color: "#ff9800" },
  "Knowledge Keeper": { background: "#fff7e6", color: "#e6a700" },
  "Trailblazer": { background: "#fde6ef", color: "#e43f7c" },
};

function BadgeAnalyticsReport() {
  return (
    <div style={{ marginLeft: 265, padding: "20px", paddingBottom: "60px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h5 style={{ margin: 0 }}>Badge Analytics Reports</h5>
        <span style={{ fontSize: 13, color: "#2a6edb", textDecoration: "none", cursor: "pointer"}}>
          View All &gt;
        </span>
      </div>
      <Table bordered hover size="sm" style={{ background: "#fff", textAlign: "center"}}>
        <thead>
          <tr style={{ background: "#f6fafd" }}>
            <th>S.No</th>
            <th>EMP Name</th>
            <th>EMP ID</th>
            <th>Last Active</th>
            <th>Badges Earned</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userlogdata.map((row, idx) => (
            <tr key={idx}>
              <td>{(idx + 1).toString().padStart(2, "0")}</td>
              <td>{row.name}</td>
              <td>{row.empId}</td>
              <td>{row.lastActive}</td>
              <td>
                {row.badges?.length ? (
                  row.badges.map((badge, i) => (
                    <Box
                      key={i}
                      component="span"
                      sx={{
                        ...badgeStyles[badge],
                        marginRight: 1,
                        fontSize: "0.9em",
                        padding: "0.4em 0.8em",
                        borderRadius: 2,
                        fontWeight: 500,
                        display: "inline-block",
                        marginBottom: "4px",
                      }}
                    >
                      {badge}
                    </Box>
                  ))
                ) : (
                  <span style={{ fontStyle: "italic", color: "#888" }}>No badges</span>
                )}
              </td>
              <td>
                <span style={{ fontSize: "1.5em", cursor: "pointer" }}>⋮</span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default BadgeAnalyticsReport;
