import React, { useContext, useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Clear from "@mui/icons-material/Clear";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Favorite from "@mui/icons-material/Favorite";
import {
  useDelete,
  useNavigation,
  useResource,
  useTranslate,
} from "@refinedev/core";
import Edit from "@mui/icons-material/Edit";
import { FavoritesContext } from "../../contexts/FavoritesContextProvider";

const ITEM_HEIGHT = 48;

type Props = {
  resourceOfItem: string;
  id: number;
  item: any;
};

export function OptionsMenu({ resourceOfItem, id, item }: Props) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { resource } = useResource();
  const t = useTranslate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { mutate: mutateDelete } = useDelete();
  const { show, edit } = useNavigation();

  const { favorites, dispatchFavorites } = useContext(FavoritesContext);

  const handleClickAdd = () => {
    dispatchFavorites({
      type: "ADD_FAVORITE_ITEM",
      payload: { resource: resourceOfItem, item },
    });
    handleClose();
  };

  const handleAddClick = () => {
    handleClickAdd();

    handleClose();
  };

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
        <MenuItem onClick={() => show(resourceOfItem, id)}>
          <VisibilityIcon style={{ margin: "0 10px 0 0" }} />{" "}
          {t("options.show")}
        </MenuItem>
        <MenuItem onClick={() => edit(resourceOfItem, id)}>
          <Edit style={{ margin: "0 10px 0 0" }} color="success" />{" "}
          {t("options.edit")}
        </MenuItem>
        {resource?.name !== "favorites" ? (
          <div>
            <MenuItem
              onClick={() => {
                mutateDelete({
                  resource: resourceOfItem,
                  id,
                  mutationMode: "undoable",
                });
              }}
            >
              <Clear style={{ margin: "0 10px 0 0" }} color="error" />
              {t("options.delete")}
            </MenuItem>
            <div onClick={handleAddClick}>
              <MenuItem>
                <Favorite style={{ margin: "0 10px 0 0" }} color="error" />
                {t("options.addFavorites")}
              </MenuItem>
            </div>
          </div>
        ) : (
          ""
        )}
      </Menu>
    </div>
  );
}
