import { useState } from 'react'
import './copy.css'

function Copy() {

    const copy = (e) => {
        alert(e.target.value)
    }

    return(
        <div className='card3'>
            <h1>Exo 3</h1>
            <p>On copy</p>
            <input type="text" onCopy={copy}/>
        </div>
    )
}

export default Copy