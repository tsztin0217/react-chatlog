import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  return (
    // Replace the outer tag name with a semantic element that fits our use case
    <article className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        {props.id}
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}></TimeStamp></p>
        <button className="like">🤍</button>
      </section>
    </article>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string,
  body: PropTypes.string,
  timeStamp: PropTypes.string,
};

export default ChatEntry;
