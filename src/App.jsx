import { useState } from "react";
import styles from "./App.module.css";
import { Chat } from "./components/chat/Chat";

function App() {
  const [messages, setMessage] = useState(MESSAGES);
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <img className={styles.Logo} src="/chat-bot.png" />
        <h2 className={styles.Title}>Ai Chat-Bot</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>
    </div>
  );
}
const MESSAGES = [
  {
    role: "user",
    content: "Hello, how are you?",
  },
  {
    role: "assistant",
    content: "I am fine, thank you! How can I assist you today?",
  },
  {
    role: "user",
    content: "What is the weather like today?",
  },
  {
    role: "assistant",
    content: "The weather is sunny with a high of 25°C.",
  },
];

export default App;
