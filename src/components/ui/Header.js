import logo from '../../img/premierleague.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Link to={{
            pathname: `/`,
          }}>
        <header className='center'>
            <img src={logo} alt="" />
        </header>
        </Link>
    )
}

export default Header
