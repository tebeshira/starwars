import {
  createContext,
  PropsWithChildren,
  SetStateAction,
  Dispatch,
  useEffect,
  useReducer,
} from "react";
import { IPeople, IFilm, IPlanet } from "../interfaces";
import { AnyAaaaRecord } from "dns";

interface IFavoritesContext {
  favorites: InitialState;
  dispatchFavorites: Dispatch<Action>;
}

type Action = {
  type: string;
  payload?: {
    resource: string;
    item: any;
  };
};

// type InitialState = { [key: string]: any[] };

type InitialState = Record<string, any[]>;

export const FavoritesContext = createContext<IFavoritesContext>(
  {} as IFavoritesContext
);

// the componentt is managing and cahing the favorites state from the localstorage
// as there is no data base to ensure persistence of the favorite items
export const FavoritesContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const storage = JSON.parse(localStorage.getItem("favorites") as any);

  let favoritesStorage: InitialState = storage || {
    people: [],
    films: [],
    planets: [],
  };
  const reducer = (state: InitialState, action: Action) => {
    switch (action.type) {
      case "ADD_FAVORITE_ITEM":
        if (action.payload) {
          const resource = action.payload.resource;
          //  favoritesStorage[resource] ensures the manipulation of the right resource
          //  in localstorage favorites object (people, films, planets etc.)
          if (
            !favoritesStorage[resource]?.some(
              (item) => item.url === action.payload?.item.url
            )
          ) {
            favoritesStorage[resource].push(action.payload.item);
          }
          localStorage.setItem("favorites", JSON.stringify(favoritesStorage));
          return { ...state, [resource]: favoritesStorage[resource] };
        }

      case "GET_ALL_FAVORITES":
        if (favoritesStorage) {
          return { ...state, ...favoritesStorage };
        }

      case "REMOVE_ALL_FAVORITES":
        localStorage.removeItem("favorites");
        favoritesStorage = { people: [], films: [], planets: [] };
        return { ...state, ...favoritesStorage };

      // case "REMOVE_FAVORITE_ITEM":
      //   if (action.payload) {
      //     const resource = action.payload.resource;

      //     if (favoritesStorage[resource]) {
      //       console.log(action.payload);
      //       const itemToRemove = action.payload.item;

      //       const index = favoritesStorage[resource].findIndex(
      //         (item) => item.url === itemToRemove.url
      //       );

      //       const newStorage = favoritesStorage[resource].toSpliced(index, 1);

      //       localStorage.setItem("favorites", JSON.stringify(newStorage));
      //       return {
      //         ...state,
      //         ...favoritesStorage,
      //       };
      //     }
      //   }

      default:
        return state;
    }
  };

  const [favorites, dispatchFavorites] = useReducer(reducer, {
    people: [],
    films: [],
    planets: [],
  });

  const value = { favorites, dispatchFavorites };

  console.log("FAVORITESContext is rendered");

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
