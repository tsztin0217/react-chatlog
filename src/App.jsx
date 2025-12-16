import './App.css';
import DATA from './data/messages.json';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';
import { useState } from 'react';


const handleLikedChat = chat => {
  return { ...chat, liked: !chat.liked};
};

const countLikes = chatData => {
  return chatData.reduce((sum, chat) => {
    return sum + (chat.liked ? 1: 0);
  }, 0);
};

const App = () => {
  const [chatData, setChatData] = useState(DATA);
  const [localColor, setLocalColor] = useState('');
  const [remoteColor, setRemoteColor] = useState('');

  const handleLikeClicked = id => {
    setChatData(chatData => {
      return chatData.map(chat => {
        if (chat.id === id) {
          return handleLikedChat(chat);
        } else {
          return chat;
        }
      });
    });
  };

  const totalLikes = countLikes(chatData);

  return (
    <div id="App">
      <header>
        <h1>
          Chat between <span className={localColor}>Vladimir</span> and <span className={remoteColor}>Estragon</span>
        </h1>
        <div className="color-controls">
          <div className="color-picker">
            <span className={localColor}><b>Vladimir's color:</b> </span>
            <ColorChoice onClickColor={setLocalColor} />
          </div>
          <div>
            <h2>{totalLikes} ❤️s</h2>
          </div>
          <div className="color-picker">
            <span className={remoteColor}><b>Estragon's color:</b> </span>
            <ColorChoice onClickColor={setRemoteColor} />
          </div>
        </div>
      </header>
      <main>
        <ChatLog
          entries={chatData}
          onLikeToggle={handleLikeClicked}
          localColor={localColor}
          remoteColor={remoteColor}
        />
      </main>
    </div>
  );
};

export default App;
