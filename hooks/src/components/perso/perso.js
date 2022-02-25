import './perso.css'

function Perso(props) {
    return (
        <div>
            <p>Je m'appelle {props.nom}, j'ai {props.age} ans et je viens de {props.ville}.</p>
            <button onClick={props.change}>Changer</button>
        </div>
    );
}

export default Perso;
