import AddShoppingCartOutlined from "@mui/icons-material/AddShoppingCartOutlined";
import StarBorderOutlined from "@mui/icons-material/StarBorderOutlined";
import CategoryOutlined from "@mui/icons-material/CategoryOutlined";
import StoreOutlined from "@mui/icons-material/StoreOutlined";
import LocalPizzaOutlined from "@mui/icons-material/LocalPizzaOutlined";
import PeopleOutlineOutlined from "@mui/icons-material/PeopleOutlineOutlined";
import Dashboard from "@mui/icons-material/Dashboard";
import { BikeWhiteIcon } from "./components/icons/bike-white";
import Man2Icon from "@mui/icons-material/Man2";

export const resources = [
  {
    name: "dashboard",
    list: "/",
    meta: {
      label: "Dashboard",
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
      label: "People",
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
      label: "Favorites",
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
      label: "Films",
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
      label: "Planets",
      icon: <Man2Icon />,
    },
  },
];
