import { useState } from "react";

export function LikeButton2() {
  const [liked, setLiked] = useState(false);
  const [isPending, setIsPending] = useState(false);

  async function handleLike() {
    setIsPending(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLiked((prev) => !prev); // Toggle liked state
    } catch (error) {
      console.error("Like action failed", error);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <button
      onClick={handleLike}
      disabled={isPending}
      style={{
        background: liked ? "blue" : "gray",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        opacity: isPending ? 0.5 : 1,
      }}
    >
      {liked ? "Liked" : "Like"}
    </button>
  );
}
