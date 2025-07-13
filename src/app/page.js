"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import MiniDrawer from "./Component/aSideBar";
import CardSection from "./Component/Company/Company_Dashbord/Card";
import PostInternBtn from "./Component/Company/PostInternBtn";
import { RecentApplicationsTable } from "./Component/Company/Company_Dashbord/RecentApplicationsTable";
import PostIntern from "./Component/Post Intern/PostIntern";
import MyInternshipPage from "./Component/My_Internship/My Intern";
import MyApplication from "./Component/My_Application/MyApplication";
import CompanySettings from "./Component/Setting/CompanySetting";

export default function App() {
  const drawerWidth = 240;
  const collapsedWidth = 64;

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState("dashboard");

  const applications = [
    {
      studentName: "San Nyein Phyo",
      internship: "Frontend Developer",
      status: "Pending",
      appliedDate: "16/11/1999",
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <MiniDrawer
        open={drawerOpen}
        setOpen={setDrawerOpen}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: "64px",
          marginLeft: drawerOpen
            ? `${drawerWidth - 220}px`
            : `${collapsedWidth - 228}px`,
          transition: "margin 0.3s",
        }}
      >
        <Box sx={{ maxWidth: 1200, px: 4, py: 3, mx: "auto" }}>
          {currentPage === "dashboard" && (
            <>
              <CardSection />
              <PostInternBtn setCurrentPage={setCurrentPage} />
              <RecentApplicationsTable applications={applications} />
            </>
          )}
          {currentPage === "postInternship" && <PostIntern />}
          {currentPage === "myInternship" && <MyInternshipPage />}
          {currentPage === "myApplication" && <MyApplication />}
          {currentPage === "settings" && <CompanySettings />}
          {currentPage === "notifications" && (
            <Typography variant="h5">You have no new notifications.</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}
