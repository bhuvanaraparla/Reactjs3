import { useState } from 'react';
import './App.css';
import colorArray from './colors';
import List from './List';

function App() {
  const [color, setColor] = useState(colorArray);
  const [showList, setShowList] = useState(false);
  const handleButtonClick = () => {
    setShowList(!showList);
  };

  return (
    <center>
              <h1>Color Picker</h1>
      <div id='container'>
        {showList && <List colors={color}/>}
      </div>
      <h3 id="display"></h3>
      <button onClick={handleButtonClick}>Pick a color</button>
    </center>
  );
}

export default App;