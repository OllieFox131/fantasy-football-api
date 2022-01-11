import TinyTeamItem from './TinyTeamItem'
import Spinner from '../ui/Spinner' 

const TinyTeamGrid = ({ teams, isLoading }) => {
    return isLoading ? 
    <Spinner /> : 
    <section className="tiny-cards">
        {teams.map(team => (
            <TinyTeamItem key={team.id} team={team}/>
        ))}
    </section>
}

export default TinyTeamGrid