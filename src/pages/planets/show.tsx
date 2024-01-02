import React, { useState } from "react";
import {
  IResourceComponentsProps,
  useShow,
  useTranslate,
  useLink,
} from "@refinedev/core";

import { Show } from "@refinedev/mui";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import Typography from "@mui/material/Typography";

import { IPlanet } from "../../interfaces";

import { Spinner } from "../../components/Spinner";
import { CreateLink } from "../../components/CreateLink";

export const PlanetsShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const { queryResult } = useShow<IPlanet>();

  const Link = useLink();

  const planet = queryResult.data?.data;

  return (
    <Show title={<Typography variant="h5">{planet?.name}</Typography>}>
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
                  {t("planets.fields.images.description")}
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
                <Grid item paddingX={4} xs={12} md={3}>
                  <Stack spacing={2}>
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("planets.fields.name")}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#757575",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {planet?.name}
                      </Typography>
                    </Stack>

                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("planets.fields.population")}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#757575",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {planet?.population}
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("planets.fields.climate")}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#757575",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {planet?.climate}
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("planets.fields.gravity")}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#757575",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {planet?.gravity}
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("planets.fields.terrain")}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#757575",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {planet?.terrain}
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>

                {/* ==================================================================== */}

                <Grid item paddingX={4} xs={12} md={5}>
                  <Stack spacing={2}>
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("planets.fields.rotation_period")}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#757575",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {planet?.rotation_period}
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("planets.fields.orbital_period")}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#757575",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {planet?.orbital_period}
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("planets.fields.diameter")}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#757575",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {planet?.diameter}
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("planets.fields.surface_water")}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#757575",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {planet?.surface_water}
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("planets.fields.films")}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#757575",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {planet?.films.length
                          ? (planet?.films as []).map((filmUrl) => (
                              <CreateLink key={filmUrl} url={filmUrl} />
                            ))
                          : 0}
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
                        {t("planets.fields.residents")}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#757575",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {planet?.residents.length
                          ? (planet?.residents as []).map((filmUrl) => (
                              <CreateLink key={filmUrl} url={filmUrl} />
                            ))
                          : 0}
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      )}
    </Show>
  );
};
