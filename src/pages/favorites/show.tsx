import React from "react";
import {
  HttpError,
  IResourceComponentsProps,
  useShow,
  useTranslate,
} from "@refinedev/core";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { DateField, List, NumberField, useDataGrid } from "@refinedev/mui";

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
    <Grid container spacing={2}>
      <Grid item xs={12} lg={3}>
        <Paper sx={{ p: 2, paddingX: { xs: 4, md: 2 } }}>
          <Stack alignItems="center" spacing={1}>
            <Avatar
              src={user?.avatar?.[0].url}
              sx={{ width: 120, height: 120 }}
            />
            <Typography variant="h6">
              {user?.firstName} {user?.lastName}
            </Typography>
          </Stack>
          <br />
          <Stack spacing={1}>
            <UserInfoText>
              <PersonOutlineOutlinedIcon />
              <Typography variant="body1">
                {t(`users.fields.gender.${user?.gender}`)}
              </Typography>
            </UserInfoText>
            <UserInfoText>
              <LocalPhoneOutlinedIcon />
              <Typography variant="body1">{user?.gsm}</Typography>
            </UserInfoText>
            <UserInfoText>
              <DateRangeOutlinedIcon />
              <Typography variant="body1">{user?.createdAt}</Typography>
            </UserInfoText>
            <UserInfoText>
              <CheckOutlinedIcon />
              <Typography variant="body1">
                {user?.isActive
                  ? t("users.fields.isActive.true")
                  : t("users.fields.isActive.false")}
              </Typography>
            </UserInfoText>
          </Stack>
        </Paper>
      </Grid>
      {/* <Grid item xs={12} lg={9}>
        <Stack direction="column" spacing={2}>
          <List
            headerProps={{ title: t("orders.orders") }}
            wrapperProps={{ sx: { paddingX: { xs: 2, md: 0 } } }}
          >
            <DataGrid
              {...dataGridProps}
              columns={columns}
              autoHeight
              pageSizeOptions={[4, 10, 20, 100]}
            />
          </List>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>{t("users.addresses.address")}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {user?.addresses.map((row) => (
                  <TableRow key={row.text}>
                    <TableCell>{row.text}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Grid> */}
    </Grid>
  );
};
