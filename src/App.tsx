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
import { FavoritesList } from "./pages/favorites";
import { FilmsList, FilmsShow, FilmsCreate, FilmsEdit } from "./pages/films";

import { ColorModeContextProvider } from "./contexts";
import { SearchContextProvider } from "./contexts/SearchContextProvider";
import { FavoritesContextProvider } from "./contexts/FavoritesContextProvider";

import { Header, Title, OffLayoutArea } from "./components";
// import { useAutoLoginForDemo } from "./hooks";
import { Spinner } from "./components/Spinner";
import "./styles/main.css";

export const API_URL = "https://api.finefoods.refine.dev";
// export const API_URL = "https://swapi.dev/api";

const App: React.FC = () => {
  // This hook is used to automatically login the user.
  // We use this hook to skip the login page and demonstrate the application more quickly.
  // const { loading } = useAutoLoginForDemo();

  const { t, i18n } = useTranslation();
  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  // if (loading) {
  //   return <Spinner position="fixed" />;
  // }

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
                // authProvider={authProvider}
                i18nProvider={i18nProvider}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  projectId: "8igF52-dcZVLk-wSfwZl",
                }}
                notificationProvider={notificationProvider}
                resources={resources}
              >
                <Suspense fallback={<Spinner position="fixed" />}>
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
                    </Route>

                    <Route path="*" element={<ErrorComponent />} />
                  </Routes>
                </Suspense>

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
