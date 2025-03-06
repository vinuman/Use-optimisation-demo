export const getStyle = (liked) => {
  return {
    background: liked ? "blue" : "gray",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };
};
