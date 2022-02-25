import './cards.css'

function Cards(props) {
    return(
        <div className='laCarte'>
            <div className='carte' onClick={props.lesInfos}>
                <div>
                    <img src={props.pays} alt="" />
                </div>
                <div className={props.sombre == true ? "botcard" : "botcardDark"}>
                    <h2 className='titlepays'>{props.nom}</h2>
                    <div className="reste">
                        <p><span>Population</span> : {props.popu}</p>
                        <p><span>Region</span> : {props.region}</p>
                        <p className='cap'><span>Capital</span> : {props.capital}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards