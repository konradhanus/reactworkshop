import Antena from './ReactTower/Antena';
import JElectricityMeter from './ReactTower/JElectricityMeter';
import './App.css';
import ReactTower from './ReactTower';

function App() {
  return (
    <div className="App"> 
      <JElectricityMeter><Antena>
        
        <ReactTower />
    </Antena>
</JElectricityMeter>
          </div>
  );
}

export default App;
