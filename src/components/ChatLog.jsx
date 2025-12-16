import PropTypes from 'prop-types';
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
      localColor={props.localColor}
      remoteColor={props.remoteColor}
    />
    );
  });

  return <ul className="chat-log">{chatComponents}</ul>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
  })).isRequired,
  onLikeToggle: PropTypes.func.isRequired,
  localColor: PropTypes.string.isRequired,
  remoteColor: PropTypes.string.isRequired,
};

export default ChatLog;