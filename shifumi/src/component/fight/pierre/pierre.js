import rock from "./icon-rock.svg"
import './pierre.css'
import paper from '../feuille/icon-paper.svg'
import scissors from '../ciseaux/icon-scissors.svg'


function Mi() {

    const alea2 = [<div className="fufu">
                    <img src={scissors} alt="" />
                </div>, 
                <div className="shishi">
                    <img src={paper} alt="" />
                </div>, 
                <div className="mimi">
                    <img src={rock} alt="" />
                </div>]
    const random2 = alea2[Math.floor(Math.random()*alea2.length)]

    return(
        <section>
            <div className="allFight">
                <div className="youPick">
                    <h1>YOU PICKED</h1>
                    <div className="partYouPick">
                        <div className="mimi">
                            <img src={rock} alt="" />
                        </div>
                    </div>
                </div>
                <p>{random2 == alea2[0] ? 'you win' : random2 == alea2[1] ? 'you lose' : 'draw'}</p>
                <div className="IApick">
                    <h1>THE HOUSE PICKED</h1>
                    <div className="partIApick">
                        {random2}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mi