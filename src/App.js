import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import JokeGenerator from './components/JokeGenerator';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <JokeGenerator/>
    </div>
  );
}

export default App;
