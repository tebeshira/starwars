import dataProvider from "@refinedev/simple-rest";
import { DataProvider } from "@refinedev/core";
import axios from "axios";

export const API_URL = "https://swapi.dev/api";

interface IGetListParams {
  resource: string;
  pagination: Pagination | undefined;
}

type Pagination = {
  current?: number; // Initial page index
  pageSize?: number; // Initial number of items per page
  mode?: "client" | "server" | "off"; // Whether to use server side pagination or not.
};

const simpleRestProvider = dataProvider(API_URL);
export const dataProvider_SWAPI: DataProvider = {
  ...simpleRestProvider,

  getList: async ({ resource, pagination, sorters, meta }) => {
    let url = "";
    if (meta?.searchValue) {
      url = `${API_URL}/${resource}/?search=${meta.searchValue}&page=${pagination?.current}`;
    } else {
      url = `${API_URL}/${resource}/?page=${pagination?.current}`;
    }

    const { data } = await axios.get(url);

    return {
      data: data.results,
      // data: data,

      total: data.count,
    };
  },
};
