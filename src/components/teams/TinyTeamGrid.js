import TinyTeamItem from './TinyTeamItem'
import Spinner from '../ui/Spinner' 

const TinyTeamGrid = ({ teams, isLoading }) => {
    return isLoading ? 
    <Spinner /> : 
    <section className="grid grid-cols-10 xl:grid-cols-20 container m-auto">
        {teams.map(team => (
            <TinyTeamItem key={team.id} team={team}/>
        ))}
    </section>
}

export default TinyTeamGrid