"use client";
import React from "react";
import { Button } from "@mui/material";
export function ButtonPrimary({ children }) {
  return (
      <Button
        variant="contained"
        sx={{
          bgcolor: "buttonmain.main",
          "&:hover": {
            backgroundColor: "buttonmain_hover.main",
          },
          minWidth: "150px",
          minHeight: "40px",
        }}
      >
        {children}
      </Button>
  );
}
export function ButtonOutline({ children }) {
  return (
    <Button
      variant="outlined"
      sx={{
        borderColor: "buttonmain.main",
        color: "buttonmain.main",
        borderWidth: 2,
        backdropFilter: "blur(10px)",
        "&:hover": {
          borderColor: "buttonmain_hover.main",
          color: "buttonmain_hover.main",
        },
        minWidth: "150px",
        minHeight: "40px",
      }}
    >
      {children}
    </Button>
  );
}
