import {
  createContext,
  PropsWithChildren,
  SetStateAction,
  Dispatch,
  useEffect,
  useReducer,
} from "react";

import { useResource } from "@refinedev/core";

interface ISearchContext {
  searchState: InitialState;
  dispatch: Dispatch<Action>;
}

type Action = {
  type: string;
  payload: string;
};

type InitialState = {
  [key: string]: string;
};

const initialState = { people: "", films: "", planets: "" };

export const SearchContext = createContext<ISearchContext>(
  {} as ISearchContext
);
// the component ensures persistence of the search state between the pages of each resource
export const SearchContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const { resource } = useResource();

  const reducer = (state: InitialState, action: Action) => {
    switch (action.type) {
      case `SEARCH_${resource?.name}`:
        return {
          ...state,
          [resource?.name as string]: action.payload,
        };
      case `SEARCH_CLEAR`:
        return {
          ...state,
          ...initialState,
        };

      default:
        return state;
    }
  };

  const [searchState, dispatch] = useReducer(reducer, initialState);

  const value = { searchState, dispatch };

  useEffect(() => {
    if (resource) {
      // If resource is changed we do not need its search state anymore. New state will be created on new search for the new resource
      dispatch({ type: `SEARCH_CLEAR`, payload: "" });
    }
  }, [resource]);

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
