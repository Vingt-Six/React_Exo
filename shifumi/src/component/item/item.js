import "./item.css"
import triangle from "./img/bg-triangle.svg"
import paper from "./img/icon-paper.svg"
import rock from "./img/icon-rock.svg"
import scissors from "./img/icon-scissors.svg"
import Shi from "../fight/feuille/feuille"
import Fu from "../fight/ciseaux/ciseaux"
import Mi from "../fight/pierre/pierre"
import { useState } from "react"

function Item(props) {

    const [ok, setOk] = useState('oui')
    const feuille = () => {setOk('feuille') }
    const ciseaux = () => {setOk('ciseaux')}
    const pierre = () => {setOk('pierre')}


    if (ok == 'oui') {
        return (
            <section>
                <div className="allItem">
                    <div className="imgtriangle">
                        <img src={triangle} alt="" />
                    </div>

                    <div className="imgpaper" onClick={() => {
                        feuille() 
                    }}>
                        <img src={paper} alt="" />
                    </div>

                    <div className="imgscissors" onClick={ciseaux}>
                        <img src={scissors} alt="" />
                    </div>

                    <div className="imgrock" onClick={pierre}>
                        <img src={rock} alt="" />
                    </div>
                </div>
            </section>
        )
    } else if (ok === 'feuille') {
        return(
            <section>
                <Shi point={props.point} toggle={props.win} />    
            </section>
        )
    } else if (ok == 'ciseaux') {
        return(
            <section>
                <Fu />
            </section>
        )
    } else if (ok == 'pierre') {
        return(
            <section>
                <Mi />
            </section>
        )
    }

}

export default Item