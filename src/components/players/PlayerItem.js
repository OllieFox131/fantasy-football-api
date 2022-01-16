const PlayerItem = ({ player, teamId }) => {
  var playerDomain = 'https://resources.premierleague.com/premierleague/photos/players/110x140/p'
  var playerNum = player.photo.split('.')[0]
  var playerEnd = '.png'

  var playerImage = playerDomain.concat(playerNum).concat(playerEnd)

  var teamDomain = 'https://resources.premierleague.com/premierleague/badges/t'
  var teamNum = teamId
  var teamEnd = '.png'

  var teamImage = teamDomain.concat(teamNum).concat(teamEnd)

  return (
    <div className="player-card">
      <div>
        <p className="player-card-header">{player.web_name}</p>
      </div>
      <div>
        <img className="player-card-image"
          src={playerImage}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src=`${teamImage}`;
          }}
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
  )
}

export default PlayerItem