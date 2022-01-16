import { Link } from 'react-router-dom'

const PlayerItem = ({ player, team }) => {
  var playerDomain = 'https://resources.premierleague.com/premierleague/photos/players/110x140/p'
  var playerNum = player.photo.split('.')[0]
  var playerEnd = '.png'

  var playerImage = playerDomain.concat(playerNum).concat(playerEnd)

  var imageDomain = 'https://resources.premierleague.com/premierleague/badges/t'
  var imageNum = team.code
  var imageEnd = '.png'

  var image = imageDomain.concat(imageNum).concat(imageEnd)

  return (
    <div>
        <div className="player-card">
        <div>
            <p className="player-card-header">{player.web_name}</p>
        </div>
        <div>
            <img className="player-card-image"
            src={playerImage}
            alt="player"
            />
        </div>
        <div className="player-card-footer">
            <p className="footer-stat col-span-2">Total Points</p>
            <p className="footer-stat">{player.total_points}</p>
            <p className="footer-stat col-span-2">Points per Game</p>
            <p className="footer-stat">{player.points_per_game}</p>
            <p className="footer-stat col-span-2">Bonus Point Score</p>
            <p className="footer-stat">{player.bps}</p>
            <p className="footer-stat col-span-2">Goals</p>
            <p className="footer-stat">{player.goals_scored}</p>
            <p className="footer-stat col-span-2">Assists</p>
            <p className="footer-stat">{player.assists}</p>
            <p className="footer-stat col-span-2">Clean Sheets</p>
            <p className="footer-stat">{player.clean_sheets}</p>
        </div>
        </div>
        <Link to={`/team/${team.id}`}>
        <div className="team-card">
            <img className="team-image" id={team.id} src={image} alt='team' />
        </div>
        </Link>
    </div>
  )
}

export default PlayerItem