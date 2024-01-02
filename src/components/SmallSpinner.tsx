export const SmallSpinner = () => {
  return (
    <div
      className="overlay small"
      style={{
        width: "10px",
        height: "10px",
        background: "transparent",
        marginLeft: "calc(50% - 10px)",
      }}
    >
      <div className="overlay__inner" style={{ width: "10px", height: "10px" }}>
        <div
          className="overlay__content"
          style={{
            width: "10px",
            height: "10px",
          }}
        >
          <span
            className="spinner"
            style={{
              width: "10px",
              height: "10px",
              borderColor: "gray",
              borderTopColor: "#fff",
            }}
          ></span>
        </div>
      </div>
    </div>
  );
};
