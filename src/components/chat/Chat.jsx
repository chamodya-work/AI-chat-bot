export function Chat({ messages }) {
  return (
    <div>
      {messages.map(({ role, content }) => (
        <div>{content}</div>
      ))}
    </div>
  );
}
