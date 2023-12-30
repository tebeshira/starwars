import {
  createContext,
  PropsWithChildren,
  SetStateAction,
  Dispatch,
  useEffect,
  useReducer,
} from "react";

import { useLocation } from "react-router-dom";
import { useResource } from "@refinedev/core";
import { IPeople } from "../interfaces";

interface ISearchContext {
  state: { searchPeople: string };
  dispatch: Dispatch<Action>;
}

type Action = {
  type: string;
  payload: string;
};

type InitialState = { searchPeople: string };

const initialState = { searchPeople: "" };

export const SearchContext = createContext<ISearchContext>(
  {} as ISearchContext
);

export const SearchContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const reducer = (state: InitialState, action: Action) => {
    switch (action.type) {
      // SEARCH_... actions guarantee the persistence of the searched field and items while navigating to other pages ( show, edit, create etc.)
      case "SEARCH_PEOPLE":
        return { ...state, searchPeople: action.payload };

      case "ADD_FAVORITE_PEOPLE":
        return { ...state, searchPeople: action.payload };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  console.log("searchContext is rendered");
  const { resource } = useResource();

  useEffect(() => {
    if (resource) {
      if (resource?.name !== "people" && state.searchPeople) {
        dispatch({ type: "SEARCH_PEOPLE", payload: "" });
      }
    }
  }, [resource]);

  console.log(resource);

  console.log(value);
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
