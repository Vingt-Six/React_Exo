import "./score.css"
import logo from "./img/logo.svg"

function Score(props) {

    // const point = 0

    return(
        <section>
            <div className="leScore">
                <div className="logoImg">
                    <img src={logo} alt="" />
                </div>
                <div className="partScore">
                    <h3>SCORE</h3>
                    <h1>{props.point}</h1>
                </div>
            </div>
        </section>
    )
}

export default Score