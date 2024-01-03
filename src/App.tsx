import { Suspense, lazy } from "react";

import { DevtoolsProvider, DevtoolsPanel } from "@refinedev/devtools";
import { Refine } from "@refinedev/core";
import { KBarProvider } from "@refinedev/kbar";
import {
  ErrorComponent,
  notificationProvider,
  ThemedLayoutV2,
  RefineSnackbarProvider,
} from "@refinedev/mui";
import GlobalStyles from "@mui/material/GlobalStyles";
import CssBaseline from "@mui/material/CssBaseline";
import dataProvider from "@refinedev/simple-rest";
import { dataProvider_SWAPI } from "../dataProvider_SWAPI";

import routerProvider, {
  UnsavedChangesNotifier,
  DocumentTitleHandler,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Dashboard from "@mui/icons-material/Dashboard";
import Man2Icon from "@mui/icons-material/Man2";

import { resources } from "./resources";

import { DashboardPage } from "./pages/dashboard";

import {
  PeopleList,
  PeopleShow,
  PeopleCreate,
  PeopleEdit,
} from "./pages/people";
import {
  PlanetsList,
  PlanetsShow,
  PlanetsCreate,
  PlanetsEdit,
} from "./pages/planets";
import { CurrencyCalculator } from "./pages/currencyCalculator";
import { FavoritesList } from "./pages/favorites";
import { FilmsList, FilmsShow, FilmsCreate, FilmsEdit } from "./pages/films";

import { ColorModeContextProvider } from "./contexts";
import { SearchContextProvider } from "./contexts/SearchContextProvider";
import { FavoritesContextProvider } from "./contexts/FavoritesContextProvider";

import { Header, Title } from "./components";
import "./styles/main.css";

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  console.log(i18nProvider);

  return (
    <BrowserRouter>
      <KBarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
          <RefineSnackbarProvider>
            <DevtoolsProvider>
              <Refine
                routerProvider={routerProvider}
                dataProvider={dataProvider_SWAPI}
                // dataProvider={dataProvider("https://api.finefoods.refine.dev")}
                i18nProvider={i18nProvider}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  projectId: "8igF52-dcZVLk-wSfwZl",
                }}
                notificationProvider={notificationProvider}
                resources={[
                  {
                    name: "dashboard",
                    list: "/",
                    meta: {
                      label: t("dashboard.title"),
                      icon: <Dashboard />,
                    },
                  },
                  {
                    name: "people",
                    list: "/people",
                    create: "/people/create",
                    edit: "/people/edit/:id",
                    show: "/people/show/:id",
                    meta: {
                      label: t("people.titles.list"),
                      icon: <Man2Icon />,
                    },
                  },
                  {
                    name: "favorites",
                    list: "/favorites",
                    // create: "/people/create",
                    // edit: "/people/edit/:id",
                    // show: "/people/show/:id",
                    meta: {
                      label: t("favorites.titles.list"),
                      icon: <Man2Icon />,
                    },
                  },
                  {
                    name: "films",
                    list: "/films",
                    create: "/films/create",
                    edit: "/films/edit/:id",
                    show: "/films/show/:id",
                    meta: {
                      label: t("films.titles.list"),
                      icon: <Man2Icon />,
                    },
                  },
                  {
                    name: "planets",
                    list: "/planets",
                    create: "/planets/create",
                    edit: "/planets/edit/:id",
                    show: "/planets/show/:id",
                    meta: {
                      label: t("planets.titles.list"),
                      icon: <Man2Icon />,
                    },
                  },
                  {
                    name: "currencyCalculator",
                    list: "/currency-calculator",
                    meta: {
                      label: t("calculator.title"),
                      icon: <Dashboard />,
                    },
                  },
                ]}
              >
                <Routes>
                  <Route
                    element={
                      <ThemedLayoutV2 Header={Header} Title={Title}>
                        <SearchContextProvider>
                          <FavoritesContextProvider>
                            <Outlet />
                          </FavoritesContextProvider>
                        </SearchContextProvider>
                      </ThemedLayoutV2>
                    }
                  >
                    <Route index element={<DashboardPage />} />
                    <Route path="/people">
                      <Route index element={<PeopleList />} />
                      <Route path="create" element={<PeopleCreate />} />
                      <Route path="edit/:id" element={<PeopleEdit />} />
                      <Route path="show/:id" element={<PeopleShow />} />
                    </Route>
                    <Route path="/favorites">
                      <Route index element={<FavoritesList />} />
                    </Route>
                    <Route path="/films">
                      <Route index element={<FilmsList />} />
                      <Route path="create" element={<FilmsCreate />} />
                      <Route path="edit/:id" element={<FilmsEdit />} />
                      <Route path="show/:id" element={<FilmsShow />} />
                    </Route>
                    <Route path="/planets">
                      <Route index element={<PlanetsList />} />
                      <Route path="create" element={<PlanetsCreate />} />
                      <Route path="edit/:id" element={<PlanetsEdit />} />
                      <Route path="show/:id" element={<PlanetsShow />} />
                    </Route>
                    <Route
                      index
                      path="/currency-calculator"
                      element={<CurrencyCalculator />}
                    />
                  </Route>

                  <Route path="*" element={<ErrorComponent />} />
                </Routes>

                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </KBarProvider>
    </BrowserRouter>
  );
};

export default App;
