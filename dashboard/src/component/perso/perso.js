import perso from './perso.css'
import jerem from './image-jeremy.png'
import { useState } from 'react/cjs/react.development'

function Personnage(props) {
    return(
        <section className='avatar'>
            <div className='cardAvatar'>
                <div className='partAvatar'>
                    <div>
                        <img src={jerem} alt="" className='divimg' />
                    </div>
                    <p className='report'>Report for</p>
                    <h1 className='name'>Jeremy Robson</h1>
                </div>
                <div className='button'>
                    <p onClick={props.day}>Daily</p>
                    <p onClick={props.week}>Weekly</p>
                    <p onClick={props.month}>Monthly</p>
                </div>
            </div>
        </section>
    )
}

export default Personnage