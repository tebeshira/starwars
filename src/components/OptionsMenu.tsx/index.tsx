import React, { useContext, useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Clear from "@mui/icons-material/Clear";
import Add from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Favorite from "@mui/icons-material/Favorite";
import { useDelete, useNavigation, useResource } from "@refinedev/core";
import Edit from "@mui/icons-material/Edit";
import { spawn } from "child_process";
import { FavoritesContext } from "../../contexts/FavoritesContextProvider";
import { IPeople } from "../../interfaces";

const ITEM_HEIGHT = 48;

type Props = { resourceOfItem: string; name: string; item: IPeople };

type DinamicObjectOfResources = { [key: string]: IPeople[] };

export function OptionsMenu({ resourceOfItem, name, item }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { resource } = useResource();

  const [removeText, setRemoveText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (resource) {
      if (resource.name === "favorites") {
        setRemoveText("Remove");
      } else {
        setRemoveText("Add to favorites");
      }
    }
  }, []);
  // console.log(resource);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { mutate: mutateDelete } = useDelete();
  const { show, edit } = useNavigation();

  const { favorites, dispatchFavorites } = useContext(FavoritesContext);

  //   const options = [
  //     {
  //       icon: <VisibilityIcon style={{ margin: "0 10px 0 0" }} />,
  //       text: "Show",
  //     },
  //     {
  //       icon: <Edit color="error" style={{ margin: "0 10px 0 0" }} />,
  //       text: "Edit",
  //     },

  //     {
  //       icon: <Clear color="success" style={{ margin: "0 10px 0 0" }} />,
  //       text: "Delete",
  //     },
  //     {
  //       icon: <Favorite color="error" style={{ margin: "0 10px 0 0" }} />,
  //       text: "Add to Favorites",
  //     },
  //   ];

  const handleClickAdd = () => {
    dispatchFavorites({ type: "ADD_FAVORITE_PEOPLE", payload: item });
    handleClose();
  };

  console.log(item);

  const handleAddOrRemoveClick = () => {
    if (resource) {
      if (resource.name !== "favorites") {
        handleClickAdd();
      } else {
        setCount((prev) => prev + 1);

        dispatchFavorites({
          type: "REMOVE_FAVORITE_ITEM",
          payload: { resource: resourceOfItem, item },
        });
        handleClose();
      }
    }
  };

  useEffect(() => {
    console.log("count: ", count);
  }, [count]);

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {/* {options.map((option, i) => (
          <MenuItem key={i} onClick={handleClose}>
            {option.icon} {option.text}
          </MenuItem>
        ))} */}

        <MenuItem onClick={() => show(resourceOfItem, name)}>
          <VisibilityIcon style={{ margin: "0 10px 0 0" }} /> Show
        </MenuItem>
        <MenuItem onClick={() => edit(resourceOfItem, name)}>
          <Edit style={{ margin: "0 10px 0 0" }} color="success" /> Edit
        </MenuItem>
        {resource?.name !== "favorites" ? (
          <MenuItem
            onClick={() => {
              mutateDelete({
                resource: resourceOfItem,
                id: name,
                mutationMode: "undoable",
              });
            }}
          >
            <Clear style={{ margin: "0 10px 0 0" }} color="error" />
            Delete
          </MenuItem>
        ) : (
          ""
        )}
        <div onClick={handleAddOrRemoveClick}>
          <MenuItem>
            <Favorite style={{ margin: "0 10px 0 0" }} color="error" />
            {removeText}
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
}
