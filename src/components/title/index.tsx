import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

type TitleProps = {
  collapsed: boolean;
};

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  return (
    <Link to="/">
      <Box
        component="img"
        sx={{
          height: "auto",
          maxWidth: "100%",
          display: "flex",
          maxHeight: "50px",
          color: "text.primary",
        }}
        src={"../../images/star_wars_logo.png"}
        alt=""
      ></Box>
    </Link>
  );
};
