import SearchOutlined from "@mui/icons-material/SearchOutlined";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import React, { useState, useContext, useEffect } from "react";
import { HttpError, useTranslate } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";
import { SearchContext } from "../contexts/SearchContextProvider";
import { IPeople } from "../interfaces";

type Props = {
  setCurentPage: (value: number, searchedValue: string) => void;
};

export function Search({ setCurentPage }: Props) {
  const [searchValue, setSearchValue] = useState("");

  const { state } = useContext(SearchContext);

  const t = useTranslate();

  useEffect(() => {
    if (state.searchPeople) {
      setSearchValue(state.searchPeople);
    }
  }, []);

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  function handleSearchSubmit(event: React.FormEvent) {
    event.preventDefault();
    setCurentPage(1, searchValue);
  }

  return (
    <form onSubmit={handleSearchSubmit}>
      <Box position="relative" paddingBottom={3}>
        <TextField
          label="Search"
          fullWidth
          onChange={handleSearchChange}
          value={searchValue || ""}
        />
        <IconButton
          type="submit"
          sx={{
            position: "absolute",
            right: 0,
            top: 10,
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <SearchOutlined />
        </IconButton>
      </Box>
    </form>
  );
}
