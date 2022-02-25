import './header.css'

function Header(props) {

    return (
        <div>
            <div className='searchNav'>
                <div className={props.bgInput == true ? 'search' : 'searchDark'}>
                    <p className='ftAwesome'><i class="fas fa-search"></i></p>
                    <input type="text" className={props.bgInput == true ? 'inSearch' : 'inSearchDark'} placeholder='Search for a country...' onChange={(e) => props.search(e.target.value)}/>
                </div>
                <div>
                    <select name="select">
                        <option value="Filter by region">Filter by region</option>
                        <option value="Africa">Africa</option>
                        <option value="America">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Header