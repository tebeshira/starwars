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

import { IPeople } from "../../interfaces";

import { Spinner } from "../../components/Spinner";
import { CreateLink } from "../../components/CreateLink";

export const PeopleShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const [ids, setIds] = useState<string[] | number[]>([]);
  const { queryResult } = useShow<IPeople>();

  const Link = useLink();

  const person = queryResult.data?.data;

  return (
    <Show title={<Typography variant="h5">{person?.name}</Typography>}>
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
                <Grid item paddingX={4} xs={12} md={3}>
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

                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#757575",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
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
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#757575",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
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
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#757575",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
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
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#757575",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
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
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#757575",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {person?.skin_color}
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
                        {t("people.fields.eye_color")}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#757575",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
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
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#757575",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
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
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#757575",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {person?.gender}
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("people.fields.homeworld")}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#757575",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        <CreateLink
                          key={person?.homeworld}
                          url={person?.homeworld as string}
                        />
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
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#757575",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {person?.films.length
                          ? (person?.films as []).map((filmUrl) => (
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
                        {t("people.fields.species")}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#757575",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {person?.species.length
                          ? (person?.species as []).map((filmUrl) => (
                              <CreateLink key={filmUrl} url={filmUrl} />
                            ))
                          : 0}
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("people.fields.vehicles")}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#757575",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {person?.vehicles.length
                          ? (person?.vehicles as []).map((filmUrl) => (
                              <CreateLink key={filmUrl} url={filmUrl} />
                            ))
                          : 0}
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("people.fields.starships")}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#757575",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {person?.starships.length
                          ? (person?.starships as []).map((filmUrl) => (
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
