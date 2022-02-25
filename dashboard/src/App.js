import Personnage from "./component/perso/perso";
import Cards from "./component/cards/cards";
import data from "./data.json"
import {useState} from "react";

const color = ["bgun", "bgdeux", "bgtrois", "bgquatre", "bgcinq", "bgsix"]


function App() {
  
  const [oui, setOui] = useState('daily')

  const day = () => {
    setOui("daily")
  }

  const week = () => {
    setOui("weekly")
  }

  const month = () => {
    setOui("monthly")
  }

  return (
    <div className="App" >
      <div>
        <Personnage day={day} week={week} month={month} />
      </div>
      <div className="cards" > 
      {data.map((data) => (<Cards name={data.title} hrs={data.timeframes[oui].current} last={data.timeframes[oui].last} lasthrs={data.timeframes[oui].previous} bgcolor={color[data.id]} svg={[data.id]} />))}
      </div>
    </div>
  );
}

export default App;