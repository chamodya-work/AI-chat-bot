import styles from "./App.module.css";
import { Chat } from "./components/chat/Chat";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <img className={styles.Logo} src="/chat-bot.png" />
        <h2 className={styles.Title}>Ai Chat-Bot</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat />
      </div>
    </div>
  );
}

export default App;
