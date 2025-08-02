import styles from "./App.module.css";
function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <img className={styles.Logo} src="/chat-bot.png" />
        <h2 className={styles.Title}>Ai Chat-Bot</h2>
      </header>
      <div className={styles.ChatContainer} />
    </div>
  );
}

export default App;
