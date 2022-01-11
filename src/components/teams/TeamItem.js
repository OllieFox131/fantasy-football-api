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
            <table>
              <tbody>
              <tr>
                <td><strong>Id</strong></td>
                <td>{team.id}</td>
              </tr>
              <tr>
                <td><strong>Strength</strong></td>
                <td>{team.strength}</td>
              </tr>
              <tr>
                <td><strong>Strength Overall Home</strong></td>
                <td>{team.strength_overall_home}</td>
              </tr>
              <tr>
                <td><strong>Strenth Overall Away</strong></td>
                <td>{team.strength_overall_away}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default TeamItem