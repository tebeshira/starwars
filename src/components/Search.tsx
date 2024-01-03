import SearchOutlined from "@mui/icons-material/SearchOutlined";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import React, { useState, useContext, useEffect } from "react";
import { useTranslate, useResource } from "@refinedev/core";
import { SearchContext } from "../contexts/SearchContextProvider";

type Props = {
  setCurentPage: (value: number, searchedValue: string) => void;
};

export function Search({ setCurentPage }: Props) {
  const [searchValue, setSearchValue] = useState("");

  const { searchState } = useContext(SearchContext);
  const { resource } = useResource();

  const t = useTranslate();

  useEffect(() => {
    // sets last searched values for the resorce )
    if (resource && searchState[resource.name]) {
      setSearchValue(searchState[resource.name]);
    }
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // 1 ensures that every new search will give the results for the 1 page (see getList() in dataprovider_SWAPI)
    // searchValue ensures search value persistance in the same resource
    setCurentPage(1, searchValue);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <Box position="relative" paddingBottom={3}>
        <TextField
          label={t("search.placeholder")}
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
