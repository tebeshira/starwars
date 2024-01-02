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
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import Typography from "@mui/material/Typography";

import { IFilm } from "../../interfaces";

import { Spinner } from "../../components/Spinner";
import { CreateLink } from "../../components/CreateLink";

export const FilmsShow: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();
  const { queryResult } = useShow<IFilm>();

  const Link = useLink();

  const film = queryResult.data?.data;

  return (
    <Show title={<Typography variant="h5">{film?.title}</Typography>}>
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
                  {t("films.fields.images.description")}
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
                        {t("films.fields.release_date")}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#757575",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {film?.title}
                      </Typography>
                    </Stack>

                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("films.fields.director")}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#757575",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {film?.director}
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("films.fields.producer")}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#757575",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {film?.producer}
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("films.fields.episode_id")}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#757575",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {film?.episode_id}
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
                        {t("films.fields.characters")}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {film?.characters.length
                          ? (film?.characters as []).map((filmUrl) => (
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
                        {t("films.fields.species")}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#757575",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {film?.species.length
                          ? (film?.species as []).map((filmUrl) => (
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
                        {t("films.fields.vehicles")}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "#757575",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {film?.vehicles.length
                          ? (film?.vehicles as []).map((filmUrl) => (
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
                        {t("films.fields.starships")}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {film?.starships.length
                          ? (film?.starships as []).map((filmUrl) => (
                              <CreateLink key={filmUrl} url={filmUrl} />
                            ))
                          : 0}
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item paddingX={4} xs={12}>
                  <Stack>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      {t("films.fields.opening_crawl")}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#757575",
                        display: "flex",
                        flexWrap: "wrap",
                      }}
                    >
                      {film?.opening_crawl}
                    </Typography>
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
