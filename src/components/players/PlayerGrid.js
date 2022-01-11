import PlayerItem from './PlayerItem'
import Spinner from '../ui/Spinner' 
import { useParams } from 'react-router-dom'

const PlayerGrid = ({ players, isLoading }) => {
    const { id } = useParams();

    const teamPlayers = players.filter((player) => player.team == id)

    teamPlayers.sort(function(a, b){
        if(a.total_points < b.total_points) { return 1; }
        if(a.total_points > b.total_points) { return -1; }
        return 0;
    })

    return isLoading ? 
    <Spinner /> : 
    <section className="player-cards">
        {teamPlayers.map(player => (
            <PlayerItem key={player.id} player={player}/>
        ))}
    </section>
}

export default PlayerGrid