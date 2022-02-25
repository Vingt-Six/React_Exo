import { useState } from 'react';
import './App.css';
import Clique from './components/clique/clique';
import Input from './components/input/input';
import Copy from './components/copy/copy'
import Back from './components/bgchange/bg';
import Alert from './components/alert/alert';

function App() {

  const [clique, setClique] = useState(0);
  const auClique = () => {
    setClique(clique + 1)
  }
  const auClique2 = () => {
    setClique(clique - 1)
  }

  return (
    <div className="App">
      <div>
        <Clique nbr={clique} clique1={auClique} clique2={auClique2} />
      </div>
      <div>
        <Input />
      </div>
      <div>
        <Copy />
      </div>
      <div>
        <Back />
      </div>
      <div>
        <Alert />
      </div>
    </div>
  );
}

export default App;
