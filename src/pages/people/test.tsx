import { useMemo } from "react";

import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid";

import {
  IResourceComponentsProps,
  useDelete,
  useNavigation,
  useTranslate,
  useTable,
  HttpError,
  useModal,
} from "@refinedev/core";
import { List, useDataGrid } from "@refinedev/mui";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import Close from "@mui/icons-material/Close";
import Edit from "@mui/icons-material/Edit";

import { IPeople } from "../../interfaces";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const PeopleList: React.FC<IResourceComponentsProps> = () => {
  // const { show, edit } = useNavigation();
  const t = useTranslate();
  const { mutate: mutateDelete } = useDelete();
  const { visible, show, close } = useModal();
  const { tableQueryResult } = useTable<IPeople, HttpError>({
    sorters: {
      initial: [
        {
          field: "name",
          order: "asc",
        },
      ],
    },
  });

  // Fetches the posts for the current page
  const people = tableQueryResult?.data?.data ?? [];

  const rows = people.map((row) => (
    <TableRow
      key={row.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell align="right">{row.gender}</TableCell>

      <TableCell align="right">{row.height}</TableCell>
      <TableCell align="right">{row.mass}</TableCell>
      <TableCell align="right">{row.hair_color}</TableCell>
      <TableCell align="right">{row.skin_color}</TableCell>
    </TableRow>
  ));

  console.log(tableQueryResult);

  return (
    <List>
      <TableContainer
        component={Paper}
        sx={{ minWidth: 650, height: 586, position: "relative" }}
      >
        {!tableQueryResult?.isLoading ? (
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Gender</TableCell>
                <TableCell align="right">Height&nbsp;(cm)</TableCell>
                <TableCell align="right">Mass&nbsp;(kg)</TableCell>
                <TableCell align="right">Hair</TableCell>
                <TableCell align="right">Skin</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{rows}</TableBody>
          </Table>
        ) : (
          <div
            style={{
              position: "absolute",
              width: "100%",
              textAlign: "center",
              top: "50%",
            }}
          >
            loading...
          </div>
        )}
      </TableContainer>
      <>
        <button onClick={show}>Show Modal</button>
        {visible && (
          <>
            <p>Dummy Modal Content</p>
            <button onClick={close}>Close Modal</button>
          </>
        )}
      </>
    </List>
  );
};
