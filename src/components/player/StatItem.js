const StatItem = ({ history, teamId }) => {
    return (
      <div className="player-card">
        <div>
            <p className="player-card-header">{history.season_name}</p>
        </div>
        <div className="player-card-footer">
            <p className="footer-stat col-span-2">Total Points</p>
            <p className="footer-stat">{history.goals_scored}</p>
        </div>
      </div>
    )
  }
  
  export default StatItem