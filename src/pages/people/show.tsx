import React from "react";
import {
  HttpError,
  IResourceComponentsProps,
  useShow,
  useTranslate,
} from "@refinedev/core";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { DateField, Show, NumberField, useDataGrid } from "@refinedev/mui";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import { CustomTooltip, OrderStatus } from "../../components";
import { IOrder, IOrderFilterVariables, IUser } from "../../interfaces";

const UserInfoText: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent={{
      sm: "center",
      lg: "flex-start",
    }}
    gap={1}
  >
    {children}
  </Stack>
);

export const PeopleShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const { queryResult } = useShow<IUser>();
  const user = queryResult.data?.data;

  return (
    <Show>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid
          container
          sx={{
            marginX: { xs: "0px" },
          }}
        >
          <Grid item xs={12} md={4}>
            <Stack gap={1} justifyContent="center" alignItems="center">
              <label htmlFor="avatar-input">
                <Avatar
                  sx={{
                    cursor: "pointer",
                    width: {
                      xs: "120px",
                      md: "160px",
                      lg: "200px",
                    },
                    height: {
                      xs: "120px",
                      md: "160px",
                      lg: "200px",
                    },
                  }}
                  src="#"
                  alt="Person Picture"
                />
              </label>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {t("people.fields.images.description")}
              </Typography>
              <Typography sx={{ fontSize: "12px" }}>
                {t("couriers.fields.images.validation")}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container>
              <Grid item paddingX={4} xs={12} md={6}>
                <Stack gap="24px">1111111111</Stack>
              </Grid>
              <Grid item paddingX={4} xs={12} md={6}>
                <Stack gap="24px">11111111111111</Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Show>
  );
};
