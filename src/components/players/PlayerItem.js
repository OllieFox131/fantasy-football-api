const PlayerItem = ({ player }) => {
  var imageDomain = 'https://resources.premierleague.com/premierleague/photos/players/110x140/p'
  var imageNum = player.photo.split('.')[0]
  var imageEnd = '.png'

  var image = imageDomain.concat(imageNum).concat(imageEnd)

  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={image} alt='' />
        </div>
        <div className='card-back'>
          <h1>{player.web_name}</h1>
          <ul>
            <li>
              <strong>Goals:</strong> {player.goals_scored}
            </li>
            <li>
              <strong>Assists:</strong> {player.assists}
            </li>
            <li>
              <strong>Total Points:</strong> {player.total_points}
            </li>
            <li>
              <strong>Points per Game:</strong> {player.points_per_game}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PlayerItem