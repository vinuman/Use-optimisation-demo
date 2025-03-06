import { LikeButton } from "./OptimisedLike";
import { LikeButton2 } from "./NormalLike";

export default function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          padding: "20px",
          width: "100vw",
          height: "100vh",
        }}
      >
        <LikeButton />
        <LikeButton2 />
      </div>
    </>
  );
}
