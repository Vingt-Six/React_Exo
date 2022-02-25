import scissors from "./icon-scissors.svg"
import './ciseaux.css'
import paper from '../feuille/icon-paper.svg'
import rock from '../pierre/icon-rock.svg'

function Fu() {

    const alea1 = [<div className="fufu">
                    <img src={scissors} alt="" />
                </div>, 
                <div className="shishi">
                    <img src={paper} alt="" />
                </div>, 
                <div className="mimi">
                    <img src={rock} alt="" />
                </div>]
    const random1 = alea1[Math.floor(Math.random()*alea1.length)]

    return(
        <section>
            <div className="allFight">
                <div className="youPick">
                    <h1>YOU PICKED</h1>
                    <div className="partYouPick">
                        <div className="fufu">
                            <img src={scissors} alt="" />
                        </div>
                    </div>
                </div>
                <p>{random1 == alea1[0] ? 'draw' : random1 == alea1[1] ? 'you win' : 'you lose'}</p>
                <div className="IApick">
                    <h1>THE HOUSE PICKED</h1>
                    <div className="partIApick">
                        {random1}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Fu