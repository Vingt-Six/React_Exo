import './clique.css'

function Clique(props) {
    return (
        <div className='card1'>
            <h1>Exo 1</h1>
            <p>Clique {props.nbr}</p>
            <div className='btn'>
                <button onClick={props.clique1}>+1</button>
                <button onClick={props.clique2}>-1</button>
            </div>
        </div>
    )
}

export default Clique