import './App.css';
import chatData from './data/messages.json';
import ChatEntry from './components/ChatEntry';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {
        /*Wave 02: Render ChatLog component */}
        <ChatEntry sender={chatData[0].sender} body={chatData[0].body} timeStamp={chatData[0].timeStamp}/>
      </main>
    </div>
  );
};

export default App;
