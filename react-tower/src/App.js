import logo from './logo.svg';
import './App.css';
import ReactTower from './ReactTower';

function App() {
  return (
    <div className="App"> 
      <img src={logo} className="App-logo" alt="logo" />
      <ReactTower />
    </div>
  );
}

export default App;
