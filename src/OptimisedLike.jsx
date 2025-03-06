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
    if (isPending) return;
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
    <div>
      <p style={{ fontSize: "24px" }}>Optimised</p>
      <button style={style} onClick={handleLike}>
        {optimisticLiked ? "Liked" : "Like"}
      </button>
    </div>
  );
}
