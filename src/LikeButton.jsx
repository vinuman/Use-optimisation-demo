import { useOptimistic, useState, useTransition } from "react";
import { getStyle } from "./utils";

export function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [isPending, startTransition] = useTransition();

  const [optimisticLiked, toggleOptimisticLike] = useOptimistic(
    liked,
    (currentLiked) => !currentLiked
  );

  async function handleLike() {
    toggleOptimisticLike(); // Instantly update UI

    startTransition(async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
        setLiked((prev) => !prev); // Confirm state change
      } catch (error) {
        console.error("Like action failed", error);
        setLiked((prev) => prev); // Revert if mutation fails
      }
    });
  }

  const style = getStyle(optimisticLiked);

  return (
    <button onClick={handleLike} style={style}>
      {optimisticLiked ? "Liked" : "Like"}
    </button>
  );
}
