import './one.css'
import ouai from './desktop-step-3.jpg'

function One(props) {
    return (
        <div className={props.quoiInfo == true ? "rien" : " "}>
            <button><i class="fas fa-arrow-left"></i> Back</button>
            <div className='cardInfo'>
                <div className='cardImgInfo'>
                    <img src={props.imgInfo} alt="" />
                </div>
                <div className='oneInfo'>
                    <h1>{props.nameInfo}</h1>
                    <div className='listInfo'>
                        <div>
                            <li><span>Native Name:</span> {props.natNameInfo}</li>
                            <li><span>Population:</span> {props.popInfo}</li>
                            <li><span>Region:</span> {props.regInfo}</li>
                            <li><span>Sub Region:</span> {props.subInfo}</li>
                            <li><span>Capital:</span> {props.capInfo}</li>
                        </div>
                        <div>
                            <li><span>Top Level Domain:</span> {props.domInfo}</li>
                            <li><span>Currencies:</span> {props.curInfo}</li>
                            <li><span>Languages:</span> {props.langInfo}</li>
                        </div>
                    </div>
                    <div>
                        <p>Border Countries:</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default One