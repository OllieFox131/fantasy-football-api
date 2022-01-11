const PlayerItem = ({ player, teamId }) => {
  var imageDomain = 'https://resources.premierleague.com/premierleague/photos/players/110x140/p'
  var imageNum = player.photo.split('.')[0]
  var imageEnd = '.png'

  var playerImage = imageDomain.concat(imageNum).concat(imageEnd)

  var imageDomain = 'https://resources.premierleague.com/premierleague/badges/t'
  var imageNum = teamId
  var imageEnd = '.png'

  var teamImage = imageDomain.concat(imageNum).concat(imageEnd)

  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
        <img 
          src={playerImage}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src=`${teamImage}`;
          }}
        />
        </div>
        <div className='card-back'>
          <h1>{player.web_name}</h1>
          <table>
            <tbody>
            <tr>
              <td><strong>TPoints</strong></td>
              <td>{player.total_points}</td>
            </tr>
            <tr>
              <td><strong>PointsPG</strong></td>
              <td>{player.points_per_game}</td>
            </tr>
            <tr>
              <td><strong>BonusPS</strong></td>
              <td>{player.bps}</td>
            </tr>
            <tr>
              <td><strong>Goals</strong></td>
              <td>{player.goals_scored}</td>
            </tr>
            <tr>
              <td><strong>Assists</strong></td>
              <td>{player.assists}</td>
            </tr>
            <tr>
              <td><strong>CSheets</strong></td>
              <td>{player.clean_sheets}</td>
            </tr>
            </tbody>
          </table>
          {/* <ul>
            <li>
              <strong>TPoints:</strong> {player.total_points}
            </li>
            <li>
              <strong>PointsPG:</strong> {player.points_per_game}
            </li>
            <li>
              <strong>BonusPS:</strong> {player.bps}
            </li>
            <li>
              <strong>Goals:</strong> {player.goals_scored}
            </li>
            <li>
              <strong>Assists:</strong> {player.assists}
            </li>
            <li>
              <strong>CSheets:</strong> {player.clean_sheets}
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  )
}

export default PlayerItem