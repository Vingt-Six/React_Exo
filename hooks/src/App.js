import { useState } from 'react';
import './App.css';
import Perso from './components/perso/perso';

function App() {

    const [persoUn, setPersoUn] = useState({
        nom: "Marouane",
        age : 22,
        commune: "Ganshoren"
      });
      const changer = () => {
        setPersoUn({
          nom: "Kenza",
          age: 10,
          commune: "ganshoren"
        })
      }



  return (
    <div className="App">
      <Perso nom={persoUn.nom} age={persoUn.age} ville={persoUn.commune} change={changer} />
    </div>
  );
}

export default App;
