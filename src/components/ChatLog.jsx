import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatComponents = props.entries.map((entry) => {
    return (<ChatEntry
      key={entry.id}
      id={entry.id}
      sender={entry.sender}
      body={entry.body}
      timeStamp={entry.timeStamp}
      liked={entry.liked}
      onLikeToggle={props.onLikeToggle}
    />
    );
  });

  return <ul className="chat-log">{chatComponents}</ul>;
};

export default ChatLog;