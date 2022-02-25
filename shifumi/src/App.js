import Score from "./component/score/score"
import Regle from "./component/regle/regle"
import Item from "./component/item/item"
import { useEffect, useState } from "react/cjs/react.development";


function App() {

  const [score, setScore] = useState(0)
  const incre = () => {
    setScore(score+1)
  }

  const [win, setWin] = useState(false)
    const toggle = () => {
        setWin(true)
    }

  useEffect(() => {
    if (win) {
      incre()
    }
},[win])

  return (
    <div className="App">
      <div>
        <Score point={score} />
      </div>

      <div>
        <Item point={incre} win={toggle} />
      </div>

      <div>
        <Regle />
      </div>
    </div>
  );
}

export default App;
