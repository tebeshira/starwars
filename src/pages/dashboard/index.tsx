import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import { useTranslate } from "@refinedev/core";

import {
  DashboardPeople,
  DashboardFilms,
  DashboardPlanets,
} from "../../components/dashboard";
import { Box } from "@mui/material";

export const DashboardPage: React.FC = () => {
  const t = useTranslate();

  return (
    <Grid container columns={24} spacing={2}>
      <Grid item xs={24} sm={24} md={24} lg={12} xl={7}>
        <Card sx={{ height: "230px", position: "relative" }}>
          <DashboardPeople />
        </Card>
      </Grid>
      <Grid item xs={24} sm={24} md={24} lg={12} xl={7}>
        <Card sx={{ height: "230px", position: "relative" }}>
          <DashboardPlanets />
        </Card>
      </Grid>
      <Grid item xs={24} sm={24} md={24} lg={12} xl={7}>
        <Card sx={{ height: "230px", position: "relative" }}>
          <DashboardFilms />
        </Card>
      </Grid>
    </Grid>
  );
};
