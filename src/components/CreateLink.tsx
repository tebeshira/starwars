import { useEffect, useState } from "react";
import { HttpError, useLink, useOne } from "@refinedev/core";

import { SmallSpinner } from "../components/SmallSpinner";

import { IPeople, IFilm } from "../interfaces";
import { getItemIdFromUrlProp, getItemResourceFromUrlProp } from "../helpers";

type Props = { url: string };
export const CreateLink = ({ url }: Props) => {
  const Link = useLink();

  const [id, setId] = useState<number | undefined>();
  const [resource, setResource] = useState("people");

  const { data, status } = useOne<IPeople | IFilm, HttpError>({
    resource,
    id,
  });

  useEffect(() => {
    if (url) {
      setResource(getItemResourceFromUrlProp(url));
      setId(getItemIdFromUrlProp(url));
    }
  }, [url]);

  return (
    <Link className="itemLink" to={`/${resource}/show/${id}`}>
      {status !== "success" ? (
        <SmallSpinner dimension={"10px"} />
      ) : (
        <span
          style={{
            display: "inline-block",
          }}
        >{`${
          (data?.data as IPeople).name || (data?.data as IFilm).title
        }`}</span>
      )}
    </Link>
  );
};
