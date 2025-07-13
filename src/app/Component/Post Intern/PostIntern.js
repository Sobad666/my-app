import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { ButtonPrimary, ButtonOutline } from "../Button";

const internshipTypes = [
  { value: "full-time", label: "Full-time" },
  { value: "part-time", label: "Part-time" },
  { value: "remote", label: "Remote" },
  { value: "internship", label: "Internship" },
];

export default function PostInternshipForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [requirement, setRequirement] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, description, requirement, location, type });
  };

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 700,
        margin: "auto",
        p: 4,
        borderRadius: 3,
      }}
    >
      <Typography variant="h5" fontWeight="bold" mb={3} align="center">
        Post New Internship
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <TextField
          label="Internship Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          sx={{ borderRadius: 3 }}
        />

        <TextField
          label="Description"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          rows={3}
          fullWidth
          sx={{ borderRadius: 3 }}
        />

        <TextField
          label="Requirement"
          variant="outlined"
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
          multiline
          rows={3}
          fullWidth
          sx={{ borderRadius: 3 }}
        />

        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "space-between",
          }}
        >
          <TextField
            label="Location"
            variant="outlined"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            sx={{ flex: 1, borderRadius: 3 }}
          />

          <FormControl sx={{ flex: 1 }} variant="outlined">
            <InputLabel id="internship-type-label">Internship Type</InputLabel>
            <Select
              labelId="internship-type-label"
              label="Internship Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              sx={{ borderRadius: 3 }}
            >
              {internshipTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Button
          type="submit"
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            alignSelf: "center",
            px: 4,
            py: 1.5,
            borderRadius: 3,
            bgcolor: "#6A38C2",
          }}
        >
          Post Internship
        </Button>
      </Box>
    </Paper>
  );
}
