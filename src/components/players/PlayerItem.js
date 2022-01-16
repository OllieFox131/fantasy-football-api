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
    <div className="m-10 bg-gradient-to-r from-cyan-200 to-cyan-400 rounded-xl">
      <div>
        <p className="p-2 text-xl text-center font-medium">{player.web_name}</p>
      </div>
      <div>
        <img className="w-full"
          src={playerImage}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src=`${teamImage}`;
          }}
          alt="player"
        />
      </div>
      <div className="p-2 grid grid-cols-3 container text-center text-xs">
          <p className="p-1 m-auto col-span-2">Total Points</p>
          <p className="p-1 m-auto">{player.total_points}</p>
          <p className="p-1 m-auto col-span-2">Points per Game</p>
          <p className="p-1 m-auto">{player.points_per_game}</p>
          <p className="p-1 m-auto col-span-2">Bonus Point Score</p>
          <p className="p-1 m-auto">{player.bps}</p>
          <p className="p-1 m-auto col-span-2">Goals</p>
          <p className="p-1 m-auto">{player.goals_scored}</p>
          <p className="p-1 m-auto col-span-2">Assists</p>
          <p className="p-1 m-auto">{player.assists}</p>
          <p className="p-1 m-auto col-span-2">Clean Sheets</p>
          <p className="p-1 m-auto">{player.clean_sheets}</p>
      </div>
    </div>
  )
}

export default PlayerItem