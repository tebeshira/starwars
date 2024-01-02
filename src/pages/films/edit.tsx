import React from "react";
import axios from "axios";
import InputMask from "react-input-mask";
import {
  IResourceComponentsProps,
  useTranslate,
  useApiUrl,
  HttpError,
} from "@refinedev/core";
import { Edit, SaveButton, useAutocomplete } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { Controller } from "react-hook-form";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Step from "@mui/material/Step";
import Stepper from "@mui/material/Stepper";
import StepButton from "@mui/material/StepButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Autocomplete from "@mui/material/Autocomplete";
import Input from "@mui/material/Input";
import type { TextFieldProps } from "@mui/material/TextField";

import { IPeople, IFile, IStore, Nullable } from "../../interfaces";

export const FilmsEdit: React.FC<IResourceComponentsProps> = () => {
  const t = useTranslate();

  const apiUrl = useApiUrl();

  const {
    refineCore: { onFinish, formLoading },
    control,
    watch,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IPeople, HttpError, Nullable<IPeople>>({
    warnWhenUnsavedChanges: true,
  });

  // const imageInput = watch("avatar");

  const onChangeHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const formData = new FormData();

    const target = event.target;
    const file: File = (target.files as FileList)[0];

    formData.append("file", file);

    const res = await axios.post<{ url: string }>(
      `${apiUrl}/media/upload`,
      formData,
      {
        withCredentials: false,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  };

  console.log(useForm());

  const renderForm = () => (
    <Grid
      container
      sx={{
        marginX: { xs: "0px" },
      }}
    >
      <Grid item xs={12} md={4}>
        <Stack gap={1} justifyContent="center" alignItems="center">
          <label htmlFor="avatar-input">
            <Input
              id="avatar-input"
              type="file"
              sx={{
                display: "none",
              }}
              onChange={onChangeHandler}
            />
            <input id="file" type="hidden" />
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
            <Stack gap="24px">
              <FormControl>
                <FormLabel
                  required
                  sx={{
                    marginBottom: "8px",
                    fontWeight: "700",
                    fontSize: "14px",
                    color: "text.primary",
                  }}
                >
                  {t("couriers.fields.name")}
                </FormLabel>
                <TextField
                  {...register("name", {
                    required: t("errors.required.field", {
                      field: "Name",
                    }),
                  })}
                  size="small"
                  margin="none"
                  variant="outlined"
                />
                {errors.name && (
                  <FormHelperText error>{errors.name.message}</FormHelperText>
                )}
              </FormControl>
            </Stack>
          </Grid>
          <Grid item paddingX={4} xs={12} md={6}>
            <Stack gap="24px">
              <FormControl>
                <FormLabel
                  required
                  sx={{
                    marginBottom: "8px",
                    fontWeight: "700",
                    fontSize: "14px",
                    color: "text.primary",
                  }}
                >
                  {t("people.fields.homeworld")}
                </FormLabel>
                <TextField
                  {...register("homeworld", {
                    required: t("errors.required.field", {
                      field: "Planet",
                    }),
                  })}
                  size="small"
                  margin="none"
                  variant="outlined"
                />
                {errors.homeworld && (
                  <FormHelperText error>
                    {errors.homeworld.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Edit
      title={<Typography variant="h5">{t("films.titles.edit")}</Typography>}
      isLoading={formLoading}
      footerButtons={<SaveButton onClick={handleSubmit(onFinish)} />}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
        autoComplete="off"
      >
        {renderForm()}
      </Box>
    </Edit>
  );
};
