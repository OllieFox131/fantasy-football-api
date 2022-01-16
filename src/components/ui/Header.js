import logo from '../../img/premierleague.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Link to={{
            pathname: `/`,
          }}>
        <header>
            <img className="m-auto p-10" src={logo} alt="" />
        </header>
        </Link>
    )
}

export default Header
