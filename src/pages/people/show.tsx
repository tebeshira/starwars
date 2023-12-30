import React, { useEffect, useState } from "react";
import {
  HttpError,
  IResourceComponentsProps,
  useShow,
  useTranslate,
  useLink,
  useOne,
  useMany,
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
import { IPeople, IOrderFilterVariables, IUser } from "../../interfaces";
import {
  getItemIdFromUrlProp,
  getItemResourceFromUrlProp,
} from "../../helpers";
import { Spinner } from "../../components/Spinner";
import { CreateLink } from "../../components/CreateLink";

export const PeopleShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const [ids, setIds] = useState<string[] | number[]>([]);
  const { queryResult } = useShow<IPeople>();

  const Link = useLink();

  const person = queryResult.data?.data;

  // const itemsForLinks = data?.data;

  // console.log(itemsForLinks);

  // useEffect(() => {
  //   if (person && person.films.length) {
  //     setIds(getItemIdsFromUrls(person.films));
  //   }
  // }, [person]);

  // if (person) {
  //   console.log(getItemIdsFromUrls(person.films));
  // }

  // const { data, isLoading, isError } = useOne<IPeople, HttpError>({
  //   resource: "people",
  //   id,
  // });

  console.log(queryResult);

  // if (queryResult.isLoading) {
  //   return <Spinner position="absolute" />;
  // }
  // const resource = getItemResourceFromUrlProp(url)

  // <Link to={`/${resource}/${id}`}>
  //         <span className="inlineLink">{`${data?.data.name}`}</span>
  //       </Link>

  // function createLinks(urls: string[]) {
  //   return urls.map((url) => {
  //     const id = getItemIdFromUrlProp(url);
  //     const resource = getItemResourceFromUrlProp(url);

  //     console.log(resource);
  //     return (
  //       <Link to={`/${resource}/${id}`}>
  //         <span className="inlineLink">{`${data?.data.name}`}</span>
  //       </Link>
  //     );
  //   });
  // }

  return (
    <Show>
      {queryResult.isLoading ? (
        <Spinner position="absolute" />
      ) : (
        <Box
          component="div"
          sx={{
            position: "relative",
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
                {/* <Typography sx={{ fontSize: "12px" }}>
                {t("couriers.fields.images.validation")}
              </Typography> */}
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              md={8}
              sx={{
                background: "rgba(0,0,0,0.3)",
                borderRadius: "5px",
                padding: "25px",
              }}
            >
              <Grid container>
                <Grid item paddingX={4} xs={12} md={4}>
                  <Stack spacing={2}>
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("people.fields.name")}
                      </Typography>

                      <Typography sx={{ fontSize: "14px", color: "#757575" }}>
                        {person?.name}
                      </Typography>
                    </Stack>

                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("people.fields.height")}
                      </Typography>
                      <Typography sx={{ fontSize: "14px", color: "#757575" }}>
                        {person?.height}
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("people.fields.mass")}
                      </Typography>
                      <Typography sx={{ fontSize: "14px", color: "#757575" }}>
                        {person?.mass}
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("people.fields.hair_color")}
                      </Typography>
                      <Typography sx={{ fontSize: "14px", color: "#757575" }}>
                        {person?.hair_color}
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("people.fields.skin_color")}
                      </Typography>
                      <Typography sx={{ fontSize: "14px", color: "#757575" }}>
                        {person?.skin_color}
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("people.fields.eye_color")}
                      </Typography>
                      <Typography sx={{ fontSize: "14px", color: "#757575" }}>
                        {person?.eye_color}
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("people.fields.birth_year")}
                      </Typography>
                      <Typography sx={{ fontSize: "14px", color: "#757575" }}>
                        {person?.birth_year}
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("people.fields.gender")}
                      </Typography>
                      <Typography sx={{ fontSize: "14px", color: "#757575" }}>
                        {person?.gender}
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>

                {/* ==================================================================== */}

                <Grid item paddingX={4} xs={12} md={4}>
                  <Stack spacing={2}>
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("people.fields.homeworld")}
                      </Typography>

                      <Typography sx={{ fontSize: "14px", color: "#757575" }}>
                        {person?.homeworld}
                      </Typography>
                    </Stack>

                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("people.fields.films")}
                      </Typography>
                      <Typography sx={{ fontSize: "14px", color: "#757575" }}>
                        {/* {createLinks(person?.films as [])} */}
                        {/* <CreateLinks urls={person?.films}/> */}
                        {(person?.films as []).map((filmUrl) => (
                          <CreateLink key={filmUrl} url={filmUrl} />
                        ))}
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("people.fields.mass")}
                      </Typography>
                      <Typography sx={{ fontSize: "14px", color: "#757575" }}>
                        {person?.mass}
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("people.fields.hair_color")}
                      </Typography>
                      <Typography sx={{ fontSize: "14px", color: "#757575" }}>
                        {person?.hair_color}
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("people.fields.skin_color")}
                      </Typography>
                      <Typography sx={{ fontSize: "14px", color: "#757575" }}>
                        {person?.skin_color}
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("people.fields.eye_color")}
                      </Typography>
                      <Typography sx={{ fontSize: "14px", color: "#757575" }}>
                        {person?.eye_color}
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("people.fields.birth_year")}
                      </Typography>
                      <Typography sx={{ fontSize: "14px", color: "#757575" }}>
                        {person?.birth_year}
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("people.fields.gender")}
                      </Typography>
                      <Typography sx={{ fontSize: "14px", color: "#757575" }}>
                        {person?.gender}
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>

                {/* ==================================================================== */}

                <Grid item paddingX={4} xs={12} md={4}>
                  aa
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      )}
    </Show>
  );
};
