"use client";
import React from "react";
import { Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function PostInternBtn({ setCurrentPage }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-start", px: 2, mb: 3 }}>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={() => setCurrentPage("postInternship")} 
        sx={{
          background: "#3f51b5",
          color: "white",
          "&:hover": { backgroundColor: "#303f9f" },
          textTransform: "none",
        }}
      >
        Post Internship
      </Button>
    </Box>
  );
}
