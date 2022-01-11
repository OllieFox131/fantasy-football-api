import { Link } from 'react-router-dom'

const TeamItem = ({ team }) => {
  var imageDomain = 'https://resources.premierleague.com/premierleague/badges/t'
  var imageNum = team.code
  var imageEnd = '.png'

  var image = imageDomain.concat(imageNum).concat(imageEnd)

  return (
    <Link to={`/team/${team.id}`}>
      <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={image} alt='' />
          </div>
          <div className='card-back'>
            <h1>{team.name}</h1>
            <ul>
              <li>
                <strong>Id:</strong> {team.id}
              </li>
              <li>
                <strong>Strength:</strong> {team.strength}
              </li>
              <li>
                <strong>Strenght Overall Home:</strong> {team.strength_overall_home}
              </li>
              <li>
                <strong>Strenght Overall Away:</strong> {team.strength_overall_away}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default TeamItem