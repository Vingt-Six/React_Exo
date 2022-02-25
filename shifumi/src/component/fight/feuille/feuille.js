import paper from "./icon-paper.svg"
import './feuille.css'
import scissors from '../ciseaux/icon-scissors.svg'
import rock from '../pierre/icon-rock.svg'
import { useEffect, useLayoutEffect } from "react"

function Shi(props) {

    const alea = [<div className="fufu">
                    <img src={scissors} alt="" />
                </div>, 
                <div className="shishi">
                    <img src={paper} alt="" />
                </div>, 
                <div className="mimi">
                    <img src={rock} alt="" />
                </div>]
    const random = alea[Math.floor(Math.random()*alea.length)]

    useEffect(() => {
        if (random == alea[2]) {
            props.toggle()
        }
    },[random])

    return(
        <section>
            <div className="allFight">
                <div className="youPick">
                    <h1>YOU PICKED</h1>
                    <div className="partYouPick">
                        <div className="shishi">
                            <img src={paper} alt="" />
                        </div>
                    </div>
                </div>
            <p>{random == alea[0] ? 'you lose' : random == alea[1] ? 'draw' : 'you win'}</p>
                <div className="IApick">
                    <h1>THE HOUSE PICKED</h1>
                    <div className="partIApick">
                        {random}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shi