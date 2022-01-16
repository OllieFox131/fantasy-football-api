import { Link } from 'react-router-dom'

const TeamItem = ({ team }) => {
  var imageDomain = 'https://resources.premierleague.com/premierleague/badges/t'
  var imageNum = team.code
  var imageEnd = '.png'

  var image = imageDomain.concat(imageNum).concat(imageEnd)

  return (
    <Link to={`/team/${team.id}`}>
      <div className="team-card">
          <img className="team-image" id={team.code} src={image} alt='team' />
      </div>
    </Link>
  )
}

export default TeamItem