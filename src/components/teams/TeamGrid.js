import TeamItem from './TeamItem'
import Spinner from '../ui/Spinner' 

const TeamGrid = ({ teams, isLoading }) => {
    return isLoading ? 
    <Spinner /> : 
    <section className="grid grid-cols-4 lg:grid-cols-5 container m-auto">
        {teams.map(team => (
            <TeamItem key={team.id} team={team}/>
        ))}
    </section>
}

export default TeamGrid
