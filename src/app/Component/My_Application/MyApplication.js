import React, { useState } from "react";
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
} from "@mui/material";

export default function MyApplication() {
  const [appList, setAppList] = useState([
    {
      studentName: "San Nyien Phyo",
      internship: "Frontend Developer",
      status: "Pending",
      appliedDate: "16/11/1999",
    },
    {
      studentName: "San Nyien Phyo",
      internship: "Frontend Developer",
      status: "Pending",
      appliedDate: "16/11/1999",
    },
    {
      studentName: "San Nyien Phyo",
      internship: "Frontend Developer",
      status: "Pending",
      appliedDate: "16/11/1999",
    },
  ]);

  const handleStatusChange = (index, newStatus) => {
    const updatedList = [...appList];
    updatedList[index].status = newStatus;
    setAppList(updatedList);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ m: 2, boxShadow: 3, borderRadius: "8px" }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" component="div" sx={{ mb: 2 }}>
          Recent Application
        </Typography>
      </Box>
      <Table sx={{ minWidth: 400 }} aria-label="recent applications table">
        <TableHead>
          <TableRow sx={{ bgcolor: "#F0F2F6" }}>
            <TableCell sx={{ fontWeight: "bold" }}>Student Name</TableCell>
            <TableCell sx={{ fontWeight: "bold", px: 4 }}>Internship</TableCell>
            <TableCell sx={{ fontWeight: "bold", px: 4.5 }}>Status</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Applied Date</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appList.map((application, index) => (
            <TableRow key={index}>
              <TableCell>{application.studentName}</TableCell>
              <TableCell>{application.internship}</TableCell>
              <TableCell>
                <Select
                  value={application.status}
                  onChange={(e) => handleStatusChange(index, e.target.value)}
                  size="small"
                  sx={{
                    fontWeight: 500,
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
                        ? "#ed6c02"
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
                    backgroundColor: "#7B61FF",
                    "&:hover": { backgroundColor: "#684ee0" },
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
