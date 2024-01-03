type Props = {
  dimension: string;
};
export const SmallSpinner = ({ dimension }: Props) => {
  return (
    <div
      className="overlay small"
      style={{
        width: dimension,
        height: dimension,
        background: "transparent",
        marginLeft: "calc(50% - dimensions)",
        position: "static",
      }}
    >
      <div
        className="overlay__inner"
        style={{ width: dimension, height: dimension }}
      >
        <div
          className="overlay__content"
          style={{
            width: dimension,
            height: dimension,
          }}
        >
          <span
            className="spinner"
            style={{
              width: dimension,
              height: dimension,
              borderColor: "gray",
              borderTopColor: "#fff",
            }}
          ></span>
        </div>
      </div>
    </div>
  );
};
