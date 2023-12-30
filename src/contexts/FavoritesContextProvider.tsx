import {
  createContext,
  PropsWithChildren,
  SetStateAction,
  Dispatch,
  useEffect,
  useReducer,
} from "react";
import { IPeople, IUser } from "../interfaces";

interface IFavoritesContext {
  favorites: InitialState;
  dispatchFavorites: Dispatch<Action>;
}

// type DinamicObjectOfResourcesArrays =
//   {[key: string]: IPeople[] }

type DinamicObject = { [key: string]: IPeople[] };

type ActionAdd = {
  type: string;
  payload: IPeople;
};

type ActionGetAll = {
  type: string;
  payload?: IPeople[];
};

type ActionRemove = {
  type: string;
  payload: {
    resource: string;
    item: { name: string };
  };
};

type Action = ActionAdd | ActionGetAll | ActionRemove;

type InitialState = DinamicObject;

const initialState = { people: [] };

export const FavoritesContext = createContext<IFavoritesContext>(
  {} as IFavoritesContext
);

// localStorage.setItem("favorites", JSON.stringify(favorites));

// JSON.parse(localStorage.getItem("favorites") || "[]");

export const FavoritesContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const reducer = (state: InitialState, action: Action) => {
    // localStorage.removeItem("favorites");
    const favorites: InitialState =
      JSON.parse(localStorage.getItem("favorites") as string) || initialState;

    switch (action.type) {
      // SEARCH_... actions guarantee the persistence of the searched field and items while navigating to other pages ( show, edit, create etc.)

      case "ADD_FAVORITE_PEOPLE":
        // const filtered = favorites.people.filter((person) => word.length > 6);
        const personToAdd = (action as ActionAdd).payload;
        if (
          !favorites.people.some((person) => person.name === personToAdd.name)
        ) {
          favorites.people.push(personToAdd);
        }
        localStorage.setItem("favorites", JSON.stringify(favorites));
        return { ...state, people: favorites.people };

      case "GET_ALL_FAVORITES":
        return { ...state, people: favorites.people };

      case "REMOVE_FAVORITE_ITEM":
        const resource = (action as ActionRemove).payload.resource;
        const item = (action as ActionRemove).payload.item;
        const itemToRemoveName = item.name;
        // const index = favorites[resource]?.findIndex(
        //   (item) => item.name === itemToRemoveName
        // );

        console.log(favorites[resource]);

        const newFavorites = favorites[resource].filter(
          (item) => item.name !== itemToRemoveName
        );

        localStorage.setItem("favorites", JSON.stringify(newFavorites));

        return {
          ...state,
          [resource]: newFavorites,
        };

      default:
        return state;
    }
  };

  const [favorites, dispatchFavorites] = useReducer(reducer, initialState);

  const value = { favorites, dispatchFavorites };

  console.log("FAVORITESContext is rendered");

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
