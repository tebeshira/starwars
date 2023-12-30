import React, { useEffect, useState } from "react";
import {
  HttpError,
  IResourceComponentsProps,
  useShow,
  useTranslate,
  useLink,
  useOne,
  useMany,
} from "@refinedev/core";

import { IPeople } from "../interfaces";
import { getItemIdFromUrlProp, getItemResourceFromUrlProp } from "../helpers";

type Props = { url: string };
export const CreateLink = ({ url }: Props) => {
  const Link = useLink();

  const [id, setId] = useState<number | undefined>();
  const [resource, setResource] = useState("people");

  const { data, isLoading, isError } = useOne<IPeople, HttpError>({
    resource: "people",
    id,
  });

  useEffect(() => {
    if (url) {
      // setResource(getItemResourceFromUrlProp(url));
      setId(getItemIdFromUrlProp(url));
    }
  }, [url]);
  //================================================

  //   function createLinks(urls: string[]) {
  //     return urls.map((url) => {
  //       const id = getItemIdFromUrlProp(url);
  //       const resource = getItemResourceFromUrlProp(url);

  //       console.log(resource);
  //       return (
  //         <Link to={`/${resource}/${id}`}>
  //           <span className="inlineLink">{`${data?.data.name}`}</span>
  //         </Link>
  //       );
  //     });
  //   }

  <div className="overlay">
    <div className="overlay__inner">
      <div className="overlay__content">
        <span className="spinner"></span>
      </div>
    </div>
  </div>;

  return (
    <Link to={`/${resource}/show/${id}`} style={{ position: "relative" }}>
      {isLoading ? (
        <div className="overlay">
          <div className="overlay__inner">
            <div className="overlay__content">
              <span className="spinner"></span>
            </div>
          </div>
        </div>
      ) : (
        <span className="inlineLink">{`${data?.data.name}`}</span>
      )}

      {/* <div className="overlay small" style={{ width: "10px", height: "10px" }}>
        <div
          className="overlay__inner"
          style={{ width: "10px", height: "10px" }}
        >
          <div
            className="overlay__content"
            style={{ width: "10px", height: "10px" }}
          >
            <span
              className="spinner"
              style={{ width: "10px", height: "10px" }}
            ></span>
          </div>
        </div>
      </div> */}
    </Link>
  );
};
