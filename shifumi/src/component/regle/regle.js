import { useState } from "react"
import imgClose from "./img/icon-close.svg"
import imgRules from "./img/image-rules.svg"
import "./regle.css"

function Regle() {

    const [rules, setRules] = useState('none')
    const open = () => {setRules('flex')}
    const close = () => {setRules('none')}

    return(
        <section>
            <div className="btnRules">
                <p onClick={open}>RULES</p>
            </div>
            <div className="modalRules" style={{display : rules}}>
                <div className="partRules">
                    <div className="partClose">
                        <h2>RULES</h2>
                        <img src={imgClose} alt="" onClick={close}/>
                    </div>
                    <img src={imgRules} alt="" className="lesRegles"/>
                </div>
            </div>
        </section>
    )
}

export default Regle