import './bg.css'

function Back() {
    return(
        <div className='card4'>
            <h1>Exo 4</h1>
            <p>Focus</p>
            <input type="text" onFocus={(e) => e.target.style = 'background-color: lightgreen; color: gray;'} onBlur={(e) => e.target.style = 'background-color: white; color: black;'}/>
        </div>
    )
}

export default Back