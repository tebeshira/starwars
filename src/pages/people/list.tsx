// import React, { useState, useContext, useEffect } from "react";
// import { SearchContext } from "../../contexts/SearchContext";

// import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
// import { FormControlLabel, Checkbox, Button, ButtonGroup } from "@mui/material";
// import {
//   IResourceComponentsProps,
//   useDelete,
//   useNavigation,
//   useTranslate,
//   useList,
//   HttpError,
// } from "@refinedev/core";
// import { useLocation } from "react-router-dom";
// import { List, useDataGrid } from "@refinedev/mui";
// import Avatar from "@mui/material/Avatar";
// import Stack from "@mui/material/Stack";
// import Tooltip from "@mui/material/Tooltip";
// import Typography from "@mui/material/Typography";

// import FavoriteIcon from "@mui/icons-material/Favorite";
// import Close from "@mui/icons-material/Close";
// import Edit from "@mui/icons-material/Edit";

// import { IPeople } from "../../interfaces";
// import { Search } from "../../components/Search";

// export const PeopleList: React.FC<IResourceComponentsProps> = () => {
//   const [isRegisteredNewSearch, setIsRegisteredNewSearch] =
//     useState<boolean>(false);

//   const { show, edit } = useNavigation();
//   const t = useTranslate();
//   const { mutate: mutateDelete } = useDelete();

//   const { state, dispatch } = useContext(SearchContext);

//   let location = useLocation();

//   // console.log(location);

//   // interface Row {
//   //   count: number;
//   //   next: string | null;
//   //   previous: string | null;
//   //   results: IPeople[];
//   // }

//   // {
//   //   initialPageSize: 10,
//   //    initialSorter: [
//   //      {
//   //        field: "name",
//   //        order: "asc",
//   //      },
//   //    ],
//   //  }

//   // const { refetch: fetchSearchedPeople } = useList<IPeople, HttpError>({
//   //   resource: "people",
//   //   queryOptions: { enabled: searchValue ? true : false },
//   //   meta: {
//   //     searchValue,
//   //   },
//   // });

//   const { dataGridProps } = useDataGrid<GridColDef<IPeople>[]>({
//     initialPageSize: 10,
//     initialSorter: [
//       {
//         field: "name",
//         order: "asc",
//       },
//     ],
//     meta: {
//       searchValue: state.searchPeople,
//       isRegisteredNewSearch,
//     },
//     // syncWithLocation: true,
//   });

//   // useEffect(() => {
//   //   return () => {
//   //     dispatch({ type: "SEARCH_PEOPLE", payload: "" });
//   //   };
//   // }, []);

//   console.log(isRegisteredNewSearch);

//   // useEffect(() => {
//   //   setSearchValue(localStorage.getItem("searchValue") as string);
//   // }, []);

//   // useEffect(() => {
//   //   if (searchValue) {
//   //     fetchSearchedPeople();
//   //   }
//   // }, [searchValue]);

//   function registrator(value: boolean) {
//     setIsRegisteredNewSearch(value);
//   }

//   // console.log(dataGridProps);
//   // console.log(searchValue);

//   function getRowId(row: IPeople) {
//     return row.name.trim();
//   }

//   const columns = React.useMemo<GridColDef<IPeople>[]>(
//     () => [
//       {
//         field: "name",
//         headerName: t("couriers.fields.name"),
//         renderCell: function render({ row }) {
//           return (
//             <Stack alignItems="center" direction="row" spacing={2}>
//               <Typography variant="body2">{row.name}</Typography>
//             </Stack>
//           );
//         },
//         flex: 1,
//         minWidth: 300,
//       },

//       {
//         field: "Gender",
//         headerName: t("people.fields.gender"),
//         renderCell: function render({ row }) {
//           return (
//             <Stack alignItems="center" direction="row" spacing={2}>
//               <Typography variant="body2">{row.gender}</Typography>
//             </Stack>
//           );
//         },
//         flex: 1,
//         minWidth: 200,
//         sortable: false,
//       },
//       {
//         field: "Height",
//         headerName: t("people.fields.height"),
//         renderCell: function render({ row }) {
//           return (
//             <Stack alignItems="center" direction="row" spacing={2}>
//               <Typography variant="body2">{row.height}</Typography>
//             </Stack>
//           );
//         },
//         flex: 1,
//         minWidth: 200,
//         sortable: false,
//       },
//       {
//         field: "Mass",
//         headerName: t("people.fields.mass"),
//         renderCell: function render({ row }) {
//           return (
//             <Stack alignItems="center" direction="row" spacing={2}>
//               <Typography variant="body2">{row.mass}</Typography>
//             </Stack>
//           );
//         },
//         flex: 1,
//         minWidth: 200,
//         sortComparator: (v1, v2) => v1.mass.localeCompare(v2.mass),
//         sortable: false,
//       },
//       {
//         field: "Hair",
//         headerName: t("people.fields.hair_color"),
//         renderCell: function render({ row }) {
//           return (
//             <Stack alignItems="center" direction="row" spacing={2}>
//               <Typography variant="body2">{row.hair_color}</Typography>
//             </Stack>
//           );
//         },
//         flex: 1,
//         minWidth: 200,
//         sortable: false,
//       },
//       {
//         field: "Skin",
//         headerName: t("people.fields.skin_color"),
//         renderCell: function render({ row }) {
//           return (
//             <Stack alignItems="center" direction="row" spacing={2}>
//               <Typography variant="body2">{row.skin_color}</Typography>
//             </Stack>
//           );
//         },
//         flex: 1,
//         minWidth: 200,
//         sortable: false,
//       },
//       {
//         field: "actions",
//         headerName: t("table.actions"),
//         type: "actions",
//         getActions: function render({ row }) {
//           return [
//             <GridActionsCellItem
//               key={1}
//               label={"Add to favorites"}
//               icon={<FavoriteIcon color="error" />}
//               onClick={(row) => {
//                 console.log(row);
//               }}
//               showInMenu
//             />,
//             <GridActionsCellItem
//               key={2}
//               label={t("buttons.edit")}
//               icon={<Edit color="success" />}
//               onClick={() => edit("people", row.name)}
//               showInMenu
//             />,
//             <GridActionsCellItem
//               key={3}
//               label={t("buttons.delete")}
//               icon={<Close color="error" />}
//               onClick={() => {
//                 mutateDelete({
//                   resource: "people",
//                   id: row.name,
//                   mutationMode: "undoable",
//                 });
//               }}
//               showInMenu
//             />,
//           ];
//         },
//       },
//     ],
//     [t]
//   );

//   return (
//     <List wrapperProps={{ sx: { paddingX: { xs: 2, md: 0 } } }}>
//       <Search registerNewSearch={registrator} />
//       <DataGrid
//         getRowId={getRowId}
//         {...dataGridProps}
//         columns={columns}
//         sortingMode="client"
//         sortingOrder={["asc", "desc"]}
//         disableColumnFilter
//         disableColumnMenu
//         autoHeight
//         pageSizeOptions={[10]}
//         density="comfortable"
//         sx={{
//           "& .MuiDataGrid-cell:hover": {
//             cursor: "pointer",
//           },
//         }}
//         onRowClick={(row) => {
//           show("people", row.id);
//         }}
//       />
//     </List>
//   );
// };

import { useContext, useState } from "react";

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
import { OptionsMenu } from "../../components/OptionsMenu.tsx";
import { Search } from "../../components/Search";
import { SearchContext } from "../../contexts/SearchContextProvider";
import { FavoritesContext } from "../../contexts/FavoritesContextProvider";

export const PeopleList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const { edit } = useNavigation();
  const { state, dispatch } = useContext(SearchContext);
  // const { favorites, dispatchFavorites } = useContext(FavoritesContext);

  const { tableQueryResult, current, setCurrent, pageCount } = useTable<
    IPeople,
    HttpError
  >({
    sorters: {
      initial: [
        {
          field: "name",
          order: "asc",
        },
      ],
    },
    meta: {
      searchValue: state.searchPeople,
    },
  });
  // value ensures that every new search will give the results for the 1 page (see getList() in dataprovider_SWAPI)
  // SEARCH_PEOPLE ensures search value persistance in the same resource
  function setCurrentPageOnSearch(value: number, searchedValue: string) {
    setCurrent(value);
    dispatch({ type: "SEARCH_PEOPLE", payload: searchedValue });
  }

  // Fetches the people for the current page
  const people = tableQueryResult?.data?.data ?? [];
  // Checks if there is a next page available
  const hasNext = current < pageCount;
  // Checks if there is a previous page available
  const hasPrev = current > 1;

  const rows = people.map((row) => (
    <TableRow
      key={row.name}
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
        "&:hover": { background: "rgba(0,0,0, 0.3)", cursor: "pointer" },
      }}
    >
      <TableCell
        component="th"
        scope="row"
        onClick={() => edit("people", row.name)}
      >
        {row.name}
      </TableCell>
      <TableCell align="right" onClick={() => edit("people", row.name)}>
        {row.gender}
      </TableCell>

      <TableCell align="right" onClick={() => edit("people", row.name)}>
        {row.height}
      </TableCell>
      <TableCell align="right" onClick={() => edit("people", row.name)}>
        {row.mass}
      </TableCell>
      <TableCell align="right" onClick={() => edit("people", row.name)}>
        {row.hair_color}
      </TableCell>
      <TableCell align="right" onClick={() => edit("people", row.name)}>
        {row.skin_color}
      </TableCell>
      <TableCell align="right">
        <OptionsMenu resourceOfItem={"people"} name={row.name} item={row} />
      </TableCell>
    </TableRow>
  ));

  return (
    <List>
      <Search setCurentPage={setCurrentPageOnSearch} />

      <TableContainer
        component={Paper}
        sx={{ minWidth: 650, minHeight: 800, position: "relative" }}
      >
        <>
          {tableQueryResult?.isLoading && (
            <div className="overlay">
              <div className="overlay__inner">
                <div className="overlay__content">
                  <span className="spinner"></span>
                </div>
              </div>
            </div>
          )}
          {tableQueryResult?.fetchStatus === "fetching" && (
            <div className="overlay">
              <div className="overlay__inner">
                <div className="overlay__content"></div>
              </div>
            </div>
          )}
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Gender</TableCell>
                <TableCell align="right">Height&nbsp;(cm)</TableCell>
                <TableCell align="right">Mass&nbsp;(kg)</TableCell>
                <TableCell align="right">Hair</TableCell>
                <TableCell align="right">Skin</TableCell>
                <TableCell align="right">Options</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{rows}</TableBody>
          </Table>
        </>
      </TableContainer>
      <div>
        <button onClick={() => setCurrent(1)} disabled={!hasPrev}>
          First
        </button>
        <button
          onClick={() => setCurrent((prev) => prev - 1)}
          disabled={!hasPrev}
        >
          Previous
        </button>
        <span>{current}</span>
        <button
          onClick={() => setCurrent((prev) => prev + 1)}
          disabled={!hasNext}
        >
          Next
        </button>
        <button onClick={() => setCurrent(pageCount)} disabled={!hasNext}>
          Last
        </button>
      </div>
    </List>
  );
};
