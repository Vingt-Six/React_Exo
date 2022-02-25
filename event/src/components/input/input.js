import { useState } from 'react'
import './input.css'

function Input() {

    const [txt, setTxt] = useState("Change moi")

    const press = (e) => {
        if (e.key == 'Enter') {
            setTxt(e.target.value)
        }
    }

    return(
        <div className='card2'>
            <h1>Exo 2</h1>
            <p>{txt}</p>
            <input type="text" onKeyPress={press}/>
        </div>
    )
}

export default Input