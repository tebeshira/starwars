import dataProvider from "@refinedev/simple-rest";
import { DataProvider } from "@refinedev/core";
// import { API_URL } from "./src/App";
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
  // update: async ({ resource, id, variables }) => {
  //   const url = `${API_URL}/${resource}/${id}`;

  //   const { data } = await httpClient.put(url, variables);

  //   return {
  //     data,
  //   };
  // },

  getList: async ({ resource, pagination, sorters, meta }) => {
    console.log(pagination);
    // console.log(pagination);
    // if (pagination) {
    //   pagination.mode = "client";
    // }
    // console.log(pagination);
    let url = "";
    console.log(meta);
    if (meta?.searchValue) {
      url = `${API_URL}/${resource}/?search=${meta.searchValue}&page=${pagination?.current}`;
    } else {
      url = `${API_URL}/${resource}/?page=${pagination?.current}`;
    }

    const { data } = await axios.get(url);

    // console.log(meta);
    console.log(data);

    return {
      data: data.results,
      // data: data,

      total: data.count,
    };
  },
};
