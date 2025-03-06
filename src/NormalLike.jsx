import { useState } from "react";
import { getStyle } from "./utils";

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

  const style = getStyle(liked);

  return (
    <div>
      <p style={{ fontSize: "24px" }}>Normal</p>
      <button onClick={handleLike} disabled={isPending} style={style}>
        {liked ? "Liked" : "Like"}
      </button>
    </div>
  );
}
