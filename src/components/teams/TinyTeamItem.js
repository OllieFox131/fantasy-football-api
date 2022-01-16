import { Link } from 'react-router-dom'

const TinyTeamItem = ({ team }) => {
  var imageDomain = 'https://resources.premierleague.com/premierleague/badges/t'
  var imageNum = team.code
  var imageEnd = '.png'

  var image = imageDomain.concat(imageNum).concat(imageEnd)

  return (
    <Link to={`/team/${team.id}`}>
        <div className="tiny-team-card">
          <img id={team.code} className="tiny-team-image" src={image} alt='' />
        </div>
    </Link>
  )
}

export default TinyTeamItem