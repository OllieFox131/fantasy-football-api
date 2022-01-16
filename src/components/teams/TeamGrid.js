import TeamItem from './TeamItem'
import Spinner from '../ui/Spinner' 

const TeamGrid = ({ teams, isLoading }) => {
    return isLoading ? 
    <Spinner /> : 
    <section className="team-grid">
        {teams.map(team => (
            <TeamItem key={team.id} team={team}/>
        ))}
    </section>
}

export default TeamGrid
