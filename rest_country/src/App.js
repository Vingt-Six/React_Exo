import './App.css';
import Countries from './components/header/header';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Cards from './components/cards/cards';
import Header from './components/header/header';
import One from './components/oneCard/one';


function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all?fields=name,population,region,capital,nativeName,subregion,topLevelDomain,currencies,languages,borders,flags').then((all) => setData(all.data));
  }, []);

  const [research, setResearch] = useState('');
  const laRecherche = (e) => {
    setResearch(e)
  }

  const [dark, setDark] = useState(true);
  const mode = () => {
    if (dark == true) {
      setDark(false)
    } else {
      setDark(true)
    }
  }

  const [info, setInfo] = useState(true);
  const showInfo = (e) => {
    if (info == true) {
      setInfo(false)
    } else {
      setInfo(true)
    }
  }

  return (
    <div className={dark == true ? "App" : "AppDark"}>
      <div className={dark == true ? "topPage" : "topPageDark"}>
        <div className='head'>
          <h2>Where in the world?</h2>
          <p onClick={mode}><i class="fas fa-moon"></i></p>
        </div>
      </div>

      <div className={info == true ? " " : "lesPays"}>
        <div>
          <Header search={laRecherche} bgInput={dark} />
        </div>

        <div className='allCards'>
          {data.filter(data => data.name.toLowerCase().startsWith(research.toLowerCase())).map((data) => (<Cards pays={data.flags.png} nom={data.name} capital={data.capital} popu={data.population.toLocaleString('eu')} region={data.region} sombre={dark} lesInfos={() => showInfo(data)} />))}
        </div>
      </div>

      <div>
        {data.map((data) => (<One imgInfo={data.flags.png} nameInfo={data.name} natNameInfo={data.nativeName} popInfo={data.population} regInfo={data.region} subInfo={data.subregion} capInfo={data.capital} domInfo={data.topLevelDomain} quoiInfo={info} />) )}
      </div>
    </div>
  );
}

export default App;
