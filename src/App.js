import './App.css';
import Post from './components/Post';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <Post />
      </header>
    </div>
  );
}

export default App;
