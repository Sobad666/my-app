import React from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";

function DashboardCard({ value, title, cardColor }) {
  return (
    <Card
      sx={{
        height: "100%",
        backgroundColor: cardColor,
        borderRadius: "10px",
        boxShadow: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2.5,
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          sx={{ mb: 1, fontWeight: "bold", textAlign: "center" }}
        >
          {value}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function CardSection() {
  const cardData = [
    { title: "Application Received", value: 9, color: "#ffe0b2" },
    { title: "Interviews Scheduled", value: 5, color: "#c8f1c8" },
    { title: "Active Internships", value: 12, color: "#dcd0ff" },
    { title: "Selected Interns", value: 10, color: "#ffcfd7" },
  ];

  return (
    <Box sx={{ width: "100%", mb: 4, mx: 2, alignItems: "auto" }}>
      <Grid container spacing={6}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <DashboardCard
              title={card.title}
              value={card.value}
              cardColor={card.color}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
