import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {

  const likeButtonClicked = () => {
    props.onLikeToggle(props.id);
  };

  const likeButtonColor = props.liked ? '❤️' : '🤍';
  const isLocal = props.sender === 'Vladimir';
  const colorClass = isLocal ? props.localColor : props.remoteColor;

  return (
    <article className={`chat-entry ${isLocal ? 'local' : 'remote'}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className={`entry-bubble ${colorClass}`}>
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}></TimeStamp></p>
        <button className="like" onClick={likeButtonClicked}>{likeButtonColor}</button>
      </section>
    </article>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string,
  body: PropTypes.string,
  timeStamp: PropTypes.string,
  liked: PropTypes.bool,
  id: PropTypes.number,
  onLikeToggle: PropTypes.func,
  localColor: PropTypes.string,
  remoteColor: PropTypes.string,
};

export default ChatEntry;
