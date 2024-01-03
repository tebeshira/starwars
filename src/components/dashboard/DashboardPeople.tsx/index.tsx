import { useList, useTranslate, HttpError } from "@refinedev/core";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { SmallSpinner } from "../../SmallSpinner";

import { IPeople } from "../../../interfaces";

export const DashboardPeople: React.FC = () => {
  const t = useTranslate();

  const { data, isLoading, isError } = useList<IPeople, HttpError>({
    resource: "people",
  });

  if (isLoading) {
    return <SmallSpinner dimension={"30px"} />;
  }

  return (
    <Stack
      justifyContent="space-between"
      sx={{
        height: "230px",
        p: 1,
        background: "url(images/people.jpeg)",
        backgroundColor: "#332a4b",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" sx={{ color: "#fff", fontWeight: 700, mb: 0 }}>
          {t("people.titles.list")}
        </Typography>

        <Stack direction="row" alignItems="center">
          <Typography sx={{ fontWeight: 700, fontSize: 24, color: "#fff" }}>
            {data?.total ?? 0}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
