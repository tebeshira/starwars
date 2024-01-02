import { useContext } from "react";

import {
  IResourceComponentsProps,
  useDelete,
  useNavigation,
  useTranslate,
  useTable,
  HttpError,
  useResource,
} from "@refinedev/core";
import { List } from "@refinedev/mui";
import Typography from "@mui/material/Typography";

import { IPlanet } from "../../interfaces";

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

import { getItemIdFromUrlProp } from "../../helpers";
import LastPageIcon from "@mui/icons-material/LastPage";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const PlanetsList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const { edit, show } = useNavigation();
  const { searchState, dispatch } = useContext(SearchContext);
  const { resource } = useResource();

  const { tableQueryResult, current, setCurrent, pageCount } = useTable<
    IPlanet,
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
      searchValue: searchState[resource?.name as string],
    },
  });
  // value ensures that every new search will give the results for the 1 page (see getList() in dataprovider_SWAPI)
  // SEARCH_... ensures search value persistance in the same resource
  function setCurrentPageOnSearch(value: number, searchedValue: string) {
    setCurrent(value);
    dispatch({ type: `SEARCH_${resource?.name}`, payload: searchedValue });
  }

  // Fetches the people for the current page
  const planets = tableQueryResult?.data?.data ?? [];
  // Checks if there is a next page available
  const hasNext = current < pageCount;
  // Checks if there is a previous page available
  const hasPrev = current > 1;

  const rows = planets.map((row) => (
    <TableRow
      key={row.url}
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
        "&:hover": { background: "rgba(0,0,0, 0.3)", cursor: "pointer" },
      }}
    >
      <TableCell
        scope="row"
        onClick={() => show("planets", getItemIdFromUrlProp(row.url))}
      >
        {row.name}
      </TableCell>
      <TableCell
        align="left"
        onClick={() => show("planets", getItemIdFromUrlProp(row.url))}
      >
        {row.population}
      </TableCell>

      <TableCell
        align="left"
        onClick={() => show("planets", getItemIdFromUrlProp(row.url))}
      >
        {row.climate}
      </TableCell>
      <TableCell
        align="left"
        onClick={() => show("planets", getItemIdFromUrlProp(row.url))}
      >
        {row.gravity}
      </TableCell>
      <TableCell
        align="left"
        onClick={() => show("planets", getItemIdFromUrlProp(row.url))}
      >
        {row.terrain}
      </TableCell>
      <TableCell
        align="left"
        onClick={() => show("planets", getItemIdFromUrlProp(row.url))}
      >
        {row.rotation_period}
      </TableCell>
      <TableCell align="left">
        <OptionsMenu
          resourceOfItem={"planets"}
          id={getItemIdFromUrlProp(row.url)}
          item={row}
        />
      </TableCell>
    </TableRow>
  ));

  return (
    <List
      title={<Typography variant="h5">{t("planets.titles.list")}</Typography>}
    >
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
            <TableHead
              sx={{
                background: "rgba(0, 0, 0, 0.2)",
              }}
            >
              <TableRow>
                <TableCell>{t("planets.fields.name")}</TableCell>
                <TableCell align="left">
                  {t("planets.fields.population")}
                </TableCell>
                <TableCell align="left">
                  {t("planets.fields.climate")}
                </TableCell>
                <TableCell align="left">
                  {t("planets.fields.gravity")}
                </TableCell>
                <TableCell align="left">
                  {t("planets.fields.terrain")}
                </TableCell>
                <TableCell align="left">
                  {t("planets.fields.rotation_period")}
                </TableCell>
                <TableCell align="left">
                  {t("planets.fields.options")}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{rows}</TableBody>
          </Table>
        </>
      </TableContainer>
      <div className="pagination">
        <button onClick={() => setCurrent(1)} disabled={!hasPrev}>
          <FirstPageIcon
            sx={{
              width: "18px",
              height: "18px",
            }}
          />
        </button>
        <button
          onClick={() => setCurrent((prev) => prev - 1)}
          disabled={!hasPrev}
        >
          <ArrowBackIosIcon
            sx={{
              width: "18px",
              height: "18px",
            }}
          />
        </button>
        <span> {current}</span>
        <button
          onClick={() => setCurrent((prev) => prev + 1)}
          disabled={!hasNext}
        >
          <ArrowForwardIosIcon
            sx={{
              width: "18px",
              height: "18px",
            }}
          />
        </button>
        <button onClick={() => setCurrent(pageCount)} disabled={!hasNext}>
          <LastPageIcon
            sx={{
              width: "18px",
              height: "18px",
            }}
          />
        </button>
      </div>
    </List>
  );
};
