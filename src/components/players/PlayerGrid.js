import PlayerItem from './PlayerItem'
import Spinner from '../ui/Spinner' 
import { useParams } from 'react-router-dom'

const PlayerGrid = ({ players, teams, isLoading }) => {
    const { id } = useParams();

    const teamPlayers = players.filter((player) => player.team == id)
    teamPlayers.sort(function(a, b){
        if(a.total_points < b.total_points) { return 1; }
        if(a.total_points > b.total_points) { return -1; }
        return 0;
    })
    
    const team = teams.filter((team) => team.id == id)[0]

    return isLoading ? 
    <Spinner /> : 
    <section className="player-card-grid">
        {teamPlayers.map(player => (
            <PlayerItem key={player.id} player={player} teamId={team.code}/>
        ))}
    </section>
}

export default PlayerGrid