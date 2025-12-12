import './App.css';
import chatData from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {<ChatLog entries={chatData}></ChatLog>}
      </main>
    </div>
  );
};

export default App;
