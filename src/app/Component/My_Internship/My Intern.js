"use client";
import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Select,
  MenuItem,
} from "@mui/material";

export default function MyInternshipPage() {
  const [internships, setInternships] = useState([
    {
      title: "Software Engineering Intern",
      status: "Active",
      applications: 8,
      date: "3/3/2025",
    },
    {
      title: "UI/UX Intern",
      status: "Pending",
      applications: 5,
      date: "2/2/2025",
    },
    {
      title: "Backend Developer Intern",
      status: "Closed",
      applications: 10,
      date: "1/1/2025",
    },
  ]);

  const handleStatusChange = (index, newStatus) => {
    const updated = [...internships];
    updated[index].status = newStatus;
    setInternships(updated);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Paper elevation={2} sx={{ borderRadius: 3, p: 3, margin: 1 }}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          My Post Internships
        </Typography>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Title</strong>
                </TableCell>
                <TableCell>
                  <strong>Status</strong>
                </TableCell>
                <TableCell>
                  <strong>Applications</strong>
                </TableCell>
                <TableCell>
                  <strong>Post Date</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>Action</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {internships.map((intern, index) => (
                <TableRow key={index}>
                  <TableCell>{intern.title}</TableCell>
                  <TableCell>
                    <Select
                      value={intern.status}
                      onChange={(e) =>
                        handleStatusChange(index, e.target.value)
                      }
                      size="small"
                      sx={{
                        minWidth: 120,
                        fontWeight: 600,
                        color:
                          intern.status === "Active"
                            ? "green"
                            : intern.status === "Pending"
                            ? "orange"
                            : "gray",
                        backgroundColor:
                          intern.status === "Active"
                            ? "#e6f4ea"
                            : intern.status === "Pending"
                            ? "#fff4e5"
                            : "#f0f0f0",
                        borderRadius: 2,
                        height: 32,
                        fontSize: 14,
                        px: 1,
                      }}
                    >
                      <MenuItem value="Active">Active</MenuItem>
                      <MenuItem value="Pending">Pending</MenuItem>
                      <MenuItem value="Closed">Closed</MenuItem>
                    </Select>
                  </TableCell>
                  <TableCell>{intern.applications}</TableCell>
                  <TableCell>{intern.date}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#7B61FF",
                        color: "#fff",
                        textTransform: "none",
                        px: 3,
                        py: 0.5,
                        borderRadius: 1,
                        "&:hover": {
                          backgroundColor: "#684ee0",
                        },
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
      </Paper>
    </Box>
  );
}
