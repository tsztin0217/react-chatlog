import './App.css';
import DATA from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';


const handleLikedChat = chat => {
  return { ...chat, liked: !chat.liked};
};

// const countLikes = chatData => {
//   return chatData.reduce((sum, like) => {
//     return // 
//   });
// };
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
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
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
