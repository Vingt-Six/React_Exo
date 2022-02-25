import './alert.css'

function Alert() {

    const cliquealert = () => {
        alert("Pourquoi tu cliques")
    }

    return(
        <div className='card5'>
            <h1>Exo 5</h1>
            <p>Clique pour l'alert</p>
            <button onClick={cliquealert}>Click on alert</button>
        </div>
    )
}

export default Alert