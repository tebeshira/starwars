import { useContext, useEffect } from "react";

import {
  IResourceComponentsProps,
  useNavigation,
  useTranslate,
} from "@refinedev/core";
import { List, DeleteButton } from "@refinedev/mui";

import { getItemIdFromUrlProp } from "../../helpers";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { OptionsMenu } from "../../components/OptionsMenu.tsx";
import { FavoritesContext } from "../../contexts/FavoritesContextProvider";

export const FavoritesList: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const { edit, show } = useNavigation();
  const { favorites, dispatchFavorites } = useContext(FavoritesContext);

  useEffect(() => {
    dispatchFavorites({ type: "GET_ALL_FAVORITES" });
  }, []);

  //  creates rows based on people array in favorites in localstorage
  const rowsPeople = favorites?.people?.map((row) => (
    <TableRow
      key={row.url}
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
        "&:hover": { background: "rgba(0,0,0, 0.3)", cursor: "pointer" },
      }}
    >
      <TableCell
        scope="row"
        onClick={() => show("people", getItemIdFromUrlProp(row.url))}
      >
        {row.name}
      </TableCell>
      <TableCell
        align="right"
        onClick={() => show("people", getItemIdFromUrlProp(row.url))}
      >
        {row.gender}
      </TableCell>
      <TableCell
        align="right"
        onClick={() => show("people", getItemIdFromUrlProp(row.url))}
      >
        {row.height}
      </TableCell>
      <TableCell
        align="right"
        onClick={() => show("people", getItemIdFromUrlProp(row.url))}
      >
        {row.mass}
      </TableCell>
      <TableCell
        align="right"
        onClick={() => show("people", getItemIdFromUrlProp(row.url))}
      >
        {row.hair_color}
      </TableCell>
      <TableCell
        align="right"
        onClick={() => show("people", getItemIdFromUrlProp(row.url))}
      >
        {row.skin_color}
      </TableCell>
      <TableCell align="right">
        <OptionsMenu
          resourceOfItem={"people"}
          id={getItemIdFromUrlProp(row.url)}
          item={row}
        />
      </TableCell>
    </TableRow>
  ));

  //  creates rows based on films array in favorites in localstorage
  const rowsFilms = favorites?.films?.map((row) => (
    <TableRow
      key={row.url}
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
        "&:hover": { background: "rgba(0,0,0, 0.3)", cursor: "pointer" },
      }}
    >
      <TableCell
        scope="row"
        onClick={() => show("films", getItemIdFromUrlProp(row.url))}
      >
        {row.title}
      </TableCell>
      <TableCell
        align="right"
        onClick={() => show("films", getItemIdFromUrlProp(row.url))}
      >
        {new Date(row.release_date).toDateString()}
      </TableCell>
      <TableCell
        align="right"
        onClick={() => show("films", getItemIdFromUrlProp(row.url))}
      >
        {row.director}
      </TableCell>
      <TableCell
        align="right"
        onClick={() => show("films", getItemIdFromUrlProp(row.url))}
      >
        {row.producer}
      </TableCell>
      <TableCell
        align="right"
        onClick={() => show("films", getItemIdFromUrlProp(row.url))}
      >
        {row.episode_id}
      </TableCell>

      <TableCell align="right">
        <OptionsMenu
          resourceOfItem={"films"}
          id={getItemIdFromUrlProp(row.url)}
          item={row}
        />
      </TableCell>
    </TableRow>
  ));

  //  creates rows based on films array in favorites in localstorage
  const rowsPlanets = favorites?.planets?.map((row) => (
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
        align="right"
        onClick={() => show("planets", getItemIdFromUrlProp(row.url))}
      >
        {row.population}
      </TableCell>
      <TableCell
        align="right"
        onClick={() => show("planets", getItemIdFromUrlProp(row.url))}
      >
        {row.climate}
      </TableCell>
      <TableCell
        align="right"
        onClick={() => show("planets", getItemIdFromUrlProp(row.url))}
      >
        {row.gravity}
      </TableCell>
      <TableCell
        align="right"
        onClick={() => show("planets", getItemIdFromUrlProp(row.url))}
      >
        {row.terrain}
      </TableCell>
      <TableCell
        align="right"
        onClick={() => show("planets", getItemIdFromUrlProp(row.url))}
      >
        {row.rotation_period}
      </TableCell>

      <TableCell align="right">
        <OptionsMenu
          resourceOfItem={"films"}
          id={getItemIdFromUrlProp(row.url)}
          item={row}
        />
      </TableCell>
    </TableRow>
  ));

  return (
    <List
      title={
        <Typography variant="h5">
          {t("people.fields.favorites")}
          <Button
            color="error"
            variant="contained"
            sx={{ float: "right" }}
            onClick={() => dispatchFavorites({ type: "REMOVE_ALL_FAVORITES" })}
          >
            {t("favorites.remove")}
          </Button>
        </Typography>
      }
    >
      <TableContainer
        component={Paper}
        sx={{ minWidth: 650, minHeight: 800, position: "relative" }}
      >
        {!favorites.people.length && !favorites.films.length ? (
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: "50%",
              marginLeft: "-77px",
            }}
          >
            No favorites
          </div>
        ) : (
          ""
        )}
        {favorites.people && favorites.people.length ? (
          <>
            <Typography
              variant="h6"
              sx={{
                padding: "35px 15px 0 15px",
                background: "rgba(0, 0, 0, 0.2)",
              }}
            >
              {`${t("people.fields.favorites")} ${t("people.titles.list")}`}
            </Typography>
            <Table
              aria-label="simple table"
              sx={{ marginBottom: "75px", boxShadow: "0 4px 2px -3px black" }}
            >
              <TableHead
                sx={{
                  background: "rgba(0, 0, 0, 0.2)",
                }}
              >
                <TableRow>
                  <TableCell>{t("people.fields.name")}</TableCell>
                  <TableCell align="right">
                    {t("people.fields.gender")}
                  </TableCell>
                  <TableCell align="right">
                    {t("people.fields.height")}
                  </TableCell>
                  <TableCell align="right">{t("people.fields.mass")}</TableCell>
                  <TableCell align="right">
                    {t("people.fields.hair_color")}
                  </TableCell>
                  <TableCell align="right">
                    {t("people.fields.skin_color")}
                  </TableCell>
                  <TableCell align="right">
                    {t("favorites.fields.options")}
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>{rowsPeople}</TableBody>
            </Table>
          </>
        ) : (
          ""
        )}
        {favorites.films && favorites.films.length ? (
          <>
            <Typography
              variant="h6"
              sx={{
                padding: "35px 15px 0 15px",
                background: "rgba(0, 0, 0, 0.2)",
              }}
            >
              {`${t("films.fields.favorites")} ${t("films.titles.list")}`}
            </Typography>

            <Table
              aria-label="simple table"
              sx={{ marginBottom: "75px", boxShadow: "0 4px 2px -3px black" }}
            >
              <TableHead sx={{ background: "rgba(0, 0, 0, 0.2)" }}>
                <TableRow>
                  <TableCell>{t("films.fields.title")}</TableCell>
                  <TableCell align="right">
                    {t("films.fields.release_date")}
                  </TableCell>
                  <TableCell align="right">
                    {t("films.fields.director")}
                  </TableCell>
                  <TableCell align="right">
                    {t("films.fields.producer")}
                  </TableCell>
                  <TableCell align="right">
                    {t("films.fields.episode_id")}
                  </TableCell>
                  <TableCell align="right">
                    {t("favorites.fields.options")}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{rowsFilms}</TableBody>
            </Table>
          </>
        ) : (
          ""
        )}

        {favorites.planets && favorites.planets.length ? (
          <>
            <Typography
              variant="h6"
              sx={{
                padding: "35px 15px 0 15px",
                background: "rgba(0, 0, 0, 0.2)",
              }}
            >
              {`${t("planets.fields.favorites")} ${t("planets.titles.list")}`}
            </Typography>

            <Table
              aria-label="simple table"
              sx={{ marginBottom: "75px", boxShadow: "0 4px 2px -3px black" }}
            >
              <TableHead sx={{ background: "rgba(0, 0, 0, 0.2)" }}>
                <TableRow>
                  <TableCell>{t("planets.fields.name")}</TableCell>
                  <TableCell align="right">
                    {t("planets.fields.population")}
                  </TableCell>
                  <TableCell align="right">
                    {t("planets.fields.climate")}
                  </TableCell>
                  <TableCell align="right">
                    {t("planets.fields.gravity")}
                  </TableCell>
                  <TableCell align="right">
                    {t("planets.fields.terrain")}
                  </TableCell>
                  <TableCell align="right">
                    {t("planets.fields.rotation_period")}
                  </TableCell>
                  <TableCell align="right">
                    {t("favorites.fields.options")}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{rowsPlanets}</TableBody>
            </Table>
          </>
        ) : (
          ""
        )}
      </TableContainer>
    </List>
  );
};
