export const getStyle = (liked) => {
  return {
    background: liked ? "blue" : "gray",
    color: liked ? "white" : "black",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "150px",
    height: "64px",
    fontSize: "24px",
  };
};
