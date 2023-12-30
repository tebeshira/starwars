import React from "react";

type Props = {
  position: "static" | "relative" | "absolute" | "sticky" | "fixed";
};

export const Spinner = ({ position }: Props) => {
  return (
    <div className="overlay">
      <div className="overlay__inner" style={{ position }}>
        <div className="overlay__content">
          <span className="spinner"></span>
        </div>
      </div>
    </div>
  );
};
