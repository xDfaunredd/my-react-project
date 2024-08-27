const Mailbox = ({ username, messages }) => {
  return (
    <>
      <p>Hello {username}</p>
      <p>
        {messages.length > 0
          ? `You have ${messages.length} unread ${
              messages.length === 1 ? "message" : "messages"
            }`
          : "No unread messages"}
      </p>
    </>
  );
};

export default Mailbox;
