import React from "react";
import { Box, Typography, Paper, Button } from "@mui/material";

export default function CompanySettings() {
  return (
    <Paper
  elevation={0}
  sx={{
    p: 7,
    borderRadius: "14px",
    backgroundColor: "#fff",
    maxWidth: 700,
    margin: "50px auto",
    border: "1px solid #e0e0e0",
  }}
>

      <Box>

        <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
          Company Settings
        </Typography>

        <Paper
          elevation={3}
          sx={{
            p: 3,
            mb: 3,
            borderRadius: "10px",
            backgroundColor: "#fff",
          }}
        >
          <Typography sx={{ mb: 2 }}>
            Update company name, logo, description, and contact details.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#6a38c2",
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#5829a8" },
            }}
          >
            Edit Profile
          </Button>
        </Paper>

        <Paper
          elevation={3}
          sx={{
            p: 3,
            borderRadius: "10px",
            backgroundColor: "#fff",
          }}
        >
          <Typography sx={{ mb: 2 }}>Change your password here.</Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#6a38c2",
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#5829a8" },
            }}
          >
            Security Setting
          </Button>
        </Paper>
      </Box>
    </Paper>
  );
}
