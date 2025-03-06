import { useState } from "react";

import { LikeButton } from "./LikeButton";
import { LikeButton2 } from "./LikeButton2";

function Thread({ messages, sendMessage }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          padding: "20px",
          width: "100%",
          height: "100%",
          border: "1px solid red",
        }}
      >
        <LikeButton />
        <LikeButton2 />
      </div>
    </>
  );
}

export default function App() {
  const [messages, setMessages] = useState([
    { text: "Hello there!", sending: false, key: 1 },
  ]);

  async function deliverMessage(message) {
    await new Promise((res) => setTimeout(res, 1000));
    return message;
  }

  async function sendMessage(formData) {
    const sentMessage = await deliverMessage(formData.get("message"));
    setMessages((messages) => [...messages, { text: sentMessage }]);
  }
  return <Thread messages={messages} sendMessage={sendMessage} />;
}
