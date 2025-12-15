import './App.css';
import DATA from './data/messages.json';
import ChatLog from './components/ChatLog';
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
        <h1>{totalLikes} ❤️s</h1>
      </header>
      <main>
        {<ChatLog
          entries={chatData}
          onLikeToggle={handleLikeClicked}
        />}
      </main>
    </div>
  );
};

export default App;
