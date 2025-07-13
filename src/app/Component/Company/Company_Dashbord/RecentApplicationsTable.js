import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Box,
  Select,
  MenuItem,
  colors,
} from "@mui/material";
import { useState } from "react";
console.log(" RecentApplicationsTable loaded");
export function RecentApplicationsTable({ applications = [] }) {
  const [appList, setAppList] = useState(applications);
  console.log(" Received applications prop:", applications);
  console.log("appList in state:", appList);

  const handleStatusChange = (index, newStatus) => {
    const updated = [...appList];
    updated[index].status = newStatus;
    setAppList(updated);
  };
  return (
    <TableContainer
      component={Paper}
      sx={{ m: 2, boxShadow: 22, borderRadius: "8px" }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" component="div" sx={{ mb: 2 }}>
          Recent Application
        </Typography>
      </Box>
      <Table sx={{ minWidth: 400 }} aria-label="recent applications table">
        <TableHead>
          <TableRow
            sx={{ bgcolor: "#F0F2F6", alignItems: "center", fontSize: 16 }}
          >
            <TableCell sx={{ fontWeight: "bold" }}>Student Name</TableCell>
            <TableCell sx={{ fontWeight: "bold", px: 4 }}>Internship</TableCell>
            <TableCell sx={{ fontWeight: "bold", px: 4.5 }}>Status</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Applied Date</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appList.map((application, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {application.studentName}
              </TableCell>
              <TableCell>{application.internship}</TableCell>
              <TableCell>
                <Select
                  value={application.status}
                  onChange={(e) => handleStatusChange(index, e.target.value)}
                  size="small"
                  sx={{
                    minWidth: 40,
                    fontWeight: 100,
                    borderRadius: "3px",
                    backgroundColor:
                      application.status === "Accepted"
                        ? "#e8f5e9"
                        : application.status === "Pending"
                        ? "#fff3e0"
                        : "#ffebee",
                    color:
                      application.status === "Accepted"
                        ? "green"
                        : application.status === "Pending"
                        ? "#ed6c02" // orange instead of yellow
                        : "red",
                  }}
                >
                  <MenuItem value="Pending" sx={{ color: "#ed6c02" }}>
                    Pending
                  </MenuItem>
                  <MenuItem value="Accepted" sx={{ color: "green" }}>
                    Accepted
                  </MenuItem>
                  <MenuItem value="Rejected" sx={{ color: "red" }}>
                    Rejected
                  </MenuItem>
                </Select>
              </TableCell>
              <TableCell>{application.appliedDate}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: "#3f51b5",
                    "&:hover": { backgroundColor: "#303f9f" },
                  }}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
